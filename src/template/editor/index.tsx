import React, { useState } from 'react'
import Material from './material'
import Blueprint from './blueprint'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { DroppableIds, MaterialType } from './types'
import Building from './building'
import { Layout } from '../../definition/layout/types'
import { createLayout } from '../../definition/layout/utils'
import { Content } from '../../definition/content/types'
import { createContent } from '../../definition/content/utils'
import { message } from 'antd'
import { deserializePage, flattenData, getRenderData } from '../../definition/utils'
import { Metadata, Page, PageSerialize, Template } from '../../definition/types'
import Header from '../../components/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { METATABLES, TEMPLATES } from '../../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { CONTENT_DEFINITIONS } from '../../definition'
import Many from '../../definition/layout/many'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    display: flex;
    flex: auto;
  }
`

function Editor () {
  const navigate = useNavigate()
  const { id } = useParams()
  const [templates, setTemplates] = useLocalStorage('RE-templates', JSON.stringify(TEMPLATES))

  const template = (JSON.parse(templates) as Template[]).find((it: any) => it.id === id)
  if (!template) {
    message.error('编辑内容已被删除')
    navigate('/template')
    return null
  }

  const [metatables] = useLocalStorage('RE-metatables', JSON.stringify(METATABLES))
  const metadata = (JSON.parse(metatables) as Metadata[]).find(it => it.id === template.metadataId)!
  const renderData = flattenData(JSON.parse(metadata.json))

  const [pageCache, setPageCache] = useLocalStorage(`RE-editTemplate-${id}`)
  const pageSerialize: PageSerialize = JSON.parse(pageCache || template.json || JSON.stringify({
    footer: -1,
    header: -1,
    width: 210,
    height: 297,
    layouts: [],
    listIndexes: [],
    pageIndexes: [],
    styles: []
  }))
  const page: Page = deserializePage(pageSerialize)
  const setPage = (value: Page) => {
    setPageCache(JSON.stringify(value))
  }

  const [active, setActive] = useState<Layout | Content<any, any> | undefined>()

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list

    const {
      destination,
      source,
      draggableId
    } = result

    if (!destination || destination.droppableId === DroppableIds.Material) {
      return
    }

    // 拖动内容素材
    if (source.droppableId === DroppableIds.Material) {
      const contentDefinition = CONTENT_DEFINITIONS.find(it => it.key === draggableId)!
      // 移动到空白区域
      if (destination.droppableId === DroppableIds.Building) {
        // 移动内容到基础布局
        const layout = createLayout(contentDefinition, page.styles)
        page.layouts.splice(destination.index, 0, layout)
        setPage({ ...page })
        setActive(layout.contents[0])
        return
      }

      // 移动到现有布局
      const layout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      const content = createContent(layout, contentDefinition, page.styles)
      if (layout.definition !== Many) {
        return
      }
      layout.contents.splice(destination.index, 0, content)
      setActive(content)
      setPage({ ...page, layouts: [...page.layouts] })
      return
    }

    // 移动布局/内容, 修改顺序
    if (source.droppableId === destination.droppableId) {
      // 删除后的位置调整
      const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0

      // 布局修改顺序
      if (source.droppableId === DroppableIds.Building) {
        const target = page.layouts[source.index]
        // 删除原有
        page.layouts.splice(source.index, 1)
        // 重新插入
        page.layouts.splice(destination.index - offset, 0, target)
        setActive(target)
        setPage({ ...page, layouts: [...page.layouts] })
        return
      }
      // 内容修改顺序
      const layout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      const contents = layout.contents
      const target = contents[source.index]
      // 删除原有
      contents.splice(source.index, 1)
      // 重新插入
      contents.splice(destination.index - offset, 0, target)
      target.layout = layout
      setActive(target)
      setPage({ ...page, layouts: [...page.layouts] })
      return
    }

    // 布局合并
    if (draggableId.endsWith(MaterialType.Layout) && destination.droppableId.endsWith(MaterialType.Content)) {
      const index = page.layouts.findIndex(it => draggableId.startsWith(it.id))
      // 布局不是行多排列禁止合并
      if (index === -1 || page.layouts[index].definition !== Many) {
        return
      }
      const layout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      // 布局不是行排列禁止合并
      if (!layout || layout.definition !== Many) {
        return
      }
      // 将拖动布局内容合并到目标布局
      const contents = page.layouts[index].contents
      layout.contents.splice(destination.index, 0, ...contents)
      // 删除拖动布局
      page.layouts.splice(index, 1)
      setPage({ ...page, layouts: [...page.layouts] })
    }

    // 移动内容
    if (!draggableId.endsWith(MaterialType.Layout) && !draggableId.endsWith(MaterialType.Content)) {
      const sourceLayout = page.layouts.find(it => source.droppableId.startsWith(it.id))!
      const content = sourceLayout.contents.find(it => it.id === draggableId)!
      const destinationLayout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!

      // 拖动结果为建造区
      if (destination.droppableId === DroppableIds.Building) {
        const layout = createLayout(Many)
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
        const idx = page.layouts.findIndex(it => source.droppableId.startsWith(it.id))!
        page.layouts.splice(idx, 1)
      }
      setPage({ ...page, layouts: [...page.layouts] })
    }
  }

  const changeActive = (layoutId: string, contentId?: string) => {
    const layout = page.layouts.find(it => it.id === layoutId)!
    if (contentId) {
      const content = layout.contents.find(it => it.id === contentId)!
      setActive(content)
    } else {
      setActive(layout)
    }
  }

  const changeActiveValue = (value: Layout | Content<any, any>) => {
    setActive(value)
    let layoutIndex = page.layouts.findIndex(it => it.id === value.id)
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
      setPage({ ...page })
      return
    }
    // content 修改
    const content = value as Content<any, any>
    layoutIndex = page.layouts.findIndex(it => it.id === content.layout.id)
    // 移动后未修改 content.layout 发生错误
    if (layoutIndex === -1) {
      setActive(undefined)
      message.error('无效的修改,编辑的内容已过期')
      return
    }
    const layout = page.layouts[layoutIndex]
    const contentIndex = layout.contents.findIndex(it => it.id === content.id)
    const target = layout.contents[contentIndex]
    target.value = (value as Content<any, any>).value
    target.styles = value.styles
    layout.contents.splice(contentIndex, 1, target)
    page.layouts.splice(layoutIndex, 1, layout)
    setPage({ ...page })
  }

  const onSave = (back: boolean) => {
    const temps = JSON.parse(templates) as Template[]
    template.json = pageCache
    const index = temps.findIndex(it => it.id === template.id)
    if (index === -1) {
      message.error('编辑内容已被删除')
      navigate('/template')
      setPageCache('')
      return
    }
    temps.splice(index, 1, template)
    setTemplates(JSON.stringify(temps))
    setPageCache('')
    if (back) {
      navigate('/template')
    }
  }

  const onCancel = () => {
    setPageCache('')
  }

  return (
    <Container>
      <Header isFull={true} />
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Material
            value={page}
            onChange={setPage}
            updating={!!pageCache}
            onSave={onSave}
            onCancel={onCancel}
            template={template}
          />
          <Building
            value={page}
            getData={value => getRenderData(value, metadata, renderData)}
            onChangeActive={changeActive}
            active={active}
          />
        </DragDropContext>
        <Blueprint
          active={active}
          onChangeActiveValue={changeActiveValue}
          onChangeActive={changeActive}
          value={page}
          onChange={setPage}
          metadata={metadata}
          getData={value => getRenderData(value, metadata, renderData)}
        />
      </div>
    </Container>
  )
}

export default Editor
