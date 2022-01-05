import React from 'react'
import { rem, Style } from './index'

type LineStyle = 'solid' | 'double' | 'dotted'
interface BlockStyle {
  size: number,
  style: LineStyle,
  color: string
}

const Border: Style<{ top: BlockStyle, bottom: BlockStyle, left: BlockStyle, right: BlockStyle }> = {
  Blueprint (_props: { value: { top: BlockStyle; bottom: BlockStyle; left: BlockStyle; right: BlockStyle }; onChange: (value: { top: BlockStyle; bottom: BlockStyle; left: BlockStyle; right: BlockStyle }) => void }) {
    return (<div/>)
  },
  render (value: { top: BlockStyle; bottom: BlockStyle; left: BlockStyle; right: BlockStyle }) {
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
