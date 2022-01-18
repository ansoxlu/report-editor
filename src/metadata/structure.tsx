import React, { useState } from 'react'
import { Button, Input, message, List } from 'antd'
import styled from 'styled-components'
import useLocalStorage from 'react-use-localstorage'
import { METATABLES } from '../plugins/database'
import { Metadata } from '../types'
import moment from 'moment'
import { v4 as uuid4 } from 'uuid'
import { DATE_TIME_FORMAT } from '../types/moment'

const Container = styled.div`
  padding: 15px;
`

const EditContainer = styled.div`
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

const Structure = () => {
  const [metatables, setMetatables] = useLocalStorage('metatables', JSON.stringify(METATABLES))

  const EditItem = (props: { value?: undefined | Metadata, onOk: (value: Metadata) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<Metadata>(props.value || {
      id: uuid4(),
      title: '',
      description: '',
      createdAt: moment().from(DATE_TIME_FORMAT),
      examples: [],
      items: [],
      updatedAt: ''
    })

    const handleSave = () => {
      if (!value.title) {
        return message.error('请输入标题')
      }
      props.onOk({
        ...value,
        updatedAt: moment().from(DATE_TIME_FORMAT)
      })
    }

    return (
      <EditContainer>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} placeholder="请输入标题" onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          <Button type="primary" onClick={() => handleSave()}>{ value.id ? '确定修改' : '确定新增' }</Button>
          {props.value && (<Button type="primary" onClick={() => props.onCancel && props.onCancel()}>取消修改</Button>)}
        </EditHeader>
        <EditDescription>
          <p>请输入说明:</p>
          <Input.TextArea value={value.description} autoSize={{ minRows: 2, maxRows: 6 }} placeholder="请输入说明"/>
        </EditDescription>
      </EditContainer>
    )
  }

  const save = (value: Metadata) => {
    const list = JSON.parse(metatables) as Metadata[]
    const index = list.findIndex(it => it.id === value.id)
    if (index !== -1) {
      list.splice(index, 1, value)
    } else {
      list.push(value)
    }
    setMetatables(JSON.stringify(list))
  }

  return (
    <Container>
      <EditItem onOk={value => save(value)}/>
      <List dataSource={JSON.parse(metatables) as Metadata[]} renderItem={it => (
        <List.Item.Meta title={it.title} description={it.description} />
      )} />
    </Container>
  )
}

export default Structure
