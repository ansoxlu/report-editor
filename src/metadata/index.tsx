import React, { useState } from 'react'
import { Button, Input, message, Select } from 'antd'
import styled from 'styled-components'
import { Metadata } from '../definition/types'
import moment from 'moment'
import { v4 as uuid4 } from 'uuid'
import { DATE_TIME } from '../plugins/moment'
import { METATABLES } from '../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  padding: 15px 30px;
`

const Items = styled.div`
  padding: 15px 8px;
  border-bottom: 1px solid #ebe0e0;

  > div:first-child {
    display: flex;
    flex: auto;
    margin-bottom: 8px;
    align-items: center;

    > div:nth-child(1) {
      font-size: 16px;
    }

    > div:nth-child(2) {
      flex: auto;
    }

    > div:nth-child(3) {
      padding-right: 25px;
    }
  }

  > div:last-child {
    display: flex;
    color: #bfbfbf;

    > div:nth-child(2) {
      flex: auto;
    }
  }
`

const EditContainer = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid #ebe0e0;
`

const EditHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  > input {
    width: auto;
    flex: auto;
  }
  > button {
    margin-left: 15px;
  }
`

const EditDescription = styled.div`
  display: flex;

  > p {
    padding-left: 10px;
    width: 94px;
  }
  > textarea {
    width: auto;
    flex: 1;
  }
`

const Index = () => {
  const navigate = useNavigate()
  const [metatables, setMetatables] = useLocalStorage('RE-metatables', JSON.stringify(METATABLES))

  const [editId, setEditId] = useState<string | undefined>()

  const EditItem = (props: { value?: undefined | Metadata, onOk: (value: Metadata) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<Metadata>(props.value || {
      id: uuid4(),
      title: '',
      description: '',
      createdAt: '',
      json: '{}',
      items: [],
      updatedAt: ''
    })

    const handleSave = () => {
      if (!value.title) {
        return message.error('请输入标题')
      }
      const now = moment().format(DATE_TIME)
      props.onOk({
        ...value,
        createdAt: value.createdAt || now,
        updatedAt: now
      })
    }

    const handleSelectMetadata = (id: string) => {
      const metadata = JSON.parse(metatables).find((it: Metadata) => it.id === id)
      if (metadata) {
        setValue({
          ...value,
          items: metadata.items,
          json: metadata.json
        })
      } else {
        setValue({
          ...value,
          items: [],
          json: '{}'
        })
      }
    }

    return (
      <EditContainer>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} placeholder="请输入标题" onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          {!props.value && metatables.length && (
            <Select placeholder="复制已有数据格式" allowClear style={{ width: 170 }} onChange={handleSelectMetadata}>
              {JSON.parse(metatables).map((it: Metadata) => (<Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>))}
            </Select>
          )}
          <Button type="primary" onClick={() => handleSave()}>{ value.createdAt ? '确定保存' : '确定新增' }</Button>
          {props.value && (<Button type="primary" onClick={() => props.onCancel && props.onCancel()}>取消修改</Button>)}
        </EditHeader>
        <EditDescription>
          <p>请输入说明:</p>
          <Input.TextArea value={value.description} onChange={ev => setValue({ ...value, description: ev.target.value })} autoSize={{ minRows: 2, maxRows: 6 }} placeholder="请输入说明"/>
        </EditDescription>
      </EditContainer>
    )
  }

  const handleSave = (value: Metadata) => {
    const list = JSON.parse(metatables) as Metadata[]
    const index = list.findIndex(it => it.id === value.id)
    if (index !== -1) {
      list.splice(index, 1, value)
    } else {
      list.push(value)
    }
    setMetatables(JSON.stringify(list))
    setEditId(undefined)
  }

  return (
    <Container>
      <EditItem onOk={value => handleSave(value)}/>

      { (JSON.parse(metatables) as Metadata[]).map(it => it.id === editId
        ? (<EditItem key={it.id} value={it} onOk={value => handleSave(value)} onCancel={() => { setEditId(undefined) }}/>)
        : (
          <Items key={it.id}>
            <div>
              <div>{it.title}</div>
              <div/>
              <div>{it.updatedAt}</div>
              <div><Button type="primary" onClick={() => setEditId(it.id)}>信息编辑</Button></div>
            </div>
            <div>
              <div>{it.description}</div>
              <div/>
              <div><Button type="primary" onClick={() => navigate(`/metadata/${it.id}`)}>数据定义</Button></div>
            </div>
          </Items>
          )
      )}
    </Container>
  )
}

export default Index
