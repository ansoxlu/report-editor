import { InputNumber } from 'antd'
import React from 'react'
import { StyleDefinition } from './types'
import utils from './utils'

const TextIndent: StyleDefinition<number> = {
  Blueprint(props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="0" max="999" style={{ width: 190 }} value={String(props.value)} onChange={(val) => props.onChange(Number(val))} />
    )
  },
  render(value: number) {
    return { textIndent: utils.rem(value) }
  },
  defaultValue: 0,
  description: '',
  title: '首行缩进',
  key: 'TextIndent',
}
export default TextIndent
