import React, { useState } from 'react'
import { Button, Input, message, Select } from 'antd'
import styled from 'styled-components'
import { Metadata } from '../types'
import moment from 'moment'
import { v4 as uuid4 } from 'uuid'
import { DATE_TIME_FORMAT } from '../plugins/moment'
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

    > div:nth-child(3) {
      width: 170px;
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
    padding: 0 11px 0 10px;
  }
  > textarea {
    width: auto;
    flex: 1;
  }
`

const Index = () => {
  const navigate = useNavigate()
  const [metatables, setMetatables] = useLocalStorage('metatables', JSON.stringify(METATABLES))

  const [editId, setEditId] = useState<string | undefined>()

  const EditItem = (props: { value?: undefined | Metadata, onOk: (value: Metadata) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<Metadata>(props.value || {
      id: uuid4(),
      title: '',
      description: '',
      createdAt: '',
      examples: [],
      items: [],
      updatedAt: ''
    })

    const handleSave = () => {
      if (!value.title) {
        return message.error('请输入标题')
      }
      const now = moment().format(DATE_TIME_FORMAT)
      props.onOk({
        ...value,
        createdAt: value.createdAt || now,
        updatedAt: now
      })
    }

    return (
      <EditContainer>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} placeholder="请输入标题" onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          <Button type="primary" onClick={() => handleSave()}>{ value.createdAt ? '确定保存' : '确定新增' }</Button>
          {props.value && (<Button type="primary" onClick={() => props.onCancel && props.onCancel()}>取消修改</Button>)}
        </EditHeader>
        <EditDescription>
          <p>请输入说明:</p>
          <Input.TextArea value={value.description} autoSize={{ minRows: 2, maxRows: 6 }} placeholder="请输入说明"/>
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
              <div><Button type="primary" onClick={() => setEditId(it.id)}>信息修改</Button></div>
            </div>
            <div>
              <div>{it.description}</div>
              <div/>
              <div>
                <Select style={{ width: '100%' }} onChange={value => navigate(`/metadata/${it.id}?exampleId=${value}`)}>
                  {it.examples.map(eit => (
                    <Select.Option key={eit.id} value={eit.id} >{eit.title}</Select.Option>
                  ))}
                </Select>
              </div>
              <div><Button type="primary" onClick={() => navigate(`/metadata/${it.id}`)}>格式编辑</Button></div>
            </div>
          </Items>
          )
      )}
    </Container>
  )
}

export default Index
