import React, { CSSProperties } from 'react'
import { Layout } from './index'
import { ContentActive } from '../content'
import { render } from '../styles'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
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
  color: #aaa;
  font-size: 12px;
`

const Wrap: Layout<boolean> = {
  Blueprint (props: { value: any; onChange: (value: any) => void }) {
    return (<div/>)
  },
  Building (props: { id: string; value: any; contents: ContentActive<any, any>[]; style: CSSProperties; getData: (texts: (string | string[])) => any; onChangeActive: (contentId: string) => void }) {
    return (
      <Droppable droppableId={props.id} direction={ 'horizontal'}>
        {(provided, snapshot) => (
          <BuildingContainer ref={provided.innerRef} isDragging={snapshot.isDraggingOver} style={props.style}>
            {props.contents.length
              ? props.contents.map((it, index) => it.value
                ? (<it.source.Building key={index} style={render(it.styles)} result={props.getData(it.value)} onChangeActive={() => props.onChangeActive(props.id)} />)
                : <Notice>请配置属性</Notice>)
              : <Notice>请添加内容</Notice>
            }
            {provided.placeholder}
          </BuildingContainer>
        )}
      </Droppable>
    )
  },
  Render (props: { value: any; contents: ContentActive<any, any>[]; style:CSSProperties; getData: (texts: (string | string[])) => any }) {
    return (
      <Container style={props.style}>
        {props.contents.map((it, index) => (
          <it.source.Render key={index} style={render(it.styles)} result={props.getData(it.value)} />
        ))}
      </Container>
    )
  },
  defaultValue: false,
  describe: '',
  key: 'Wrap',
  styles: [],
  title: '组合排列'
}

export default Wrap
