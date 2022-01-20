import React from 'react'
import { rem, StyleDefinition } from './index'
import { InputNumber } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  flex: auto;
`

const PaddingInput = (props: {title: string, value: number, onChange: (value: number) => void}) => (
  <InputNumber addonBefore={props.title} min="0" max="999" style={{ width: '100%' }} value={String(props.value)} onChange={(v) => props.onChange(Number(v))} />
)

const Padding:StyleDefinition<{top: number, bottom: number, left: number, right: number}> = {
  Blueprint (props: { value: { top: number; bottom: number; left: number; right: number }; onChange: (value: { top: number; bottom: number; left: number; right: number }) => void }) {
    return (
      <Container>
        <PaddingInput title="上" value={props.value.top} onChange={(v) => props.onChange({ ...props.value, top: v })} />
        <PaddingInput title="下" value={props.value.bottom} onChange={(v) => props.onChange({ ...props.value, bottom: v })} />
        <PaddingInput title="左" value={props.value.left} onChange={(v) => props.onChange({ ...props.value, left: v })} />
        <PaddingInput title="右" value={props.value.right} onChange={(v) => props.onChange({ ...props.value, right: v })} />
      </Container>
    )
  },
  render (value: { top: number; bottom: number; left: number; right: number }) {
    return {
      paddingTop: rem(value.top),
      paddingBottom: rem(value.bottom),
      paddingLeft: rem(value.left),
      paddingRight: rem(value.right)
    }
  },
  defaultValue: { bottom: 0, left: 0, right: 0, top: 0 },
  title: '边距',
  describe: '',
  key: 'Padding'
}

export default Padding
