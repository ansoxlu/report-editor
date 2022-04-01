import { message } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import hooks from '../../app/hooks'
import { Page } from '../../definition/types'
import utils from '../../definition/definition-utils'
import { Layout } from '../../definition/layout/types'
import { Content } from '../../definition/content/types'
import Blueprint from './blueprint/Blueprint'
import Building from './building/Building'
import Material from './material/Material'
import { DroppableIds, MaterialType } from './types'
import definition from '../../definition/definition'
import layoutUtils from '../../definition/layout/layout-utils'
import Many from '../../definition/layout/Many'
import contentUtils from '../../definition/content/content-utils'

const Container = styled.div`
  display: flex;
  width: 100%;
`

function TemplateEditor() {
  const navigate = useNavigate()
  const [database, setDatabase] = hooks.useDatabase()

  const { id } = useParams()
  const template = React.useMemo(() => database.templates.find((it) => it.id === id), [database])
  if (!template) {
    message.error('编辑内容已被删除')
    navigate('/')
    return null
  }

  const cacheKey = React.useMemo(() => `RE-editTemplate-${id}`, [id])
  const [updated, setUpdated] = React.useState(false)

  const metadata = React.useMemo(
    () => database.metatables.find((it) => it.id === template.metadataId)!,
    [database],
  )

  const renderData = React.useMemo(() => utils.flattenData(JSON.parse(metadata.json)), [metadata])

  const createPage = () => {
    const serial = localStorage.getItem(cacheKey) || template.json

    return utils.deserializePage(serial || {
      footer: -1,
      header: -1,
      width: 210,
      height: 297,
      layouts: [],
      styles: [],
    })
  }

  const [page, setPage] = React.useState(createPage)

  const onCacheRemove = () => {
    localStorage.removeItem(cacheKey)
    setUpdated(false)
    setPage(createPage())
  }

  const [active, setActive] = React.useState<Layout | Content<any, any>>()

  const onPageChange = (value: Page) => {
    setUpdated(true)
    setPage(value)
    localStorage.setItem(cacheKey, JSON.stringify(value))
  }

  const onSave = () => {
    const index = database.templates.findIndex((it) => it.id === template.id)
    template.json = JSON.stringify(page)
    database.templates.splice(index, 1, template)
    setDatabase(database)
    onCacheRemove()
  }

  const onActiveChange = (layoutId: string, contentId?: string) => {
    const layout = page.layouts.find((it) => it.id === layoutId)!
    if (contentId) {
      const content = layout.contents.find((it) => it.id === contentId)!
      setActive(content)
    } else {
      setActive(layout)
    }
  }

  const changeActiveValue = (value: Layout | Content<any, any>) => {
    setActive(value)
    let layoutIndex = page.layouts.findIndex((it) => it.id === value.id)
    // layout 修改
    if (layoutIndex !== -1) {
      const layout = page.layouts[layoutIndex]
      layout.contents = (value as Layout).contents
      layout.styles = value.styles
      if (layout.contents.length === 0) {
        page.layouts.splice(layoutIndex, 1)
      } else {
        page.layouts.splice(layoutIndex, 1, layout)
      }
      onPageChange(page)
      return
    }
    // content 修改
    const content = value as Content<any, any>
    layoutIndex = page.layouts.findIndex((it) => it.id === content.layout.id)
    // 移动后未修改 content.layout 发生错误
    if (layoutIndex === -1) {
      setActive(undefined)
      message.error('无效的修改,编辑的内容已过期')
      return
    }
    const layout = page.layouts[layoutIndex]
    const contentIndex = layout.contents.findIndex((it) => it.id === content.id)
    const target = layout.contents[contentIndex]
    target.value = (value as Content<any, any>).value
    target.styles = value.styles
    layout.contents.splice(contentIndex, 1, target)
    page.layouts.splice(layoutIndex, 1, layout)
    onPageChange(page)
  }

  const onDragEnd = (result: DropResult) => {
    const {
      destination,
      source,
      draggableId,
    } = result

    const destDropId = destination?.droppableId
    const sourceDropId = source.droppableId

    if (!destination || !destDropId || destDropId === DroppableIds.Material) {
      return
    }

    // 拖动内容素材
    if (sourceDropId === DroppableIds.Material) {
      const contentDefinition = definition.contents.find((it) => it.key === draggableId)!
      // 移动到空白区域
      if (destDropId === DroppableIds.Building) {
        // 移动内容到基础布局
        const layout = layoutUtils.createLayout(contentDefinition, page.styles)
        page.layouts.splice(destination.index, 0, layout)
        onPageChange(page)
        setActive(layout.contents[0])
        return
      }

      // 移动到现有布局
      const layout = page.layouts.find((it) => destDropId.startsWith(it.id))!
      const content = contentUtils.createContent(layout, contentDefinition, page.styles)
      if (layout.definition !== Many) {
        return
      }
      layout.contents.splice(destination.index, 0, content)
      setActive(content)
      onPageChange(page)
      return
    }

    // 移动布局/内容, 修改顺序
    if (sourceDropId === destDropId) {
      // 删除后的位置调整
      const offset = destination.index > 0 && source.index > destination.index
        ? destination.index - 1
        : 0

      // 布局修改顺序
      if (sourceDropId === DroppableIds.Building) {
        const target = page.layouts[source.index]
        // 删除原有
        page.layouts.splice(source.index, 1)
        // 重新插入
        page.layouts.splice(destination.index - offset, 0, target)
        setActive(target)
        onPageChange(page)
        return
      }
      // 内容修改顺序
      const layout = page.layouts.find((it) => destDropId.startsWith(it.id))!
      const { contents } = layout
      const target = contents[source.index]
      // 删除原有
      contents.splice(source.index, 1)
      // 重新插入
      contents.splice(destination.index - offset, 0, target)
      target.layout = layout
      setActive(target)
      onPageChange(page)
      return
    }

    // 布局合并
    if (draggableId.endsWith(MaterialType.Layout) && destDropId.endsWith(MaterialType.Content)) {
      const index = page.layouts.findIndex((it) => draggableId.startsWith(it.id))
      // 布局不是行多排列禁止合并
      if (index === -1 || page.layouts[index].definition !== Many) {
        return
      }
      const layout = page.layouts.find((it) => destDropId.startsWith(it.id))!
      // 布局不是行排列禁止合并
      if (!layout || layout.definition !== Many) {
        return
      }
      // 将拖动布局内容合并到目标布局
      const { contents } = page.layouts[index]
      layout.contents.splice(destination.index, 0, ...contents)
      // 删除拖动布局
      page.layouts.splice(index, 1)
      onPageChange(page)
    }

    // 移动内容
    if (!draggableId.endsWith(MaterialType.Layout) && !draggableId.endsWith(MaterialType.Content)) {
      const sourceLayout = page.layouts.find((it) => sourceDropId.startsWith(it.id))!
      const content = sourceLayout.contents.find((it) => it.id === draggableId)!
      const destinationLayout = page.layouts.find((it) => destDropId.startsWith(it.id))!

      // 拖动结果为建造区
      if (destDropId === DroppableIds.Building) {
        const layout = layoutUtils.createLayout(Many)
        layout.contents.push(content)
        page.layouts.splice(destination.index, 0, layout)
        content.layout = layout
      } else if (destinationLayout && destinationLayout.definition === Many) {
        // 向结果布局插入内容
        destinationLayout.contents.splice(destination.index, 0, content)
        content.layout = destinationLayout
        setActive(content)
      } else {
        // 无效拖动
        return
      }

      // 从原拖动布局删除内容
      sourceLayout.contents.splice(source.index, 1)

      // 判断删除拖动布局是否空， 空删除
      if (!sourceLayout.contents.length) {
        const idx = page.layouts.findIndex((it) => sourceDropId.startsWith(it.id))!
        page.layouts.splice(idx, 1)
      }
      onPageChange(page)
    }
  }

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Material
          value={page}
          onChange={onPageChange}
          updated={updated}
          onSave={onSave}
          onCancel={onCacheRemove}
          template={template}
        />
        <Building
          value={page}
          getData={(value) => utils.getRenderData(value, metadata, renderData)}
          onChangeActive={onActiveChange}
          active={active}
        />
      </DragDropContext>
      <Blueprint
        active={active}
        onChangeActiveValue={changeActiveValue}
        onChangeActive={onActiveChange}
        value={page}
        onChange={onPageChange}
        metadata={metadata}
        getData={(value) => utils.getRenderData(value, metadata, renderData)}
      />
    </Container>
  )
}

export default TemplateEditor
