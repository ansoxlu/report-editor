import React from 'react'
import { LAYOUT_TYPE, Page } from '../index'
import styled from 'styled-components'
import Header from './header'
import { Draggable, DraggableProvided, DraggableStateSnapshot, Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

const ViewContainer = styled.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`

const Main = styled.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`

const PageContainer = styled.article`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
`

const RowLayout = styled.div<{isDragging: boolean}>`
  display: flex;
  flex-direction: row;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`

function View (props: {page: Page}) {
  const page = props.page
  console.log(page)
  // const Content = (props: {provided: DraggableProvided, snapshot: DraggableStateSnapshot, node: Node}) => {
  //   switch (props.node.key) {
  //
  //   }
  //
  //   return (
  //     <div
  //       ref={props.provided.innerRef}
  //       {...props.provided.draggableProps}
  //       {...props.provided.dragHandleProps}
  //     >
  //
  //     </div>
  //   )
  // }

  const ofStyle = (css: string[], data: { [key: string]: string }) => {
    css.map(it => {
      switch (it) {
        case 'justifyContent':
          return `justify-content: ${data.justifyContent || ''};`
        case 'alignItems':
          return `align-items: ${data.alignItems || ''};`
        default:
          return ''
      }
    })
  }

  return (
      <ViewContainer>
        <Header />
        <Main>
          <Droppable droppableId="main" isCombineEnabled>
            {(provided: DroppableProvided) => (
              <PageContainer
                ref={provided.innerRef}
                style={{ width: page.landscape ? page.height : page.width, height: page.landscape ? page.width : page.height }}>
                {
                  props.page.layouts.map((it, idx) => {
                    switch (it.type) {
                      case LAYOUT_TYPE.ROW:
                        return (
                          <Draggable key={it.id} draggableId={it.id} index={idx}>
                            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                              <RowLayout
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                isDragging={snapshot.isDragging}
                                style={ provided.draggableProps.style}
                              />
                            )}
                          </Draggable>
                        )
                      case LAYOUT_TYPE.COL:
                      case LAYOUT_TYPE.ABSOLUTE:
                      default:
                        return (
                          <Draggable key={it.key} draggableId={it.key} index={idx}>
                            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                              <Content provided={provided} snapshot={snapshot} />
                            )}
                          </Draggable>
                        )
                    }
                  })
                }
              </PageContainer>
            )}
          </Droppable>
        </Main>
      </ViewContainer>
  )
}

export default View
