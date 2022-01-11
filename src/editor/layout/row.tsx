import React from 'react'
import { Layout, LayoutBuildingProps, LayoutRenderProps } from './index'
import styled from 'styled-components'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { render } from '../styles'

const Container = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex: auto;
  flex-direction: row;
  background-color: aliceblue;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
`

const ContentContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  position: relative;
  flex: 1;
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

const Row: Layout = {
  Blueprint () {
    return (<div/>)
  },
  Render (props: LayoutRenderProps) {
    return (
      <div style={props.style}>
        {props.contents.map((it, index) => (
          <it.source.Render key={index} style={render(it.styles)} result={props.getData(it.value)} />
        ))}
      </div>
    )
  },
  Building (props: LayoutBuildingProps) {
    return (
      <Droppable droppableId={props.id} direction={ 'horizontal'}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} isDragging={snapshot.isDraggingOver} style={props.style}>
            {props.contents.length
              ? props.contents.map((it, index) => (
                <Draggable
                  key={it.id}
                  draggableId={it.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <ContentContainer
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={Object.assign(provided.draggableProps.style, render(it.styles))}
                    >
                      {it.value
                        ? (<it.source.Building key={index} style={render(it.styles)} result={props.getData(it.value) || it.value} onChangeActive={() => props.onChangeActive(it.id)} />)
                        : (<Notice key={index} onClick={() => props.onChangeActive(it.id)}>未配置属性</Notice>)
                      }
                    </ContentContainer>
                  )}
                </Draggable>
              ))
              : <Notice>请添加内容</Notice>
            }
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    )
  },
  describe: '',
  styles: [],
  title: '行排列',
  key: 'Row'
}
export default Row