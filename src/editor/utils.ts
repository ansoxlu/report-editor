import config from './config.json'
import { DefaultStyle, DIMENSION_STYLE, SIMPLE_STYLE, Style, BUILD_IDS } from './enum'

const getRawStyles = (id: BUILD_IDS) => {
  const styleAll = Object.keys(config.style)
  switch (id) {
    case BUILD_IDS.LIST:
      return [
        styleAll,
        styleAll
      ]
    case BUILD_IDS.SIMPLE:
      return config.layout.simple.styles
    case BUILD_IDS.ABSOLUTE:
      return config.layout.absolute.styles
    case BUILD_IDS.TABLE:
      return config.layout.table.styles
    default:
      return styleAll
  }
}

const getDefaultStyle = (key: string) => {
  let value: DefaultStyle | null = null
  for (const styleKey in config.style) {
    if (Object.prototype.hasOwnProperty.call(config.style, styleKey)) {
      // @ts-ignore
      const val = config.style[styleKey]! as { default?: DefaultStyle} | string
      if (styleKey === key && val && typeof val !== 'string' && val?.default) {
        value = val.default
      }
    }
  }
  const res: Style = {}
  res[key] = value
  return res
}

export const newStyle = (id: BUILD_IDS) => {
  const styles = getRawStyles(id) || []
  const targetList = styles.map(it => {
    if (Array.isArray(it)) {
      return it.map(jm => getDefaultStyle(jm))
    } else {
      return getDefaultStyle(it)
    }
  })
  return Object.assign({}, ...targetList) as Style
}

export const toReactStyle = (style: Style) => {
  const result: {[key: string]: string} = {}
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      const val = style[key]
      if (val) {
        if (SIMPLE_STYLE.includes(key) && typeof val === 'string') {
          result[key] = val
        } else if (DIMENSION_STYLE.includes(key) && typeof val === 'string') {
          result[key] = `${val}px`
        } else if (key === 'padding' && typeof val === 'object') {
          result[key] = `${val.top || 0}px ${val.right || 0}px ${val.bottom || 0}px ${val.left || 0}px`
        } else if (key === 'ellipsis' && typeof val === 'string' && parseInt(val)) {
          result.overflow = 'hidden'
          result.whiteSpace = 'nowrap'
          result.textOverflow = 'ellipsis'
        } else if (key === 'borderBlock' && typeof val === 'object') {
          const { direction, width = '0', style, color } = val as { direction: string[], width: string, style: string, color: string }
          if (direction.length > 0 && parseInt(width) > 0) {
            if (direction.length === 4) {
              result.borderBlock = `${width}px ${style} ${color}`
            } else {
              direction.forEach(it => {
                switch (it) {
                  case 'top':
                    result.borderBlockTop = `${width}px ${style} ${color}`
                    break
                  case 'right':
                    result.borderBlockRight = `${width}px ${style} ${color}`
                    break
                  case 'bottom':
                    result.borderBlockBottom = `${width}px ${style} ${color}`
                    break
                  case 'left':
                    result.borderBlockBottom = `${width}px ${style} ${color}`
                    break
                }
              })
            }
          }
        }
      }
    }
  }
  return result
}
