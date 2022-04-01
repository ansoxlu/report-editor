import { Metadata, Template } from '../../definition/types'
import { Database } from './types'

const metatables: Metadata[] = [
  {
    id: 'example',
    title: '项目简介',
    description: '暂无说明',
    createdAt: '2022-01-01 01:02:03',
    updatedAt: '2022-02-12 10:10:30',
    items: [{ id: 1, path: 'author', required: true }, { id: 2, path: 'components[]', required: true }, { id: 3, path: 'description[]', required: true }, { id: 4, path: 'github', required: true }, { id: 5, path: 'status', required: true }, { id: 6, path: 'title', required: true }],
    json: '{"title":"报告编辑器","author":"ansoxlu","github":"https://github.com/ansoxlu/report-editor","status":"开发中","description":["该项目以动态数据生成PDF报告文件为目标","允许A4/A5等标准或自定义纸张格式","允许自动分页/固定分页/页头页尾"],"components":["1.文本","2. 图片(待完成)","3. 一维码(待完成)","4. 二维码(待完成)","5. 表格(待完成)","6. 自定义表格(隐藏属性)(待完成)"]}',
  },
]

const templates: Template[] = [
  {
    id: 'example',
    title: '项目简介',
    description: '暂无说明',
    createdAt: '2022-01-01 01:02:03',
    updatedAt: '2022-01-01 01:02:03',
    metadataId: 'example',
  }]

const database: Database = {
  metatables,
  templates,
}

export default database
