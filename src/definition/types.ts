import { Style } from './styles/types'
import { Layout } from './layout/types'

export interface Page {
  // mm
  width: number
  // mm
  height: number
  // 默认样式
  styles: Style<any>[],
  // 多页根据 pageable.offsets 切割
  layouts: Layout[]
  header: number,
  footer: number,
  pageable: number[],
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
