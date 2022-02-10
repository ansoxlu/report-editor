import { sortBy } from 'lodash'

export type FlattenData = Record<string, {
  // if key = 'hospital.name' keys = [hospital.name]
  keys: string[],
  // number / boolean / array / null / undefined
  value: any
}>

/**
 * object 数据扁平化处理, 处理基本类型和非数组对象
 * @param data {
 *   a: 1,
 *   b: [1, 2],
 *   c: { e: 2, f: 3 },
 *   g: null,
 * }
 * return {
 *   a: { keys: ['a'], value: 1 },
 *   b: { keys: ['b'], [1, 2]},
 *   'c.e': { keys: ['a', 'e'], value: 2 },
 *   'c.f': { keys: ['a', 'f'], value: 3 },
 *   g: { keys: ['g'], value: null },
 * }
 */
export const flattenData = (data: any | undefined): FlattenData => {
  const result: Record<string, any> = {}
  const precess = (key: string, value: any) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const valueKey in value) {
        precess(key ? `${key}.${valueKey}` : valueKey, value[valueKey])
      }
    } else if (key) {
      result[key] = value
    }
  }
  precess('', data)

  // 转成 flattenData
  for (const key in result) {
    result[key] = {
      keys: key.split('.'),
      value: result[key]
    }
  }
  return result
}

export interface SearchResult {
  key: string
  value: any
}

export const searchData = (keyword: string, data: FlattenData): SearchResult[] => {
  // 直接命中
  if (data[keyword]) {
    return [{
      key: keyword,
      value: data[keyword]
    }]
  }

  // 纯数字排除
  if (!Number.isNaN(keyword)) {
    return []
  }

  // 开头命中
  const keyResult = Object.keys(data).filter(key => key.startsWith(keyword))
  if (keyResult.length) {
    return sortBy(keyResult.map(it => ({
      key: it,
      value: data[it]
    })), 'key')
  }

  // 部分 key 的全命中或开头命中
  const keys = keyword.split(',')
  return sortBy(Object.values(data).map(it => {
    let sort = 0
    for (let i = 0; i < keys.length; i++) {
      sort = sort + i - (it.keys.findIndex(item => item === keys[i]) * 3) - (it.keys.findIndex(item => item.startsWith(keys[i])) * 2)
    }

    return {
      key: it.keys.join('.'),
      value: it.value,
      sort
    }
  }), 'sort')
}

export const getData = (texts: string | string[], data: FlattenData) => {
  const isArray = Array.isArray(texts)
  const result = (isArray ? texts as string[] : [texts as string]).map(it => it.replace(/\${([0-9a-zA-Z_.]+)}/g, (match, p1: string) => {
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
    return data[p1]?.value ?? ''
  }) || undefined)
  return isArray ? result : result[0]
}
