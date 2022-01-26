import React, { useEffect, useState } from 'react'
import { Metadata, MetadataItem } from '../../types'
import styled from 'styled-components'
import { Button, Switch, Input, Tag, Table, message } from 'antd'
import { flattenUri } from '../../definition/utils'
import { sortBy, maxBy } from 'lodash'
import moment from 'moment'
import { DATE_TIME_FORMAT } from '../../plugins/moment'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
`

const Header = styled.div`
  padding: 15px 30px;
  border-bottom: 2px solid #eee;
  background-color: #f7f7f7;

  > div:nth-child(1) {
    display: flex;
    height: 32px;

    > div:nth-child(1) {
      font-size: 18px;
    }
    > div:nth-child(2) {
      flex: auto;
    }
    > div:last-child {
      margin-left: 10px;
    }
  }

  > div:nth-child(2) {
    color: #bfbfbf;
  }
`

const Content = styled.div`
  padding: 15px 30px;
`

type Status = 'add' | 'delete' | 'update' | 'normal'

const STATUS = {
  add: {
    color: '#87d068',
    title: '添加'
  },
  delete: {
    color: '#f50',
    title: '删除'
  },
  update: {
    color: '#2db7f5',
    title: '修改'
  },
  normal: {
    color: undefined,
    title: '无'
  }
}

interface ItemEdit {
  id?: number
  path: string
  alias?: string
  status: Status
  required: boolean
}

const Overview = (props: { value: Metadata, onChange: (value: Metadata) => void, json: object }) => {
  const navigate = useNavigate()
  const [items, setItems] = useState<ItemEdit[]>([])

  useEffect(() => {
    const data = flattenUri(props.json)
    const list: ItemEdit[] = props.value.items.map(it => ({
      id: it.id,
      path: it.path,
      alias: it.alias,
      status: data[it.path] === undefined ? 'delete' : 'normal',
      required: it.required
    }))

    for (const key in data) {
      const it = list.find(it => it.path === key)
      if (!it) {
        list.push({
          path: key,
          status: 'add',
          required: data[key]
        })
      }
    }
    setItems(sortBy(list, 'path'))
  }, [props.json, props.value.items])

  const handleSave = () => {
    if (items.length === 0) {
      message.error('请输出JSON进行编辑')
      return
    }

    let lastId: number = maxBy(items, it => it?.id ?? 0)?.id || 0
    const result: MetadataItem[] = items
      .filter(it => it.status !== 'delete')
      .map(it => {
        if (!it.id) {
          lastId++
        }
        return {
          id: lastId,
          path: it.path,
          alias: it.alias,
          required: it.required
        }
      })
    props.onChange({
      ...props.value,
      items: result,
      updatedAt: moment().format(DATE_TIME_FORMAT),
      example: JSON.stringify(props.json)
    })
    message.success('保存成功')
  }

  const handleChange = (item: ItemEdit) => {
    const index = items.findIndex(it => it.path === item.path)
    const it = props.value.items[index]!
    if ((item.status !== 'add')) {
      if (item.required !== it.required || item.alias !== it.alias) {
        item.status = 'update'
      } else {
        item.status = 'normal'
      }
    }
    items.splice(index, 1, item)
    setItems([...items])
  }

  return (
    <Container>
      <Header>
        <div>
          <div>{props.value.title}</div>
          <div />
          <div>
            <Button type="primary" onClick={() => navigate('/metadata')}>返回</Button>
          </div>
          <div>
            {items.find(it => it.status !== 'normal') && (<Button type="primary" onClick={handleSave}>保存</Button>)}
          </div>
        </div>
        <div>
          {props.value.description}
        </div>
      </Header>
      <Content>
        <Table dataSource={items} pagination={false} rowKey="path">
          <Table.Column title="路径" dataIndex="path"/>
          <Table.Column title="别名" dataIndex="alias" align="center" render={(alias, it:ItemEdit) => (
            <Input value={alias} onChange={ev => handleChange({ ...it, alias: ev.target.value || undefined })} />
          )} />
          <Table.Column title="是否必需" dataIndex="required" align="center" render={(required, it: ItemEdit) => (
            <Switch checked={required} checkedChildren="是" unCheckedChildren="否" onChange={required => handleChange({ ...it, required })} />
          )} />
          <Table.Column title="状态变更" dataIndex="status" align="center" render={(status: Status) => (
            <Tag color={STATUS[status].color}>{STATUS[status].title}</Tag>
          )} />
        </Table>
      </Content>
    </Container>
  )
}

export default Overview
