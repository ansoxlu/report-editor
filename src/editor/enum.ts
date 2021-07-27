export enum CONTENT_TYPE {
  TEXT = 'text',
  FILED = 'filed',
  LIST = 'list',
  IMAGE = 'image',
  BARCODE = 'barcode',
  QRCODE = 'qrcode',
}

export enum LAYOUT_TYPE {
  COL = 'col',
  ROW = 'row',
  ABSOLUTE = 'ABSOLUTE',
}

export type Content = {
  id: string
  css: string[]
  type: CONTENT_TYPE,
  data: {[key: string]: string | boolean | string[] | number},
  layoutId: string
}

export type Layout = {
  id: string
  type: LAYOUT_TYPE
  css: string[]
  contents: Content[]
  data: {[key: string]: string | boolean | string[] | number},
}

export type Page = {
  width: string
  height: string
  landscape: boolean
  pageable: boolean
  layouts: Layout[]
}
