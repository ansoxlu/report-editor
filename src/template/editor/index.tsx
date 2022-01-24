import React, { useState } from 'react'
import Material from './material'
import Blueprint from './blueprint'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { DroppableIds, MaterialType } from './constants'
import Building from './building'
import { LAYOUT_DEFINITIONS, createLayout, Layout } from '../../definition/layout'
import Row from '../../definition/layout/row'
import { Content, CONTENT_DEFINITIONS, createContent } from '../../definition/content'
import { message } from 'antd'
import { flattenData, getData } from '../../definition/utils'
import { createPage, Page } from '../../definition/types'
import Header from '../../components/Header'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    display: flex;
    flex: auto;
  }
`

const HeaderContainer = styled(Header)`
  > div {
    width: 100%;
    padding: 0 30px;
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
  const [page, setPage] = useState<Page>(createPage())

  const [active, setActive] = useState<Layout | Content<any, any> | undefined>()

  function setDefaultStyle<T> (target: T): T {
    // @ts-ignore
    const styles = target.styles.map(tit => {
      const style = page.styles.find(pit => tit.definition.key === pit.definition.key)
      if (style) {
        tit.value = style.value
      }
      return tit
    })
    return {
      ...target,
      styles
    }
  }

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

    // 拖动素材
    if (source.droppableId === DroppableIds.Material) {
      // 移动到空白区域
      if (destination.droppableId === DroppableIds.Building) {
        const lay = LAYOUT_DEFINITIONS.find(it => it.key === draggableId)
        // 移动内容到基础布局
        const layout = setDefaultStyle(createLayout(lay || Row))
        // 添加内容到布局
        if (!lay) {
          const contentDefinition = CONTENT_DEFINITIONS.find(it => it.key === draggableId)!
          const content = setDefaultStyle(createContent(layout, contentDefinition))
          layout.contents.push(content)
          content.layout = layout
          setActive(content)
        }
        page.layouts.splice(destination.index, 0, layout)
        setPage({ ...page, layouts: [...page.layouts] })
        return
      }
      // null 表示移动布局
      const contentDefinition = CONTENT_DEFINITIONS.find(it => it.key === draggableId)!

      // 禁止布局套布局
      if (!contentDefinition) {
        return
      }
      // 移动到现有布局
      const layout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      const content = createContent(layout, contentDefinition)
      if (layout.definition === Row) {
        layout.contents.splice(destination.index, 0, content)
      } else {
        layout.contents.push(content)
      }
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

    // 移动布局到内容
    if (draggableId.endsWith(MaterialType.Layout) && destination.droppableId.endsWith(MaterialType.Content)) {
      const index = page.layouts.findIndex(it => draggableId.startsWith(it.id))
      // 布局不是行排列禁止合并
      if (index === -1 || page.layouts[index].definition !== Row) {
        return
      }
      const contents = page.layouts[index].contents
      // 删除旧布局
      page.layouts.splice(index, 1)
      // 将旧布局内容合并到目标布局
      const layout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      // 布局不是行排列禁止合并
      if (!layout || layout.definition !== Row) {
        setPage({ ...page, layouts: [...page.layouts] })
        return
      }
      layout.contents.splice(destination.index, 0, ...contents)
      setPage({ ...page, layouts: [...page.layouts] })
    }

    // 移动内容
    if (!draggableId.endsWith(MaterialType.Layout) && !draggableId.endsWith(MaterialType.Content)) {
      const sourceLayout = page.layouts.find(it => source.droppableId.startsWith(it.id))!
      const content = sourceLayout.contents.find(it => it.id === draggableId)!

      // 内容移出旧布局,插入新布局
      if (destination.droppableId === DroppableIds.Building) {
        const layout = createLayout(Row)
        layout.contents.push(content)
        page.layouts.splice(destination.index, 0, layout)
        content.layout = layout
        setActive(content)
      }
      // 向目标布局插入
      const destinationLayout = page.layouts.find(it => destination.droppableId.startsWith(it.id))!
      if (!destinationLayout || destinationLayout.definition !== Row) {
        setPage({ ...page, layouts: [...page.layouts] })
        return
      }
      destinationLayout.contents.splice(destination.index, 0, content)
      content.layout = destinationLayout
      setActive(content)

      // 从原布局删除内容
      sourceLayout.contents.splice(source.index, 1)
      // 判断删除原空布局
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
      page.layouts.splice(layoutIndex, 1, layout)
      setPage({ ...page, layouts: [...page.layouts] })
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
    setPage({ ...page, layouts: [...page.layouts] })
  }

  return (
    <Container>
      <HeaderContainer/>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Material page={page} onChangePage={setPage}/>
          <Building page={page} getData={(texts) => getData(texts, data)} onChangeActive={changeActive} />
        </DragDropContext>
        <Blueprint
          value={active}
          data={data}
          onChange={changeActiveValue}
          onChangeActive={changeActive}
          page={page}
          onChangePage={setPage}
        />
      </div>
    </Container>
  )
}

export default Editor
