import React from 'react'
import { LayoutDefinition, LayoutBlueprintProps, LayoutBuildingProps, LayoutRenderProps } from './index'
import { render } from '../styles'
import styled from 'styled-components'
import { Droppable, DragDropContext, DropResult, Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  background-color: antiquewhite;
`

const BuildingContainer = styled(Container)<{ isDragging: boolean }>`
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
`

const BlueprintContainer = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  height: 100%;
`

const BlueprintItem = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  margin: 15px;
  padding: 10px 12px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background: #f3f3f3;
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #aaa;
  font-size: 12px;
`

const Wrap: LayoutDefinition = {
  Blueprint (props: LayoutBlueprintProps) {
    const onDragEnd = (result: DropResult) => {
      const { destination, source } = result
      if (!destination) {
        return
      }
      const contents = props.contents
      // 删除后的位置调整
      const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0
      const target = contents[source.index]
      // 删除原有
      contents.splice(source.index, 1)
      // 重新插入
      contents.splice(destination.index - offset, 0, target)
      props.onChangeContents(contents)
    }
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="wrap_blueprint">
          {(provided, snapshot) => (
            <BlueprintContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDraggingOver}
            >
              {props.contents.map((it, index) => (
                <Draggable key={it.id} draggableId={it.id} index={index}>
                  {(provided, snapshot) => (
                    <BlueprintItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                      isDragging={snapshot.isDragging}
                    >
                      {index}
                    </BlueprintItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </BlueprintContainer>
          )}
        </Droppable>
      </DragDropContext>
    )
  },
  Building (props: LayoutBuildingProps) {
    return (
      <Droppable droppableId={props.id} direction={ 'horizontal'}>
        {(provided, snapshot) => (
          <BuildingContainer ref={provided.innerRef} isDragging={snapshot.isDraggingOver} style={props.style}>
            {props.contents.length
              ? props.contents.map((it, index) => it.value
                ? (<it.definition.Building key={index} style={render(it.styles)} result={props.getData(it.value)} onChangeActive={() => props.onChangeActive(it.id)} />)
                : <Notice key={index} onClick={() => props.onChangeActive(it.id)}>未配置属性</Notice>)
              : <Notice>请添加内容</Notice>
            }
            {provided.placeholder}
          </BuildingContainer>
        )}
      </Droppable>
    )
  },
  Render (props: LayoutRenderProps) {
    return (
      <Container style={props.style}>
        {props.contents.map((it, index) => (
          <it.definition.Render key={index} style={render(it.styles)} result={props.getData(it.value)} />
        ))}
      </Container>
    )
  },
  describe: '能过最小宽度',
  key: 'Wrap',
  styles: [],
  title: '宽组合'
}

export default Wrap
