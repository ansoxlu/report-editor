// 模板数据源
import { Style, StyleSerialize } from './styles/types'
import { Layout, LayoutSerialize } from './layout/types'

export interface Metadata {
  id: string
  //  标题
  title: string
  description?: string
  createdAt: string
  updatedAt: string
  //  数据项
  items: MetadataItem[]
  //  json 数据示例
  json: string
}

// 模板数据项
export interface MetadataItem {
  id: number
  //  数据的扁平化路径
  path: string
  //  别名
  alias?: string
  //  是否必须
  required: boolean
}

// 模板
export interface Template {
  //  主键
  id: string
  //  标题
  title: string
  //  说明
  description: string
  //  创建于
  createdAt: string
  //  更新于
  updatedAt: string
  //  模板数据源
  metadataId: string
  // 模板 json: PageSerialize
  json: string
}

export interface PageSerialize {
  // mm
  width: number
  // mm
  height: number
  // 默认样式
  styles: StyleSerialize[]
  // 多页根据 pageable.offsets 切割
  layouts: LayoutSerialize[]
  // 页头结束位置 -1 表示无
  header: number
  // 页尾开始位置 -1 表示无
  footer: number
  pageIndexes: number[]
  listIndexes: number[]
}

export interface Page {
  // mm
  width: number
  // mm
  height: number
  // 默认样式
  styles: Style<any>[]
  // 多页根据 pageable.offsets 切割
  layouts: Layout[]
  // 页头结束位置 -1 表示无
  header: number
  // 页尾开始位置 -1 表示无
  footer: number
  pageIndexes: number[]
  listIndexes: number[]
}
