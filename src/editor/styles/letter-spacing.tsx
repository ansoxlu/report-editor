import React from 'react'
import { Style } from './index'
import { InputNumber } from 'antd'

const LetterSpacing: Style<number> = {
  Blueprint (props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="0" max="999" style={{ width: 190 }} value={String(props.value)} onChange={(val) => props.onChange(Number(val))} />
    )
  },
  defaultValue: 0,
  describe: '',
  key: 'LetterSpacing',
  render (value: number) {
    return { letterSpacing: value }
  },
  title: '文字间隔'
}
export default LetterSpacing
