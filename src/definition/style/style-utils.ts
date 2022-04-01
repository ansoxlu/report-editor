import { CSSProperties } from 'react'

import { cloneDeep } from 'lodash'
import { Style, StyleDefinition, StyleSerialize } from './types'

/**
 * 使用 html2pdf 生成 pdf, html -> canvas -> img -> pdf
 * 为了获取高清图片,需要放大倍数再缩小成打印尺寸,因此不能直接使用px, 设置 html.fontSize = 100, 打印时扩大倍数
 * @param px
 */
const rem = (px: number): string => `${px / 100}rem`

const render = (styles: Style<any>[]): CSSProperties => styles.reduce<CSSProperties>((pv, it) => Object.assign(pv, it.definition.render(it.value)) as CSSProperties, { display: 'flex' })

const LAYOUT_STYLE = ['WidthHeight', 'Direction']

function renderLayout(styles: Style<any>[]): CSSProperties {
  return styles.reduce<CSSProperties>((pv, it) => {
    if (!LAYOUT_STYLE.includes(it.definition.key)) {
      return pv
    }
    return Object.assign(pv, it.definition.render(it.value)) as CSSProperties
  }, { display: 'flex' })
}

function createStyle(
  definitions: StyleDefinition<any>[],
  style: StyleSerialize | StyleDefinition<any>,
  value?: any,
): Style<any> {
  if ((style as StyleSerialize).definition) {
    const serialize = style as StyleSerialize
    return {
      value: serialize.value,
      definition: definitions.find((it) => it.key === serialize.definition)!,
      toJSON() {
        return {
          definition: this.definition.key,
          value: this.value,
        }
      },
    }
  }
  const definition = style as StyleDefinition<any>
  return {
    value: cloneDeep(value || definition.defaultValue),
    definition,
    toJSON() {
      return {
        definition: this.definition.key,
        value: this.value,
      }
    },
  }
}

export default {
  rem,
  render,
  renderLayout,
  createStyle,
}
