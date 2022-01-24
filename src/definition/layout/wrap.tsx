import React from 'react'
import { LayoutDefinition, LayoutBuildingProps, LayoutRenderProps } from './index'
import { render } from '../styles'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  background-color: antiquewhite;
`

const BuildingContainer = styled(Container)<{ isDragging: boolean }>`
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  background-color: #ff7875;
  font-size: 12px;
`

const Wrap: LayoutDefinition = {
  Building (props: LayoutBuildingProps) {
    return (
      <Droppable droppableId={props.id} direction={ 'horizontal'}>
        {(provided, snapshot) => (
          <BuildingContainer ref={provided.innerRef} isDragging={snapshot.isDraggingOver} style={props.style}>
            {props.contents.length
              ? props.contents.map((it, index) => it.value
                ? (<it.definition.Building key={index} style={render(it.styles)} result={props.getData(it.value)} onChangeActive={() => props.onChangeActive(it.id)} />)
                : <Notice key={index} onClick={() => props.onChangeActive(it.id)}>未配置属性</Notice>)
              : <Notice>请拖动内容进行元素添加</Notice>
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
