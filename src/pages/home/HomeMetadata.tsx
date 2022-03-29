import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Select } from 'antd'
import hooks from '../../app/hooks'
import Item from './components/Item'
import { Metadata } from '../../definition/types'
import EditItem, { EditValue } from './components/EditItem'

function HomeMetadata() {
  const navigate = useNavigate()
  const [database, setDatabase] = hooks.useDatabase()
  const [edit, setEdit] = React.useState<Metadata>()
  const [cloneId, setCloneId] = React.useState<string>()

  const onCreate = (value: EditValue) => {
    const clone = cloneId ? database.metatables.find((it) => it.id === cloneId) : undefined
    database.metatables.push({
      ...value,
      items: clone?.items ?? [],
      json: clone?.json ?? '{}',
    })
    setDatabase(database)
    setCloneId(undefined)
  }

  const onUpdate = (value: Metadata) => {
    const index = database.metatables.findIndex((it) => it.id === value.id)
    if (index !== -1) {
      database.metatables.splice(index, 1, value)
      setDatabase(database)
    }
    setEdit(undefined)
  }

  return (
    <div>
      <EditItem onOk={onCreate}>
        <Select placeholder="复制已有数据格式" allowClear style={{ width: 170 }} onChange={setCloneId}>
          {database.metatables.map((it) => (
            <Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>
          ))}
        </Select>
      </EditItem>

      {database.metatables.map((it) => (edit?.id === it.id
        ? (
          <EditItem
            key={it.id}
            value={edit}
            onOk={(value) => onUpdate(value as Metadata)}
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
              <div><Button type="primary" onClick={() => navigate(`/metadata/${it.id}`)}>数据定义</Button></div>
            </div>
          </Item>
        )))}
    </div>
  )
}
export default HomeMetadata
