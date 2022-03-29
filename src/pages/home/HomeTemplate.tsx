import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, message, Select } from 'antd'
import hooks from '../../app/hooks'
import { Template } from '../../definition/types'
import EditItem, { EditValue } from './components/EditItem'
import Item from './components/Item'

function HomeTemplate() {
  const navigate = useNavigate()
  const [database, setDatabase] = hooks.useDatabase()
  const [edit, setEdit] = React.useState<Template>()
  const [metadataId, setMetadataId] = React.useState<string>()
  const [cloneTemplateId, setCloneTemplateId] = React.useState<string>()

  const onTemplateSelect = (id: string) => {
    const it = database.templates.find((it) => it.id === id)!
    setCloneTemplateId(it.id)
    if (!metadataId) {
      setMetadataId(it.metadataId)
    }
  }

  const onCreate = (value: EditValue) => {
    if (!metadataId) {
      message.error('请选择数据源')
      return
    }

    const json = cloneTemplateId
      ? database.templates.find((it) => it.id === cloneTemplateId)?.json
      : undefined

    database.templates.push({
      ...value,
      json,
      metadataId,
    })
    setDatabase(database)
  }

  const onUpdate = (value: Template) => {
    const index = database.templates.findIndex((it) => it.id === value.id)!
    if (index !== -1) {
      database.templates.splice(index, 1, value)
      setDatabase(database)
    }
    setEdit(undefined)
  }

  return (
    <div>
      <EditItem onOk={onCreate}>
        <Select value={metadataId} placeholder="请选择数据源" style={{ width: 170 }} onChange={setMetadataId}>
          {database.metatables.map((it) => (
            <Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>
          ))}
        </Select>
        <Select placeholder="复制已有模板数据" style={{ width: 170 }} onChange={onTemplateSelect}>
          {database.templates.map((it) => (
            <Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>
          ))}
        </Select>
      </EditItem>

      {database.templates.map((it) => (edit?.id === it.id
        ? (
          <EditItem
            key={it.id}
            value={edit}
            onOk={(value) => onUpdate(value as Template)}
            onCancel={() => setEdit(undefined)}
          />
        )
        : (
          <Item key={it.id}>
            <div>
              <div>{it.title}</div>
              <div />
              <div>{it.updatedAt}</div>
              <div><Button type="primary" onClick={() => setEdit(it)}>信息编辑</Button></div>
            </div>
            <div>
              <div>{it.description}</div>
              <div />
              <div><Button disabled={!it.json} type="primary" onClick={() => navigate(`/preview/${it.id}`)} style={{ marginRight: 24 }}>打印预览</Button></div>
              <div><Button type="primary" onClick={() => navigate(`/template/${it.id}`)}>模板定义</Button></div>
            </div>
          </Item>
        )))}
    </div>
  )
}

export default HomeTemplate
