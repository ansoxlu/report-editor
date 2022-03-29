import { message } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import hooks from '../../app/hooks'
import { Page } from '../../definition/types'
import utils from '../../definition/utils'
import { Layout } from '../../definition/layout/types'
import { Content } from '../../definition/content/types'
import Blueprint from './blueprint/Blueprint'
import Building from './building/Building'
import Material from './material/Material'

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

  const metadata = React.useMemo(
    () => database.metatables.find((it) => it.id === template.metadataId)!,
    [database],
  )

  const renderData = React.useMemo(() => utils.flattenData(JSON.parse(metadata.json)), [metadata])

  const [pageCache, setPageCache] = useLocalStorage(`RE-editTemplate-${id}`)

  const onRemoveCache = () => localStorage.removeItem(`RE-editTemplate-${id}`)

  const page = React.useMemo(() => utils.deserializePage(pageCache || template.json || {
    footer: -1,
    header: -1,
    width: 210,
    height: 297,
    layouts: [],
    styles: [],
  }), [pageCache, template])

  const [active, setActive] = React.useState<Layout | Content<any, any>>()

  const onPageChange = (page: Page) => {
    setPageCache(JSON.stringify(page))
  }

  const onSave = () => {
    if (!pageCache) {
      return
    }
    const index = database.templates.findIndex((it) => it.id === template.id)
    template.json = pageCache
    database.templates.splice(index, 1, template)
    setDatabase(database)
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
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Material
          value={page}
          onChange={onPageChange}
          updating={!!pageCache}
          onSave={onSave}
          onCancel={onRemoveCache}
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
    </div>
  )
}

export default TemplateEditor
