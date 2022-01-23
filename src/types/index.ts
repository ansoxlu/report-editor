// 模板数据源
export interface Metadata {
  id: string
  //  标题
  title: string
  description?: string
  createdAt: string
  updatedAt: string
  //  数据项
  items: MetadataItem[]
  //  数据示例
  example: string
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
  //  模板数据
  json: string
}
