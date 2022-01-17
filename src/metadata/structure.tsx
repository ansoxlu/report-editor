import React, { useState } from 'react'
import { Button, Input, message, List, Result } from 'antd'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'

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

interface EditData {
  id?: string
  title?: string
  description?: string
}

const GET_METADATA_ALL = gql`
  query {
    findMetadataAll {
      id, title, description, updatedAt, examples {
        id, title, json
      }
    }
  }
`
interface GetMetadataAll {
  findMetadataAll: {
    id: string
    title: string
    description?:string
    updatedAt: string
    examples: {
      id: string
      title: string
      json: string
    }[]
  }[]
}

const Structure = () => {
  const { data, error, loading } = useQuery<GetMetadataAll>(GET_METADATA_ALL)
  const result = useQuery<GetMetadataAll>(GET_METADATA_ALL)
  console.log('result', result)
  if (error) {
    return (<Result status={500} title={'数据加载失败， 请刷新重试'} />)
  }

  const EditItem = (props: { value?: EditData, onConfirm: (value: EditData) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<EditData>(props.value || {})

    const handleSave = () => {
      props.onConfirm(value)
    }

    return (
      <EditContainer>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          <Button type="primary" onClick={() => handleSave()}>{ value.id ? '确定修改' : '确定新增' }</Button>
          {props.value && (<Button type="primary" onClick={() => handleSave()}>取消修改</Button>)}
        </EditHeader>
        <EditDescription>
          <p>请输入说明:</p>
          <Input.TextArea value={value.description} autoSize={{ minRows: 2, maxRows: 6 }} placeholder="请输入说明"/>
        </EditDescription>
      </EditContainer>
    )
  }

  const save = (value: EditData) => {
    if (!value.title) {
      return message.error('请输入标题')
    }
  }
  console.log(111, data)
  return (
    <Container>
      <EditItem onConfirm={value => save(value)}/>
      <List loading={loading} dataSource={data?.findMetadataAll ?? []} renderItem={it => (
        <List.Item.Meta title={it.title} description={it.description} />
      )} />
    </Container>
  )
}

export default Structure
