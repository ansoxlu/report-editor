import React, { useState } from 'react'
import Material from './material'
import Blueprint from './blueprint'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { DroppableIds, MaterialType } from './types'
import Building from './building'
import { Layout, LayoutSerialize } from '../../definition/layout/types'
import { createLayout } from '../../definition/layout/utils'
import { Content } from '../../definition/content/types'
import { createContent } from '../../definition/content/utils'
import { message } from 'antd'
import { flattenData, getData } from '../../definition/utils'
import { Template } from '../../definition/types'
import Header from '../../components/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { TEMPLATES } from '../../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { createStyle } from '../../definition/styles/utils'
import { StyleSerialize } from '../../definition/styles/types'
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

const data = flattenData({
  hospital: {
    name: '人民医院'
  },
  patient: {
    name: '张三',
    gender: '男',
    age: '18岁'
  }
})

function Editor () {
  const navigate = useNavigate()
  const { id } = useParams()
  const [templates, setTemplates] = useLocalStorage('RE-templates', JSON.stringify(TEMPLATES))

  const list = JSON.parse(templates)
  let target = list.find((it: any) => it.id === id)
  if (!target) {
    message.error('编辑内容已被删除')
    navigate('/template')
    return null
  }

  const [editCache, setEditCache] = useLocalStorage(`RE-editMetadata-${target.id}`)
  if (editCache) {
    target = JSON.parse(editCache)
  }
  const template: Template = {
    ...target,
    styles: target.styles.map((it: StyleSerialize) => createStyle(it)),
    layouts: target.layouts.map((it: LayoutSerialize) => createLayout(it))
  }
  const setTemplate = (value: Template) => {
    setEditCache(JSON.stringify(value))
  }

  const [active, setActive] = useState<Layout | Content<any, any> | undefined>()

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    console.log('result => ', result)

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
        const layout = createLayout(contentDefinition)
        template.layouts.splice(destination.index, 0, layout)
        setTemplate({ ...template })
        return
      }

      // 移动到现有布局
      const layout = template.layouts.find(it => destination.droppableId.startsWith(it.id))!
      const content = createContent(layout, contentDefinition)
      if (layout.definition !== Many) {
        return
      }
      layout.contents.splice(destination.index, 0, content)
      setActive(content)
      setTemplate({ ...template, layouts: [...template.layouts] })
      return
    }

    // 移动布局/内容, 修改顺序
    if (source.droppableId === destination.droppableId) {
      // 删除后的位置调整
      const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0

      // 布局修改顺序
      if (source.droppableId === DroppableIds.Building) {
        const target = template.layouts[source.index]
        // 删除原有
        template.layouts.splice(source.index, 1)
        // 重新插入
        template.layouts.splice(destination.index - offset, 0, target)
        setActive(target)
        setTemplate({ ...template, layouts: [...template.layouts] })
        return
      }
      // 内容修改顺序
      const layout = template.layouts.find(it => destination.droppableId.startsWith(it.id))!
      const contents = layout.contents
      const target = contents[source.index]
      // 删除原有
      contents.splice(source.index, 1)
      // 重新插入
      contents.splice(destination.index - offset, 0, target)
      target.layout = layout
      setActive(target)
      setTemplate({ ...template, layouts: [...template.layouts] })
      return
    }

    // 布局合并
    if (draggableId.endsWith(MaterialType.Layout) && destination.droppableId.endsWith(MaterialType.Content)) {
      const index = template.layouts.findIndex(it => draggableId.startsWith(it.id))
      // 布局不是行多排列禁止合并
      if (index === -1 || template.layouts[index].definition !== Many) {
        return
      }
      const layout = template.layouts.find(it => destination.droppableId.startsWith(it.id))!
      // 布局不是行排列禁止合并
      if (!layout || layout.definition !== Many) {
        return
      }
      // 删除拖动布局
      template.layouts.splice(index, 1)
      // 将拖动布局内容合并到目标布局
      const contents = template.layouts[index].contents
      layout.contents.splice(destination.index, 0, ...contents)
      setTemplate({ ...template, layouts: [...template.layouts] })
    }

    // 移动内容
    if (!draggableId.endsWith(MaterialType.Layout) && !draggableId.endsWith(MaterialType.Content)) {
      const sourceLayout = template.layouts.find(it => source.droppableId.startsWith(it.id))!
      const content = sourceLayout.contents.find(it => it.id === draggableId)!

      // 拖动结果为建造区
      if (destination.droppableId === DroppableIds.Building) {
        const layout = createLayout(Many)
        layout.contents.push(content)
        template.layouts.splice(destination.index, 0, layout)
        content.layout = layout
        setActive(content)
        setTemplate({ ...template, layouts: [...template.layouts] })
        return
      }
      // 拖动结果为别一布局
      const destinationLayout = template.layouts.find(it => destination.droppableId.startsWith(it.id))!
      if (!destinationLayout || destinationLayout.definition !== Many) {
        return
      }
      // 向结果布局插入内容
      destinationLayout.contents.splice(destination.index, 0, content)
      content.layout = destinationLayout
      setActive(content)

      // 从原拖动布局删除内容
      sourceLayout.contents.splice(source.index, 1)

      // 判断删除拖动布局是否空， 空删除
      if (!sourceLayout.contents.length) {
        const idx = template.layouts.findIndex(it => source.droppableId.startsWith(it.id))!
        template.layouts.splice(idx, 1)
      }
      setTemplate({ ...template, layouts: [...template.layouts] })
    }
  }

  const changeActive = (layoutId: string, contentId?: string) => {
    const layout = template.layouts.find(it => it.id === layoutId)!
    if (contentId) {
      const content = layout.contents.find(it => it.id === contentId)!
      setActive(content)
    } else {
      setActive(layout)
    }
  }

  const changeActiveValue = (value: Layout | Content<any, any>) => {
    setActive(value)
    let layoutIndex = template.layouts.findIndex(it => it.id === value.id)
    // layout 修改
    if (layoutIndex !== -1) {
      const layout = template.layouts[layoutIndex]
      layout.contents = (value as Layout).contents
      layout.styles = value.styles
      template.layouts.splice(layoutIndex, 1, layout)
      setTemplate({ ...template, layouts: [...template.layouts] })
      return
    }
    // content 修改
    const content = value as Content<any, any>
    layoutIndex = template.layouts.findIndex(it => it.id === content.layout.id)
    // 移动后未修改 content.layout 发生错误
    if (layoutIndex === -1) {
      setActive(undefined)
      message.error('无效的修改,编辑的内容已过期')
      return
    }
    const layout = template.layouts[layoutIndex]
    const contentIndex = layout.contents.findIndex(it => it.id === content.id)
    const target = layout.contents[contentIndex]
    target.value = (value as Content<any, any>).value
    target.styles = value.styles
    layout.contents.splice(contentIndex, 1, target)
    template.layouts.splice(layoutIndex, 1, layout)
    setTemplate({ ...template, layouts: [...template.layouts] })
  }

  return (
    <Container>
      <Header isFull={true}/>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Material value={template} onChange={setTemplate}/>
          <Building value={template} getData={(texts) => getData(texts, data)} onChangeActive={changeActive} />
        </DragDropContext>
        <Blueprint
          active={active}
          data={data}
          onChangeActiveValue={changeActiveValue}
          onChangeActive={changeActive}
          value={template}
          onChange={setTemplate}
        />
      </div>
    </Container>
  )
}

export default Editor
