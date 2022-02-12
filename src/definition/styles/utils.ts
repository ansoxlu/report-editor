import { CSSProperties } from 'react'

import { Style, StyleDefinition, StyleSerialize } from './types'
import { cloneDeep } from 'lodash'
import { STYLE_DEFINITIONS } from '../index'

/**
 * 使用 html2pdf 生成 pdf, html -> canvas -> img -> pdf
 * 为了获取高清图片,需要放大倍数再缩小成打印尺寸,因此不能直接使用px, 设置 html.fontSize = 100, 打印时扩大倍数
 * @param px
 */
export const rem = (px: number): string => {
  return `${px / 100}rem`
}

export const render = (styles: Style<any>[]): CSSProperties => {
  return styles.reduce<CSSProperties>((pv, it) => {
    return Object.assign(pv, it.definition.render(it.value)) as CSSProperties
  }, { display: 'flex' })
}

const LAYOUT_STYLE = ['FlexDirection', 'JustifyContent', 'AlignItems', 'FlexGrow', 'MinHeight', 'MinWidth', 'MaxHeight', 'MaxWidth']
export const renderLayout = (styles: Style<any>[]): CSSProperties => {
  return styles.reduce<CSSProperties>((pv, it) => {
    if (!LAYOUT_STYLE.includes(it.definition.key)) {
      return pv
    }
    return Object.assign(pv, it.definition.render(it.value)) as CSSProperties
  }, { display: 'flex' })
}

export const createStyle = (style: StyleSerialize | StyleDefinition<any>, value?: any): Style<any> => {
  if ((style as StyleSerialize).definition) {
    const serialize = style as StyleSerialize
    return {
      value: value ?? serialize.value,
      definition: STYLE_DEFINITIONS.find(it => it.key === serialize.definition)!,
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
        value: value ?? this.value
      }
    }
  }
}

export const getStyleDefinitions = async () => {
  return [
    await import('./flex-direction'),
    await import('./justify-content'),
    await import('./align-items'),
    await import('./flex-grow'),
    await import('./font-size'),
    await import('./font-weight'),
    await import('./text-indent'),
    await import('./letter-spacing'),
    await import('./color'),
    await import('./ellipsis'),
    await import('./min-height'),
    await import('./min-width'),
    await import('./max-height'),
    await import('./max-width'),
    await import('./padding'),
    await import('./border')
  ]
}

export const getDefaultTemplateStyles = async () => {
  return [
    await import('./font-size'),
    await import('./font-weight'),
    await import('./ellipsis'),
    await import('./color'),
    await import('./padding')
  ]
}
