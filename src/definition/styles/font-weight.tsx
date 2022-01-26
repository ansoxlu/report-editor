import React from 'react'
import { StyleDefinition } from './types'
import { Select } from 'antd'

const FontWeight: StyleDefinition<number> = {
  Blueprint (props: { value: number; onChange: (value: number) => void }) {
    return (
      <Select
        value={props.value}
        onChange={props.onChange}
        style={{ width: 190 }}
      >
        {[400, 500, 600, 700, 800, 900].map((it, index) => {
          return (<Select.Option key={index} value={it}>{it}</Select.Option>)
        })}
      </Select>
    )
  },
  render (value: number) {
    return { fontWeight: value }
  },
  defaultValue: 400,
  description: '',
  title: '字体粗细',
  key: 'FontWeight'
}

export default FontWeight
