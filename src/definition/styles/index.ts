import { ReactElement, CSSProperties } from 'react'
import { cloneDeep } from 'lodash'
import AlignItems from './align-items'
import Border from './border'
import Color from './color'
import Ellipsis from './ellipsis'
import FlexDirection from './flex-direction'
import FlexGrow from './flex-grow'
import FontSize from './font-size'
import FontWeight from './font-weight'
import JustifyContent from './justify-content'
import MaxWidth from './max-width'
import MaxHeight from './max-height'
import MinHeight from './min-height'
import MinWidth from './min-width'
import Padding from './padding'
import TextIndent from './text-indent'
import LetterSpacing from './letter-spacing'

/**
 * T 需要的参数
 */
export interface StyleDefinition<T> {
  key: string
  title: string
  describe: string
  defaultValue: T
  // 渲染时生成的样式
  render: (value: T) => CSSProperties
  // 在 blueprint 区域显示的内容
  Blueprint: (props: {value: T, onChange: (value: T) => void}) => ReactElement
}

export interface Style<T> {
  value: T
  definition: StyleDefinition<T>,
  toJSON: () => any
}

export interface StyleDeserialize { value: any, definition: string }

/**
 * 使用 html2pdf 生成 pdf, html -> canvas -> img -> pdf
 * 为了获取高清图片,需要放大倍数再缩小成打印尺寸,因此不能直接使用px, 设置 html.fontSize = 100, 打印时扩大倍数
 * @param px
 */
export const rem = (px: number): string => {
  return `${px / 100}rem`
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
]

export const render = (styles: Style<any>[]): CSSProperties => {
  return styles.reduce<CSSProperties>((pv, it) => {
    return Object.assign(pv, it.definition.render(it.value)) as CSSProperties
  }, { display: 'flex' })
}

export const createStyle = (style: StyleDeserialize | StyleDefinition<any>): Style<any> => {
  if ((style as StyleDeserialize).definition) {
    const dv = style as StyleDeserialize
    return {
      value: dv.value,
      definition: STYLE_DEFINITIONS.find(it => it.key === dv.definition)!,
      toJSON () {
        return {
          definition: this.definition.key,
          value: this.value
        }
      }
    }
  }
  const definition = style as StyleDefinition<any>
  return {
    value: cloneDeep(definition.defaultValue),
    definition: definition,
    toJSON () {
      return {
        definition: this.definition.key,
        value: this.value
      }
    }
  }
}
