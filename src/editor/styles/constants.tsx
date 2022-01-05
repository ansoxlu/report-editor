import React from 'react'
import { rem, Style } from './index'
import { InputNumber, Select } from 'antd'

export type Unit = 'px' | '%'
export interface SizeInputValue {
  size: number
  unit: Unit
}
const SizeSelect = (props: { value: Unit, onChange: (value: Unit) => void }) => (
  <Select value={props.value} onChange={props.onChange}>
    <Select.Option value="px">px</Select.Option>
    <Select.Option value="%">%</Select.Option>
  </Select>
)
export const BaseSizeInputStyle: Style<SizeInputValue> = {
  Blueprint (props: { value: SizeInputValue; onChange: (value: SizeInputValue) => void }) {
    return (
      <InputNumber
        min="0"
        max="999"
        style={{ width: 190 }}
        value={String(props.value.size)}
        onChange={(v) => props.onChange({ ...props.value, size: Number(v) })}
        addonAfter={<SizeSelect value={props.value.unit} onChange={v => props.onChange({ ...props.value, unit: v })}/>}
      />
    )
  },
  render (value: SizeInputValue) {
    return { minWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'none' }
  },
  defaultValue: {
    size: 0,
    unit: 'px'
  },
  title: '',
  describe: '',
  key: ''
}
