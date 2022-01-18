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
  examples: MetadataExample[]
}

// 模板数据项
export interface MetadataItem {
  id: string
  //  数据的扁平化定位
  uri: string
  //  标题
  title: string
  //  是否必须
  required: boolean
  description?: string
}

// 数据示例
export interface MetadataExample {
  id: string
  //  标题
  title: string
  //  示例json数据
  json: string
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
