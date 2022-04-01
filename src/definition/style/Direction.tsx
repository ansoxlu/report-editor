import React from 'react'
import { Radio } from 'antd'
import styled from 'styled-components'
import { StyleDefinition } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
  margin-right: 60px;
`

type Align = 'center' | 'flex-start' | 'flex-end'
type Type = 'row' | 'column'

type Value = {
  direction: Type
  row: Align
  col: Align
}

const Direction: StyleDefinition<Value> = {
  title: '方向',
  defaultValue: {
    direction: 'row',
    row: 'flex-start',
    col: 'center',
  },
  description: '',
  Blueprint(props: { value: Value, onChange: (value: Value) => void }) {
    return (
      <Container>
        <Radio.Group
          value={props.value.direction}
          onChange={(ev) => props.onChange({ ...props.value, direction: ev.target.value })}
        >
          <Radio.Button value="row">行</Radio.Button>
          <Radio.Button value="column">列</Radio.Button>
        </Radio.Group>

        <Radio.Group
          value={props.value.row}
          onChange={(ev) => props.onChange({ ...props.value, row: ev.target.value })}
        >
          <Radio.Button value="flex-start">左</Radio.Button>
          <Radio.Button value="center">中</Radio.Button>
          <Radio.Button value="flex-end">右</Radio.Button>
        </Radio.Group>

        <Radio.Group
          value={props.value.col}
          onChange={(ev) => props.onChange({ ...props.value, col: ev.target.value })}
        >
          <Radio.Button value="flex-start">上</Radio.Button>
          <Radio.Button value="center">中</Radio.Button>
          <Radio.Button value="flex-end">下</Radio.Button>
          <Radio.Button disabled={props.value.direction !== 'column'} value="space-between">均距</Radio.Button>
          <Radio.Button disabled={props.value.direction !== 'column'} value="space-around">均间</Radio.Button>
          <Radio.Button disabled={props.value.direction !== 'column'} value="space-evenly">均隔</Radio.Button>
        </Radio.Group>
      </Container>
    )
  },
  render(value: Value) {
    return {
      flexDirection: value.direction,
      justifyContent: value.direction === 'row' ? value.row : value.col,
      alignItems: value.direction === 'column' ? value.row : value.col,
    }
  },
  key: 'Direction',
}
export default Direction
