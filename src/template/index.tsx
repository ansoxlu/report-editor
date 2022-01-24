import React, { useState } from 'react'
import { Button, Input, message, Select, Result } from 'antd'
import styled from 'styled-components'
import { Metadata, Template } from '../types'
import moment from 'moment'
import { v4 as uuid4 } from 'uuid'
import { DATE_TIME_FORMAT } from '../plugins/moment'
import { METATABLES, TEMPLATES } from '../plugins/database'
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
  const [metatables] = useLocalStorage('RE-metatables', JSON.stringify(METATABLES))
  const [templates] = useLocalStorage('RE-templates', JSON.stringify(TEMPLATES))

  const [editId, setEditId] = useState<string | undefined>()

  const EditItem = (props: { value?: undefined | Template, onOk: (value: Template) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<Template>(props.value || {
      id: uuid4(),
      title: '',
      description: '',
      createdAt: '',
      json: '{}',
      metadataId: '',
      updatedAt: ''
    })

    const handleSave = () => {
      if (!value.title) {
        return message.error('请输入标题')
      }
      if (!value.metadataId) {
        return message.error('请选择数据来源')
      }
      const now = moment().format(DATE_TIME_FORMAT)
      props.onOk({
        ...value,
        createdAt: value.createdAt || now,
        updatedAt: now
      })
    }

    const handleSelectMetadata = (id: string) => {
      setValue({
        ...value,
        metadataId: id
      })
    }

    const handleSelectTemplate = (id: string) => {
      const template = JSON.parse(templates).find((it: Template) => it.id === id)
      setValue({
        ...value,
        json: template?.json ?? '{}',
        metadataId: template?.metadataId ?? (value.metadataId || '')
      })
    }

    return (
      <EditContainer>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} placeholder="请输入标题" onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          {!props.value && metatables.length && (
            <Select placeholder="请选择数据来源" style={{ width: 170 }} value={value.metadataId || undefined} onChange={handleSelectMetadata}>
              {JSON.parse(metatables).map((it: Metadata) => (<Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>))}
            </Select>
          )}
          {!props.value && metatables.length && (
            <Select placeholder="复制已有模板" style={{ width: 170 }} allowClear onChange={handleSelectTemplate}>
              {JSON.parse(templates).map((it: Template) => (<Select.Option key={it.id} value={it.id}>{it.title}</Select.Option>))}
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

  const handleSave = (value: Template) => {
    const list = JSON.parse(metatables) as Template[]
    const index = list.findIndex(it => it.id === value.id)
    if (index !== -1) {
      list.splice(index, 1, value)
    } else {
      list.push(value)
    }
    setEditId(undefined)
  }

  return (
    <Container>
      {!metatables.length && (
        <Result
          status="warning"
          title="请先创建一份数据源,再进行模板编辑!"
          extra={
            <Button type="primary" onClick={() => navigate('/metadata')}>
              数据编辑
            </Button>
          }
        />
      )}
      {metatables.length && (<EditItem onOk={value => handleSave(value)}/>)}

      { metatables.length && JSON.parse(templates).map((it: Template) => it.id === editId
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
          <div><Button type="primary" onClick={() => navigate(`/template/${it.id}`)}>模板定义</Button></div>
          </div>
          </Items>
          )
      )}
    </Container>
  )
}

export default Index
