import React from 'react'
import { InputNumber } from 'antd'
import styled from 'styled-components'
import { StyleDefinition } from './types'
import utils from './utils'

const Container = styled.div`
  flex: auto;
`

type Value = {
  top: number
  bottom: number
  left: number
  right: number
}

function PaddingInput(props: {title: string, value: number, onChange: (value: number) => void}) {
  return <InputNumber addonBefore={props.title} min="0" max="999" style={{ width: '100%' }} value={String(props.value)} onChange={(v) => props.onChange(Number(v))} />
}

const Padding:StyleDefinition<Value> = {
  Blueprint(props: { value: Value, onChange: (value: Value) => void }) {
    return (
      <Container>
        <PaddingInput title="上" value={props.value.top} onChange={(v) => props.onChange({ ...props.value, top: v })} />
        <PaddingInput title="下" value={props.value.bottom} onChange={(v) => props.onChange({ ...props.value, bottom: v })} />
        <PaddingInput title="左" value={props.value.left} onChange={(v) => props.onChange({ ...props.value, left: v })} />
        <PaddingInput title="右" value={props.value.right} onChange={(v) => props.onChange({ ...props.value, right: v })} />
      </Container>
    )
  },
  render(value: { top: number; bottom: number; left: number; right: number }) {
    return {
      paddingTop: utils.rem(value.top),
      paddingBottom: utils.rem(value.bottom),
      paddingLeft: utils.rem(value.left),
      paddingRight: utils.rem(value.right),
    }
  },
  defaultValue: {
    bottom: 0, left: 0, right: 0, top: 0,
  },
  title: '边距',
  description: '',
  key: 'Padding',
}

export default Padding
