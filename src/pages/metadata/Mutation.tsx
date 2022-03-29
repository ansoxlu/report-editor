import {
  Button, Input, message, Switch, Table, Tag,
} from 'antd'
import { maxBy, sortBy } from 'lodash'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Metadata, MetadataItem } from '../../definition/types'
import { dateTime } from '../../plugins/moment'

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
    title: '添加',
  },
  delete: {
    color: '#f50',
    title: '删除',
  },
  update: {
    color: '#2db7f5',
    title: '修改',
  },
  normal: {
    color: undefined,
    title: '无',
  },
}

interface ItemEdit {
  id?: number
  path: string
  alias?: string
  status: Status
  required: boolean
}

type Props = {
  value: Metadata
  onChange: (value: Metadata) => void
  json: Record<string, any>
}

function Mutation(props: Props) {
  const navigate = useNavigate()
  const [items, setItems] = React.useState<ItemEdit[]>([])

  React.useEffect(() => {
    // key: 路径， value: 是否可选
    const result: Record<string, boolean> = {}
    // 属性检查
    const precess = (key: string, value: any) => {
      // 非必填
      if (value === undefined || value === null) {
        result[key] = false
        return
      }

      // 基础类型
      if (['string', 'number', 'boolean'].includes(typeof value)) {
        if (result[key] === undefined) {
          result[key] = true
        }
        return
      }
      // 数组
      if (Array.isArray(value)) {
        // 无效空数组
        if (value.length === 0) {
          return
        }
        // 基础变量类型
        if (!value[0] || typeof value[0] !== 'object') {
          result[`${key}[]`] = true
          return
        }
        // 对象数组
        value.forEach((it) => {
          Object.entries(it)
            .forEach(([k, v]) => {
              if (v === undefined || v === null) {
                result[`${key}[].${k}`] = false
                return
              }
              // 数组不能再嵌套数组
              if (['string', 'number', 'boolean'].includes(typeof v)) {
                if (result[key] === undefined) {
                  result[key] = true
                }
              }
            })
        })
        return
      }
      // 对象
      Object.entries(value).forEach(([k, v]) => {
        precess(`${key}${key ? '.' : ''}${k}`, v)
      })
    }
    precess('', props.json)
    // 判断是否删除
    const list: ItemEdit[] = props.value.items.map((it) => ({
      id: it.id,
      path: it.path,
      alias: it.alias,
      status: result[it.path] === undefined ? 'delete' : 'normal',
      required: it.required,
    }))
    // 判断是否新增
    Object.keys(result).forEach((key) => {
      const it = list.find((it) => it.path === key)
      if (!it) {
        list.push({
          path: key,
          status: 'add',
          required: result[key],
        })
      }
    })

    setItems(sortBy(list, 'path'))
  }, [props.json, props.value.items])

  const onSave = () => {
    if (items.length === 0) {
      message.error('请输入JSON进行编辑')
      return
    }

    // 如果有配置别名，将使用别名 + id显示，如 ${别名[1]}
    let lastId: number = maxBy(items, (it) => it?.id ?? 0)?.id || 0
    const result: MetadataItem[] = items
      .filter((it) => it.status !== 'delete')
      .map((it) => {
        if (!it.id) {
          lastId += 1
        }
        return {
          id: lastId,
          path: it.path,
          alias: it.alias,
          required: it.required,
        }
      })
    props.onChange({
      ...props.value,
      items: result,
      updatedAt: dateTime(),
      json: JSON.stringify(props.json),
    })
  }

  const onChange = (item: ItemEdit) => {
    const res = item
    const index = items.findIndex((it) => it.path === res.path)
    const it = props.value.items[index]!
    if ((res.status !== 'add')) {
      if (res.required !== it.required || res.alias !== it.alias) {
        res.status = 'update'
      } else {
        res.status = 'normal'
      }
    }
    items.splice(index, 1, res)
    setItems([...items])
  }

  return (
    <Container>
      <Header>
        <div>
          <div>{props.value.title}</div>
          <div />
          <div>
            <Button type="primary" onClick={() => navigate('/')}>返回首页</Button>
          </div>
          <div>
            {items.find((it) => it.status !== 'normal') && (<Button type="primary" onClick={onSave}>保存</Button>)}
          </div>
        </div>
        <div>
          {props.value.description}
        </div>
      </Header>
      <Content>
        <Table dataSource={items} pagination={false} rowKey="path">
          <Table.Column title="路径" dataIndex="path" />
          <Table.Column
            title="别名"
            dataIndex="alias"
            align="center"
            render={(alias, it:ItemEdit) => (
              <Input
                value={alias}
                onChange={(ev) => onChange({ ...it, alias: ev.target.value || undefined })}
              />
            )}
          />
          <Table.Column
            title="是否必需"
            dataIndex="required"
            align="center"
            render={(required, it: ItemEdit) => (
              <Switch checked={required} checkedChildren="是" unCheckedChildren="否" onChange={(required) => onChange({ ...it, required })} />
            )}
          />
          <Table.Column
            title="状态变更"
            dataIndex="status"
            align="center"
            render={(status: Status) => (
              <Tag color={STATUS[status].color}>{STATUS[status].title}</Tag>
            )}
          />
        </Table>
      </Content>
    </Container>
  )
}

export default Mutation
