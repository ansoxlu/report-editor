import React, { useState } from 'react'
import Definition from './definition'
import View from './view'
import Property from './property'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Content, Layout, Page } from './enum'

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
      pageable: false,
      layouts: []
    }
  )
  const [active, setActive] = useState<Layout | Content | null>(null)

  const changeData = (key: string, val: boolean | string[] | string | number) => {
    const data = active!.data
    data[key] = val
    setActive({
      ...active!,
      data
    })
  }
  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return null
    }
  }

  return (
    <EditorContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Definition page={page} onChangePage={(page: Page) => setPage(page)} />
        <View page={page}/>
        <Property value={active} onChange={changeData} />
      </DragDropContext>
    </EditorContainer>
  )
}

export default Editor
