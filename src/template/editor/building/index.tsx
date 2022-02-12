import React from 'react'
import styled from 'styled-components'
import { render } from '../../../definition/styles/utils'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DroppableIds, MaterialType } from '../types'
import { Layout } from '../../../definition/layout/types'
import { Content } from '../../../definition/content/types'
import { Page } from '../../../definition/types'

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
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`

const LayoutContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  position: relative;
`

const LayoutHandle = styled.div<{index: number}>`
  user-select: none;
  position: absolute;
  width: 40px;
  height: 1px;
  left: -${props => props.index % 2 === 0 ? 40 : 27}px;
  background-color: aquamarine;

  > div {
    width: 40px;
    height: 30px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    position: absolute;
    left: -${props => props.index % 2 === 0 ? 40 : 27}px;
    background-color: #1890ff;
  }
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  background-color: #ff7875;
`

const Building = (props: { value: Page, getData: (value: string | string[]) => any, onChangeActive: (layoutId: string, contentId?: string) => void, active: Layout | Content<any, any> | undefined }) => {
  return (
    <Container>
      <View>
        {!props.value.width && !props.value.height
          ? null
          : (
            <Droppable droppableId={DroppableIds.Building}>
              {(provided, dropSnapshot) => (
                <PageContainer
                  ref={provided.innerRef}
                  isDragging={dropSnapshot.isDraggingOver}
                  {...provided.droppableProps}
                  style={{
                    width: `${props.value.width}mm`,
                    height: `${props.value.height}mm`,
                    ...render(props.value.styles)
                  }}
                >
                  {props.value.layouts.length
                    ? props.value.layouts.map((it, index) => (
                      <Draggable
                        key={it.id}
                        draggableId={`${it.id}_${MaterialType.Layout}`}
                        index={index}>
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
                              index={index}
                            >
                              <div>{index + 1}</div>
                            </LayoutHandle>
                            {<it.definition.Building
                              {...props}
                              contents={it.contents}
                              key={it.id}
                              id={`${it.id}_${MaterialType.Content}`}
                              style={render(it.styles)}
                              onChangeActive={(id) => props.onChangeActive(it.id, id)}
                            />}
                          </LayoutContainer>
                        )}
                      </Draggable>
                    ))
                    : (<Notice>请拖动布局或内容进行编辑</Notice>)
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
