import { InputNumber, Radio } from 'antd'
import React, { CSSProperties } from 'react'
import { StyleDefinition } from './types'

interface SizeInputProps {
  title: string
  value: number
  onChange: (value: number) => void
}
function SizeInput(props: SizeInputProps) {
  return (
    <InputNumber
      addonBefore={props.title}
      min="0"
      max="999"
      value={String(props.value)}
      onChange={(v) => props.onChange(Number(v))}
    />
  )
}

type Type = 'static' | 'auto'
type Value = {
  type: Type
  flexGrow: number
  width: number
  height: number
  minWidth: number
  minHeight: number
  maxWidth: number
  maxHeight: number
}

const hasWidthSize = (value: Value) => {
  if (value.type === 'static') {
    return !!value.width
  }
  return !!value.minWidth || !!value.maxWidth
}

const WidthHeight: StyleDefinition<Value> = {
  key: 'WidthHeight',
  title: '宽高',
  defaultValue: {
    type: 'static',
    flexGrow: 1,
    width: 0,
    height: 0,
    maxHeight: 0,
    maxWidth: 0,
    minHeight: 0,
    minWidth: 0,
  },
  description: '',
  Blueprint(props: { value: Value; onChange: (value: Value) => void }) {
    return (
      <div>
        <Radio.Group
          value={props.value.type}
          onChange={(ev) => props.onChange({ ...props.value, type: ev.target.value })}
        >
          <Radio.Button value="static">固定</Radio.Button>
          <Radio.Button value="auto">适应</Radio.Button>
        </Radio.Group>
        { props.value.type === 'static' ? (
          <>
            <SizeInput title="宽" value={props.value.width} onChange={(value) => props.onChange({ ...props.value, width: value })} />
            <SizeInput title="高" value={props.value.height} onChange={(value) => props.onChange({ ...props.value, height: value })} />
          </>
        ) : (
          <>
            <SizeInput title="最小宽" value={props.value.minWidth} onChange={(value) => props.onChange({ ...props.value, minWidth: value })} />
            <SizeInput title="最小高" value={props.value.minHeight} onChange={(value) => props.onChange({ ...props.value, minHeight: value })} />
            <SizeInput title="最大宽" value={props.value.maxWidth} onChange={(value) => props.onChange({ ...props.value, maxWidth: value })} />
            <SizeInput title="最大高" value={props.value.maxHeight} onChange={(value) => props.onChange({ ...props.value, maxHeight: value })} />
          </>
        )}
        <InputNumber
          addonBefore="宽适应值"
          disabled={hasWidthSize(props.value)}
          min="0"
          max="99"
          value={String(props.value.flexGrow)}
          onChange={(value) => props.onChange({ ...props.value, flexGrow: Number(value) })}
        />
      </div>
    )
  },
  render(value: Value): CSSProperties {
    if (value.type === 'static') {
      return {
        flexGrow: hasWidthSize(value) ? 0 : value.flexGrow,
        width: value.width || 'auto',
        height: value.height || 'auto',
      }
    }
    return {
      flexGrow: hasWidthSize(value) ? 0 : value.flexGrow,
      minWidth: value.minWidth || 'auto',
      minHeight: value.minHeight || 'auto',
      maxWidth: value.maxWidth || 'unset',
      maxHeight: value.maxHeight || 'unset',
    }
  },
}

export default WidthHeight
