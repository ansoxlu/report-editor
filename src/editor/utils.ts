import config from './config.json'
import { CONTENT_TYPE, LAYOUT_TYPE } from './enum'
import { fromPairs } from 'lodash'

const getRawStyles = (type: LAYOUT_TYPE | CONTENT_TYPE) => {
  switch (type) {
    case CONTENT_TYPE.TEXT:
      return config.content.barcode.styles
    case CONTENT_TYPE.FILED:
      return config.content.filed.styles
    case CONTENT_TYPE.LIST:
      return [
        config.content.list.items.title.styles,
        config.content.list.items.value.styles
      ]
    case CONTENT_TYPE.IMAGE:
      return config.content.image.styles
    case CONTENT_TYPE.BARCODE:
      return config.content.barcode.styles
    case CONTENT_TYPE.QRCODE:
      return config.content.qrcode.styles
    case LAYOUT_TYPE.ROW:
      return config.layout.row.styles
    case LAYOUT_TYPE.COL:
      return config.layout.col.styles
    case LAYOUT_TYPE.ABSOLUTE:
      return config.layout.absolute.styles
    default:
      return null
  }
}

const getDefaultStyle = (style: string | string[]) => {
  const key = Array.isArray(style) ? style[0] : style
  let val = Array.isArray(style) ? style[1] : null
  if (typeof style === 'string') {
    for (const styleKey in config.style) {
      // @ts-ignore
      const it = config.style[styleKey] as { default?: string } | string
      if (styleKey === key && it && typeof it !== 'string' && it.default) {
        val = it.default
      }
    }
  }
  const res: {[key: string]: string | null} = {}
  res[key] = val
  return res
}

export const newStyle = (type: LAYOUT_TYPE | CONTENT_TYPE) => {
  const styles = getRawStyles(type) || []
  const targetList = styles.map(it => {
    if (Array.isArray(it)) {
      return it.map(jm => getDefaultStyle(jm))
    } else {
      return getDefaultStyle(it)
    }
  })
  return Object.assign({}, ...targetList) as {[key: string]: string | null | string[]}
}

const assertCssUnit = (units: string) => {
  let err = false
  const res = units.split(' ').map(it => {
    /[cm|mm|in|pt]/g
  }).join(' ')
  if (err) {
    return null
  }
  return res
}

export const toReactStyle = (style: {[key: string]: string | null | string[]}) => {
  const result: {[key: string]: string} = {}
  for (const key in style) {
    const val = style[key]
    if (val) {
      if (key === 'justifyContent' || key === 'alignItems' || key === 'flexGrow' || key === 'fontSize' || key === 'fontWeight' || key === 'textIndent') {
        result[key] = val as string
      } else if()

    }
  }
  return result
}
