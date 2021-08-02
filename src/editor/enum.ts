import { mapValues } from 'lodash'
import config from './config.json'

export enum BUILD_IDS {
  TEXT = 'text',
  FILED = 'filed',
  LIST = 'list',
  IMAGE = 'image',
  BARCODE = 'barcode',
  QRCODE = 'qrcode',
  COL = 'col',
  ROW = 'row',
  ABSOLUTE = 'ABSOLUTE',
}

export enum BUILD_TYPE {
  LAYOUT = 'layout',
  CONTENT = 'content'
}

export type Content = {
  id: string
  style: Style
  buildId: BUILD_IDS,
  data: {[key: string]: string},
}

export type Layout = {
  id: string
  buildId: BUILD_IDS,
  style: Style
  contents: Content[]
  data: {[key: string]: string},
}

export type Page = {
  width: string
  height: string
  landscape: boolean
  pageable: boolean
}

export type DefaultStyle = string | { [key: string]: string | string[] }

export type Style = {[key: string]: string | {[key: string]: string | string[]} | null}

export const DIMENSION_STYLE = [
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'fontSize',
  'textIndent'
]
export const SIMPLE_STYLE = [
  'flexDirection',
  'justifyContent',
  'alignItems',
  'flexGrow',
  'fontWeight'
]

export const DEFINITIONS: {[key: string]: string | string[] | object[]}[] = Object.values(
  mapValues(config.content, (val: any, key) => ({
    ...val,
    buildId: key as BUILD_IDS,
    type: BUILD_TYPE.CONTENT
  }))
).concat(
  Object.values(mapValues(config.layout, (val: any, key) => ({
    ...val,
    buildId: key as BUILD_IDS,
    type: BUILD_TYPE.LAYOUT
  })))
).filter(it => it.buildId !== 'readme')
console.log(DEFINITIONS)
export const MATERIAL_DROP_ID = 'material'
export const BUILD_DROP_ID = 'build'
