import { Style } from './styles'
import { Layout } from './layout'

export type PageableMode = 'headerFooter' | 'auto' | 'exact'

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
  // 分页属性
  pageable: {
    // 分页类型
    mode: PageableMode,
    // layouts 分页切割 index
    offsets: number[]
  }
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
