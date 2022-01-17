import React, { ReactElement } from 'react'
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

export interface SizeInputStyle<T> {
  defaultValue: T
  // 在 blueprint 区域显示的内容
  Blueprint: (props: {value: T, onChange: (value: T) => void}) => ReactElement
}

export const BaseSizeInputStyle: SizeInputStyle<SizeInputValue> = {
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
  defaultValue: {
    size: 0,
    unit: 'px'
  }
}
