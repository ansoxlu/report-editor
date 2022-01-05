import { InputNumber } from 'antd'
import React from 'react'
import { rem, Style } from './index'

const TextIndent: Style<number> = {
  Blueprint (props: { value: number; onChange: (value: number) => void }) {
    return (
      <InputNumber min="0" max="999" style={{ width: 190 }} value={String(props.value)} onChange={(val) => props.onChange(Number(val))} />
    )
  },
  render (value: number) {
    return { textIndent: rem(value) }
  },
  defaultValue: 0,
  describe: '',
  title: '首行缩进',
  key: 'TextIndent'
}
export default TextIndent
