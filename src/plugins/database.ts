import { Metadata, Template } from '../types'

export const METATABLES: Metadata[] = [
  {
    id: 'example',
    title: '示例数据',
    description: '示例数据',
    createdAt: '2022-01-01 01:02:03',
    updatedAt: '2022-01-01 01:02:03',
    items: [],
    example: '{}'
  }
]

export const TEMPLATES: Template[] = [
  {
    id: 'example',
    title: '示例模板',
    description: '示例模板',
    createdAt: '2022-01-01 01:02:03',
    updatedAt: '2022-01-01 01:02:03',
    metadataId: 'example',
    json: '{}'
  }
]
