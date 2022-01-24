import { createStyle, Style } from './styles'
import { Layout } from './layout'
import Padding from './styles/padding'
import FontSize from './styles/font-size'
import FontWeight from './styles/font-weight'
import Ellipsis from './styles/ellipsis'
import Color from './styles/color'

export type PageMode = 'headerFooter' | 'autoFixed'

export interface Page {
  // mm
  width: number
  // mm
  height: number
  // 默认样式
  styles: Style<any>[],
  // 多页根据 pageable.offsets 切割
  layouts: Layout[]
  // 绝对定位内容
  absolutes: Layout[]
  // 分页类型
  mode: PageMode,
  // layouts 分页切割 index
  offsets: number[]
}

export const PAPER_SIZES = [
  {
    title: 'A5',
    width: 148,
    height: 210
  },
  {
    title: 'A4',
    width: 210,
    height: 297
  }
]

export const createPage = (): Page => {
  return {
    width: 210,
    height: 297,
    styles: [
      FontSize,
      FontWeight,
      Ellipsis,
      Color,
      Padding
    ].map(it => createStyle(it)),
    layouts: [],
    absolutes: [],
    mode: 'autoFixed',
    offsets: []
  }
}
