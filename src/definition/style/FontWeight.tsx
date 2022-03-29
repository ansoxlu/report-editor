import React from 'react'
import { Select } from 'antd'
import { StyleDefinition } from './types'

const FontWeight: StyleDefinition<number> = {
  Blueprint(props: { value: number; onChange: (value: number) => void }) {
    return (
      <Select
        value={props.value}
        onChange={props.onChange}
        style={{ width: 190 }}
      >
        {[400, 500, 600, 700, 800, 900].map((it, index) => (
          <Select.Option key={index} value={it}>{it}</Select.Option>
        ))}
      </Select>
    )
  },
  render(value: number) {
    return { fontWeight: value }
  },
  defaultValue: 400,
  description: '',
  title: '字体粗细',
  key: 'FontWeight',
}

export default FontWeight
