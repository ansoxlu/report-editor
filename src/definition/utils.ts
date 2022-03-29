import html2Canvas from 'html2canvas'
import { Metadata, Page, PageSerialize } from './types'
import { StyleSerialize } from './style/types'
import styleUtil from './style/utils'
import definition from './definition'
import { LayoutSerialize } from './layout/types'
import layoutUtil from './layout/utils'

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

/**
 * 获取渲染数据
 * @param texts       1.xx${xxx}xx 判断文本获取， 2. xx 获取object数据
 * @param metadata    数据定义
 * @param data        渲染数据
 */
const getRenderData = (texts: string | string[], metadata: Metadata, data: FlattenData) => {
  const isArray = Array.isArray(texts)
  const result = (isArray ? texts as string[] : [texts as string]).map((text) => {
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
          return `\n${val.filter((it) => it).join('\n')}\n`
        }
        return val || ''
      })
    }
    const key = text.trim()
    // alias[2]
    const exec = /\[([0-9]+)]$/.exec(key)
    const item = metadata.items.find((it) => {
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

const IFRAME_ID = 're-iframe'
const SCALE = 3
const htmlToCanvas = async (
  html: string,
  width: number,
  height: number,
): Promise<HTMLCanvasElement> => {
  const o1 = document.getElementById(IFRAME_ID)
  if (o1) {
    document.body.removeChild(o1)
  }
  const iframe = document.createElement('iframe')
  iframe.id = IFRAME_ID
  iframe.style.visibility = 'hidden'
  iframe.style.position = 'absolute'
  iframe.style.top = '0px'
  iframe.srcdoc = `<!DOCTYPE html>
      <html lang="en" style="font-size: ${SCALE * 100}px">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style> * { padding: 0; margin: 0; } </style>
        </head>
        <body>
          <div id="app" style="width: ${width * SCALE}mm; height: ${height * SCALE}mm">${html}</div>
        </body>
      </html>
    `
  document.body.appendChild(iframe)
  // 等待渲染完成后获取 element
  await new Promise((resolve) => {
    const timer = setInterval(() => {
      if (iframe.contentDocument && iframe.contentDocument.getElementById('app')) {
        clearInterval(timer)
        resolve(undefined)
      }
    }, 100)
  })
  const canvas = await html2Canvas(iframe.contentDocument!.getElementById('app')!)
  const o2 = document.getElementById(IFRAME_ID)
  if (o2) {
    document.body.removeChild(o2)
  }
  return Promise.resolve(canvas)
}

const elementToCanvas = async (
  target: HTMLDivElement,
  width: number,
  height: number,
): Promise<HTMLCanvasElement[]> => {
  // 单页高度
  const pageHeight = target.offsetHeight
  // 单页
  if (pageHeight <= target.scrollHeight || height === 0) {
    return htmlToCanvas(target.innerHTML, width, height).then((canvas) => ([canvas]))
  }
  const pages: string[] = ['']
  // 可用高度
  let usableHeight = pageHeight
  for (let i = 0; i < target.children.length; i += 1) {
    const it = target.children[i]
    const itHeight = it.scrollHeight

    // 表格单页保留表头和表尾
    if (it.nodeName === 'TABLE') {
      // todo 分页未完成表头和表尾处理
    } else {
      // 可用高度不满足，进行换页
      // eslint-disable-next-line no-lonely-if
      if (itHeight > usableHeight) {
        usableHeight = pageHeight - itHeight
        pages.push(it.innerHTML)
      } else {
        // 将当前页内容取出，合并后再添加
        usableHeight -= itHeight
        const index = pages.length - 1
        const html = `${pages[index]}${it.outerHTML}`
        pages.splice(index, 1, html)
      }
    }
  }
  return Promise.all(pages.map((it) => htmlToCanvas(it, width, height)))
}

export default {
  elementToCanvas,
  flattenData,
  getRenderData,
  deserializePage,
}
