import React from 'react'
import { StyleDefinition } from './index'
import { InputNumber } from 'antd'

const FlexGrow: StyleDefinition<number> = {
  Blueprint (props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="0" max="99" style={{ width: 190 }} value={String(props.value)} onChange={(v) => props.onChange(Number(v))} />
    )
  },
  render (value: number) {
    return { flexGrow: value }
  },
  defaultValue: 1,
  title: '主轴计算值',
  describe: '',
  key: 'FlexGrow'
}

export default FlexGrow
