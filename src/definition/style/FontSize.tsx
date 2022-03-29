import React from 'react'
import { InputNumber } from 'antd'
import { StyleDefinition } from './types'
import utils from './utils'

const FontSize: StyleDefinition<number> = {
  Blueprint(props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="12" max="99" style={{ width: 190 }} value={String(props.value)} onChange={(v) => props.onChange(Number(v))} />
    )
  },
  render(value: number) {
    return {
      fontSize: utils.rem(value),
    }
  },
  defaultValue: 14,
  description: '',
  title: '字体大小',
  key: 'FontSize',
}

export default FontSize
