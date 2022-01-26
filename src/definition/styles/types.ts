import { CSSProperties, ReactElement } from 'react'
import FlexDirection from './flex-direction'
import JustifyContent from './justify-content'
import AlignItems from './align-items'
import FlexGrow from './flex-grow'
import FontSize from './font-size'
import FontWeight from './font-weight'
import TextIndent from './text-indent'
import LetterSpacing from './letter-spacing'
import Color from './color'
import Ellipsis from './ellipsis'
import MinHeight from './min-height'
import MinWidth from './min-width'
import MaxHeight from './max-height'
import MaxWidth from './max-width'
import Padding from './padding'
import Border from './border'
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

export const STYLE_DEFINITIONS = [
  FlexDirection,
  JustifyContent,
  AlignItems,
  FlexGrow,
  FontSize,
  FontWeight,
  TextIndent,
  LetterSpacing,
  Color,
  Ellipsis,
  MinHeight,
  MinWidth,
  MaxHeight,
  MaxWidth,
  Padding,
  Border
].filter(it => it)
