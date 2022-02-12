import { Metadata, Page, PageSerialize } from './types'
import { StyleSerialize } from './styles/types'
import { createStyle } from './styles/utils'
import { DEFAULT_TEMPLATE_STYLES } from './index'
import { LayoutSerialize } from './layout/types'
import { createLayout } from './layout/utils'

export type FlattenData = Record<string, any>
/**
 * object 数据扁平化处理, 处理基本类型和非数组对象
 * @param data {
 *   a: 1,
 *   b: [1, 2],
 *   c: { e: 2, f: 3 },
 *   g: null,
 * }
 * return {
 *   a: 1,
 *   b[]: [1, 2],
 *   'c.e': 2,
 *   'c.f': 3,
 *   g: null,
 * }
 */
export const flattenData = (data: any | undefined): FlattenData => {
  const result: Record<string, any> = {}
  const precess = (key: string, value: any) => {
    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        result[`${key}[]`] = value
      } else {
        for (const valueKey in value) {
          precess(key ? `${key}.${valueKey}` : valueKey, value[valueKey])
        }
      }
    } else if (key) {
      result[key] = value
    }
  }
  precess('', data)
  return result
}

/**
 * 获取渲染数据
 * @param texts       1.xx${xxx}xx 判断文本获取， 2. xx 获取object数据
 * @param metadata    数据定义
 * @param data        渲染数据
 */
export const getRenderData = (texts: string | string[], metadata: Metadata, data: FlattenData) => {
  const isArray = Array.isArray(texts)
  const result = (isArray ? texts as string[] : [texts as string]).map(text => {
    if (text.includes('${')) {
      return text.replace(/\${([^}]+)}/g, (match, p1: string) => {
        // ${12} 快速空格
        // if (!p1.includes('.') && !Number.isNaN(p1)) {
        //   const len = Number(p1)
        //   if (len < 1) {
        //     return ''
        //   }
        //   let sb = ''
        //   for (let i = 0; i < len; i++) {
        //     sb += '&nbsp;'
        //   }
        //   return sb
        // }
        const key = p1.trim()
        const exec = /\[([0-9]+)]$/.exec(key)
        const val = data[exec ? exec[1] : key]
        if (Array.isArray(val) && ['string', 'number', 'boolean', 'undefined'].includes(typeof val[0])) {
          return `\n${val.filter(it => it).join('\n')}\n`
        }
        return val || ''
      })
    }
    const key = text.trim()
    // alias[2]
    const exec = /\[([0-9]+)]$/.exec(key)
    const item = metadata.items.find(it => {
      if (exec) {
        return it.id === Number(exec[1])
      }
      return it.path === key
    })
    if (!item) {
      if (exec) {
        return undefined
      }
      return text
    }
    return data[exec ? exec[1] : key]
  })
  return isArray ? result : result[0]
}

export const deserializePage = (page: PageSerialize): Page => {
  return {
    footer: page.footer,
    header: page.header,
    width: page.width,
    height: page.height,
    listIndexes: page.listIndexes,
    pageIndexes: page.pageIndexes,
    styles: page.styles.length ? page.styles.map((it: StyleSerialize) => createStyle(it)) : DEFAULT_TEMPLATE_STYLES,
    layouts: page.layouts.map((it: LayoutSerialize) => createLayout(it))
  }
}
