import React, { useState } from 'react'
import Material from './material'
import Build from './build'
import Blueprint from './blueprint'
import { BeforeCapture, DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import {
  BUILD_DROP_ID,
  BUILD_IDS,
  BUILD_TYPE,
  Content,
  DEFINITIONS,
  Layout,
  MATERIAL_DROP_ID,
  Page,
  Style
} from './enum'
import { newStyle } from './utils'
import { v4 as uuid4 } from 'uuid'

const EditorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

function Editor () {
  const [page, setPage] = useState<Page>(
    {
      width: '0',
      height: '',
      landscape: false,
      pageable: false
    }
  )

  const [layouts] = useState<Layout[]>([])

  const [activeId] = useState<string | undefined>()

  const changeProperty = (style: Style, data: { [key: string]: string }) => {
    console.log(style, data)
  }
  const onDragEnd = (result: DropResult) => {
    // if (result.source.droppableId === 'definition') {
    //
    // }
    // dropped outside the list
    console.log('result => ', result)
    // setActiveId(result.draggableId)

    const {
      destination,
      source,
      draggableId
    } = result

    if (!destination || destination.droppableId === MATERIAL_DROP_ID) {
      return
    }

    // 从素材区 => 到建造区
    if (source.droppableId === MATERIAL_DROP_ID && destination.droppableId === BUILD_DROP_ID) {
      const target = DEFINITIONS.find(it => it.buildId === draggableId)!
      let layout: Layout
      // 布局类型
      if (target.type === BUILD_TYPE.LAYOUT) {
        layout = {
          id: `${BUILD_TYPE.LAYOUT}-${uuid4()}`,
          style: newStyle(target.buildId as BUILD_IDS),
          buildId: target.buildId as BUILD_IDS,
          data: {},
          contents: []
        }
      } else {
        // 内容需要先有布局
        layout = {
          id: `${BUILD_TYPE.LAYOUT}-${uuid4()}`,
          style: newStyle(BUILD_IDS.ROW),
          buildId: BUILD_IDS.ROW,
          data: {},
          contents: [
            {
              id: `${BUILD_TYPE.CONTENT}-${uuid4()}`,
              buildId: target.buildId as BUILD_IDS,
              style: newStyle(target.buildId as BUILD_IDS),
              data: {}
            }
          ]
        }
      }

      layouts.splice(destination.index, 0, layout)
      return
    }

    // 内容 => 建造区
    // if (draggableId.startsWith(BUILD_TYPE.CONTENT) && destination.droppableId === BUILD_DROP_ID) {
    //   const contents = layouts.find(it => it.id === source.droppableId)!.contents
    //   const target = contents[source.index]
    //   const layout: Layout = {
    //     id: `${BUILD_TYPE.LAYOUT}-${uuid4()}`,
    //     style: newStyle(BUILD_IDS.ROW),
    //     buildId: BUILD_IDS.ROW,
    //     data: {},
    //     contents: [target]
    //   }
    //   layouts.splice(destination.index, 0, layout)
    //   contents.splice(source.index, 1)
    //   // 删除空布局
    //   if (!contents.length) {
    //     const idx = layouts.findIndex(it => it.id === source.droppableId)!
    //     layouts.splice(idx, 1)
    //   }
    //   return
    // }

    // 素材区 => 布局内容
    if (source.droppableId === MATERIAL_DROP_ID && destination.droppableId.startsWith(BUILD_TYPE.LAYOUT)) {
      const target = DEFINITIONS.find(it => it.buildId === draggableId)!
      const content: Content = {
        id: `${BUILD_TYPE.CONTENT}-${uuid4()}`,
        buildId: draggableId as BUILD_IDS,
        style: newStyle(target.buildId as BUILD_IDS),
        data: {}
      }
      const layout = layouts.find(it => it.id === destination.droppableId)!
      layout.contents.splice(destination.index, 0, content)
      return
    }

    // 布局 或 同布局内容 修改顺序
    if (source.droppableId === destination.droppableId) {
      const node = source.droppableId.startsWith(BUILD_TYPE.LAYOUT) ? layouts.find(it => it.id === destination.droppableId)!.contents : layouts
      const target = node[source.index]
      // 删除原目录
      node.splice(source.index, 1)
      // 插入新目录
      const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0
      node.splice(destination.index - offset, 0, target)
      return
    }

    // 内容 => 到另一布局
    if (draggableId.startsWith(BUILD_TYPE.CONTENT) && destination.droppableId.startsWith(BUILD_TYPE.LAYOUT)) {
      const origin = layouts.find(it => it.id === source.droppableId)!
      const target = layouts.find(it => it.id === destination.droppableId)!
      const index = origin.contents[source.index]
      console.log(index, draggableId, origin.contents, target.contents)
      target.contents.splice(destination.index, 0, origin.contents[source.index])
      origin.contents.splice(source.index, 1)
      // 删除空布局
      if (!origin.contents.length) {
        const idx = layouts.findIndex(it => it.id === source.droppableId)!
        layouts.splice(idx, 1)
      }
      return
    }

    console.log('layouts => ', layouts)
  }

  const onBeforeCapture = (before: BeforeCapture) => {
    console.log('onBeforeCapture---', before)
  }

  const active = () => {
    if (activeId) {
      if (activeId.startsWith(BUILD_TYPE.LAYOUT)) {
        return layouts.find(it => it.id === activeId)
      } else if (activeId.startsWith(BUILD_TYPE.CONTENT)) {
        return layouts.flatMap(it => it.contents).find(it => it.id === activeId)
      }
    }
  }

  return (
    <EditorContainer>
      <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
        <Material page={page} onChangePage={setPage}/>
        <Build page={page} layouts={layouts} active={active()}/>
        <Blueprint value={active()} onChange={changeProperty}/>
      </DragDropContext>
    </EditorContainer>
  )
}

export default Editor
