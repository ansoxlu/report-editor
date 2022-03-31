import { Metadata, Page, PageSerialize } from './types'
import { StyleSerialize } from './style/types'
import styleUtil from './style/style-utils'
import definition from './definition'
import { LayoutSerialize } from './layout/types'
import layoutUtil from './layout/layout-utils'

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
type FlattenData = Record<string, any>
const flattenData = (data: any | undefined): FlattenData => {
  const result: Record<string, any> = {}
  const precess = (key: string, value: any) => {
    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        result[`${key}[]`] = value
      } else {
        Object.entries(value).forEach(([k, v]) => {
          precess(key ? `${key}.${k}` : k, v)
        })
      }
    } else if (key) {
      result[key] = value
    }
  }
  precess('', data)
  return result
}

const getValue = (key: string, metadata: Metadata, data: FlattenData) => {
  const k = key.trim()
  // 使用了别名 alias[2]
  const exec = /\[([0-9]+)]$/.exec(k)
  if (exec) {
    const path = metadata.items.find((it) => it.id === Number(exec[1]))?.path
    if (path) {
      return data[path]
    }
  }
  return data[k]
}

/**
 * 获取渲染数据
 * @param texts       1.xx${xxx}xx 判断文本获取， 2. xx 获取object数据
 * @param metadata    数据定义
 * @param data        渲染数据
 */
const getRenderData = (texts: string | string[], metadata: Metadata, data: FlattenData) => {
  const isArray = Array.isArray(texts)
  const result = (isArray ? texts as string[] : [texts as string]).map((text) => {
    // 字符串类型
    if (text.includes('${')) {
      return text.replace(/\${([^}]+)}/g, (match, p1: string) => {
        const value = getValue(p1, metadata, data)
        if (Array.isArray(value) && ['string', 'number', 'boolean', 'undefined'].includes(typeof value[0])) {
          return `\n${value.filter((it) => it).join('\n')}\n`
        }
        return value || ''
      })
    }
    return getValue(text, metadata, data)
  })
  return isArray ? result : result[0]
}

const deserializePage = (value: PageSerialize | string): Page => {
  const page = typeof value === 'string' ? JSON.parse(value) : value
  return {
    footer: page.footer,
    header: page.header,
    width: page.width,
    height: page.height,
    styles: page.styles.length
      ? page.styles.map((it: StyleSerialize) => styleUtil.createStyle(definition.styles, it))
      : definition.pageStyles,
    layouts: page.layouts.map((it: LayoutSerialize) => layoutUtil.createLayout(it)),
  }
}

export default {
  flattenData,
  getRenderData,
  deserializePage,
}
