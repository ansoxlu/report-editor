import React from 'react'
import { rem, StyleDefinition } from './index'
import { InputNumber } from 'antd'

const Padding:StyleDefinition<{top: number, bottom: number, left: number, right: number}> = {
  Blueprint (props: { value: { top: number; bottom: number; left: number; right: number }; onChange: (value: { top: number; bottom: number; left: number; right: number }) => void }) {
    return (
      <div style={{ marginTop: 5 }}>
        <InputNumber addonBefore="上" min="0" max="999" style={{ width: 190 }} value={String(props.value.top)} onChange={(v) => props.onChange({ ...props.value, top: Number(v) })} />
        <InputNumber addonBefore="下" min="0" max="999" style={{ width: 190 }} value={String(props.value.bottom)} onChange={(v) => props.onChange({ ...props.value, bottom: Number(v) })} />
        <InputNumber addonBefore="左" min="0" max="999" style={{ width: 190 }} value={String(props.value.left)} onChange={(v) => props.onChange({ ...props.value, left: Number(v) })} />
        <InputNumber addonBefore="右" min="0" max="999" style={{ width: 190 }} value={String(props.value.right)} onChange={(v) => props.onChange({ ...props.value, right: Number(v) })} />
      </div>
    )
  },
  render (value: { top: number; bottom: number; left: number; right: number }) {
    return {
      paddingTop: rem(value.top),
      paddingBottom: rem(value.bottom),
      paddingLeft: rem(value.left),
      paddingRight: rem(value.right)
    }
  },
  defaultValue: { bottom: 0, left: 0, right: 0, top: 0 },
  title: '边距',
  describe: '',
  key: 'Padding'
}

export default Padding
