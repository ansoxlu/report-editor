import { Metadata, Template } from '../definition/types'
import { DEFAULT_TEMPLATE_STYLES } from '../definition'

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
    footer: -1,
    header: -1,
    width: 210,
    height: 297,
    layouts: [],
    listIndexes: [],
    pageIndexes: [],
    styles: DEFAULT_TEMPLATE_STYLES
  }
]
