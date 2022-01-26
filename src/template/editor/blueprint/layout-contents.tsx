import React from 'react'
import styled from 'styled-components'
import { Droppable, DragDropContext, DropResult, Draggable } from 'react-beautiful-dnd'
import { Content } from '../../../definition/content/types'
import { Button, Popconfirm } from 'antd'

const Container = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  height: 100%;
`

const Items = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background: #f3f3f3;
  display: flex;

  > div:first-child {
    flex: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const LayoutContents = (props: { value: Content<any, any>[], onChange: (value: Content<any, any>[]) => void, onChangeActive: (contentId: string) => void }) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }
    const contents = props.value
    // 删除后的位置调整
    const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0
    const target = contents[source.index]
    // 删除原有
    contents.splice(source.index, 1)
    // 重新插入
    contents.splice(destination.index - offset, 0, target)
    props.onChange(contents)
  }

  const handleDelete = (id: string) => {
    const index = props.value.findIndex(it => it.id === id)
    props.value.splice(index, 1)
    props.onChange([...props.value])
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="layout-contents">
        {(provided, snapshot) => (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDraggingOver}
          >
            {props.value.map((it, index) => (
              <Draggable key={it.id} draggableId={it.id} index={index}>
                {(provided, snapshot) => (
                  <Items
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={provided.draggableProps.style}
                    isDragging={snapshot.isDragging}
                  >
                    <div {...provided.dragHandleProps}>
                      {index + 1}
                    </div>
                    <div>
                      <Popconfirm
                        placement="topRight"
                        title="是否确定删除？"
                        okText="是"
                        cancelText="否"
                        onConfirm={() => handleDelete(it.id)}
                      >
                        <Button type="primary" danger>删除</Button>
                      </Popconfirm>
                      <Button type="primary" onClick={() => props.onChangeActive(it.id)}>编辑</Button>
                    </div>
                  </Items>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default LayoutContents
