import React from 'react'
import { LayoutActive } from '../layout'
import styled from 'styled-components'
import { render } from '../styles'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DroppableIds, MaterialType, Page } from '../constants'

const Container = styled.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`
const View = styled.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`

const PageContainer = styled.article<{isDragging: boolean}>`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`

const LayoutContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  position: relative;
`

const LayoutHandle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -5px 5px -5px -0.5px;
  padding: 5px;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
  position: absolute;
  left: -36px;
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #aaa;
  font-size: 32px;
`

const Building = (props: { page: Page, layouts: LayoutActive<any>[], getData: (values: string | string[]) => any, onChangeActive: (activeId: string, contentId?: string) => void }) => {
  return (
    <Container>
      <View>
        {!props.page.width && !props.page.height
          ? null
          : (
            <Droppable droppableId={DroppableIds.Building}>
              {(provided, dropSnapshot) => (
                <PageContainer
                  ref={provided.innerRef}
                  isDragging={dropSnapshot.isDraggingOver}
                  {...provided.droppableProps}
                  style={{
                    width: `${props.page.width}mm`,
                    height: `${props.page.height}mm`
                  }}
                >
                  {props.layouts.length
                    ? props.layouts.map((it, idx) => (
                      <Draggable
                        key={it.id}
                        draggableId={`${it.id}_${MaterialType.Layout}`}
                        index={idx}>
                        {(provided, snapshot) => (
                          <LayoutContainer
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            isDragging={snapshot.isDragging}
                            style={dropSnapshot.draggingOverWith && !dropSnapshot.draggingOverWith.endsWith(MaterialType.Layout) ? {} : provided.draggableProps.style}
                          >
                            <LayoutHandle
                              {...provided.dragHandleProps}
                              onClick={() => props.onChangeActive(it.id)}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                />
                              </svg>
                            </LayoutHandle>
                            {<it.source.Building key={it.id} contents={it.contents} value={it.value} id={`${it.id}_${MaterialType.Content}`}
                                                 style={render(it.styles)} getData={props.getData} onChangeActive={(id) => props.onChangeActive(it.id, id)}/>}
                          </LayoutContainer>
                        )}
                      </Draggable>
                    ))
                    : (<Notice>请添加内容</Notice>)
                  }
                  {provided.placeholder}
                </PageContainer>
              )}
            </Droppable>
            )
        }
      </View>
    </Container>
  )
}

export default Building
