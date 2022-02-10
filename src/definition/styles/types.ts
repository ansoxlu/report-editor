import { CSSProperties, ReactElement } from 'react'

/**
 * T 需要的参数
 */
export interface StyleDefinition<T> {
  key: string
  title: string
  description: string
  defaultValue: T
  // 渲染时生成的样式
  render: (value: T) => CSSProperties
  // 在 blueprint 区域显示的内容
  Blueprint: (props: { value: T, onChange: (value: T) => void }) => ReactElement
}

export interface Style<T> {
  value: T
  definition: StyleDefinition<T>,
  toJSON: () => any
}

export interface StyleSerialize {
  value: any,
  definition: string
}
