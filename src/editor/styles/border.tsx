import React from 'react'
import { rem, Style } from './index'

type LineStyle = 'solid' | 'double' | 'dotted'
interface BlockStyle {
  size: number,
  style: LineStyle,
  color: string
}

interface Value {
  top: BlockStyle
  bottom: BlockStyle
  left: BlockStyle
  right: BlockStyle
}

const Border: Style<Value> = {
  // TODO 待完成
  Blueprint (_props: { value: Value; onChange: (value: Value) => void }) {
    return (<div/>)
  },
  render (value: Value) {
    return {
      borderTop: `${rem(value.top.size)} ${value.top.style} ${value.top.color}`,
      borderBottom: `${rem(value.bottom.size)} ${value.bottom.style} ${value.bottom.color}`,
      borderLeft: `${rem(value.left.size)} ${value.left.style} ${value.left.color}`,
      borderRight: `${rem(value.right.size)} ${value.right.style} ${value.right.color}`
    }
  },
  defaultValue: {
    bottom: { size: 0, color: '#000', style: 'solid' },
    left: { size: 0, color: '#000', style: 'solid' },
    right: { size: 0, color: '#000', style: 'solid' },
    top: { size: 0, color: '#000', style: 'solid' }
  },
  describe: '',
  title: '边距线',
  key: 'Border'
}

export default Border
