import React from 'react'
import { LayoutDefinition, LayoutBuildingProps, LayoutRenderProps } from './types'
import styled from 'styled-components'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { render, renderLayout } from '../styles/utils'
import MinHeight from '../styles/min-height'
import MaxHeight from '../styles/max-height'
import Padding from '../styles/padding'

const Container = styled.div<{ isDragging: boolean, isActive: boolean }>`
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  ${props => props.isActive ? 'background-color: springgreen' : ''}
`

const ContentContainer = styled.div<{ isDragging: boolean, isActive: boolean }>`
  display: flex;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  position: relative;
  flex: 1;
  ${props => props.isActive ? 'background-color: springgreen' : ''}
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  background-color: #ff7875;
`

const Many: LayoutDefinition = {
  Render (props: LayoutRenderProps) {
    return (
      <div style={props.style}>
        {props.contents.map((it, index) => (
          <it.definition.Render key={index} style={render(it.styles)} result={props.getData(it.value)} />
        ))}
      </div>
    )
  },
  Building (props: LayoutBuildingProps) {
    return (
      <Droppable droppableId={props.id} direction={ 'horizontal'}>
        {(provided, snapshot) => (
          <Container
            style={props.style}
            ref={provided.innerRef}
            isDragging={snapshot.isDraggingOver}
            isActive={!!props.active && props.id.startsWith(props.active.id)}
          >
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
                      isActive={props.active?.id === it.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={Object.assign(provided.draggableProps.style, renderLayout(it.styles))}
                    >
                      {it.value
                        ? (<it.definition.Building key={index} style={render(it.styles)} value={it.value} result={props.getData(it.value) || it.value} onChangeActive={() => props.onChangeActive(it.id)} />)
                        : (<Notice key={index} onClick={() => props.onChangeActive(it.id)}>未配置属性</Notice>)
                      }
                    </ContentContainer>
                  )}
                </Draggable>
              ))
              : <Notice>请拖动内容进行元素添加</Notice>
            }
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    )
  },
  description: '页面是竖向排列，使用该布局添加横向内容',
  styles: [MinHeight, MaxHeight, Padding],
  title: '纵向多内容排列',
  key: 'Many'
}
export default Many
