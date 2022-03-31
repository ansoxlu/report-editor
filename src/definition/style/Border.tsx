import React from 'react'
import { InputNumber, Select } from 'antd'
import styled from 'styled-components'
import { StyleDefinition } from './types'
import utils from './style-utils'
import Color from './Color'

const Container = styled.div`
  flex: auto;
`

const ItemsContainer = styled.div`
  display: flex;

  > div:last-child {
    width: 58px;

    > div:nth-child(2) {
      left: -212px;
      top: -279px;
    }
  }
`

type LineStyle = 'solid' | 'double' | 'dotted'
interface BlockStyle {
  size: number,
  style: LineStyle,
  color: string
}

interface Value {
  top: BlockStyle
  bottom: BlockStyle
  left: BlockStyle
  right: BlockStyle
}

function StyleSelect(props: { value: LineStyle, onChange: (value: LineStyle) => void }) {
  return (
    <Select value={props.value} onChange={props.onChange}>
      <Select.Option value="solid">实线</Select.Option>
      <Select.Option value="double">双实</Select.Option>
      <Select.Option value="dotted">点线</Select.Option>
    </Select>
  )
}

function Items(props: { title: string, value: BlockStyle, onChange: (value: BlockStyle) => void }) {
  return (
    <ItemsContainer>
      <InputNumber
        addonBefore={props.title}
        min="0"
        max="999"
        style={{ width: 190 }}
        value={String(props.value.size)}
        onChange={(v) => props.onChange({ ...props.value, size: Number(v) })}
        addonAfter={(
          <StyleSelect
            value={props.value.style}
            onChange={(v) => props.onChange({ ...props.value, style: v })}
          />
        )}
      />
      <Color.Blueprint
        value={props.value.color}
        onChange={(v) => props.onChange({ ...props.value, color: v })}
      />
    </ItemsContainer>
  )
}
const Border: StyleDefinition<Value> = {
  Blueprint(props: { value: Value; onChange: (value: Value) => void }) {
    return (
      <Container>
        <Items title="上" value={props.value.top} onChange={(v) => props.onChange({ ...props.value, top: v })} />
        <Items title="下" value={props.value.bottom} onChange={(v) => props.onChange({ ...props.value, bottom: v })} />
        <Items title="左" value={props.value.left} onChange={(v) => props.onChange({ ...props.value, left: v })} />
        <Items title="右" value={props.value.right} onChange={(v) => props.onChange({ ...props.value, right: v })} />
      </Container>
    )
  },
  render(value: Value) {
    return {
      borderTop: `${utils.rem(value.top.size)} ${value.top.style} ${value.top.color}`,
      borderBottom: `${utils.rem(value.bottom.size)} ${value.bottom.style} ${value.bottom.color}`,
      borderLeft: `${utils.rem(value.left.size)} ${value.left.style} ${value.left.color}`,
      borderRight: `${utils.rem(value.right.size)} ${value.right.style} ${value.right.color}`,
    }
  },
  defaultValue: {
    bottom: { size: 0, color: '#000', style: 'solid' },
    left: { size: 0, color: '#000', style: 'solid' },
    right: { size: 0, color: '#000', style: 'solid' },
    top: { size: 0, color: '#000', style: 'solid' },
  },
  description: '',
  title: '边距线',
  key: 'Border',
}

export default Border
