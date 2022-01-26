import React from 'react'
import { StyleDefinition } from './types'
import { InputNumber } from 'antd'

const LetterSpacing: StyleDefinition<number> = {
  Blueprint (props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="0" max="999" style={{ width: 190 }} value={String(props.value)} onChange={(val) => props.onChange(Number(val))} />
    )
  },
  defaultValue: 0,
  description: '',
  key: 'LetterSpacing',
  render (value: number) {
    return { letterSpacing: value }
  },
  title: '文字间隔'
}
export default LetterSpacing
