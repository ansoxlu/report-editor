import { Button, Input, message } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { v4 as uuid4 } from 'uuid'
import { date } from '../../../plugins/moment'

const Container = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #ebe0e0;
`

const Title = styled.div`
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

const Description = styled.div`
  display: flex;

  > p {
    padding-left: 10px;
    width: 94px;
  }

  > textarea {
    flex: 1;
  }
`

export interface EditValue {
  id: string
  title: string
  description?: string
  createdAt: string
  updatedAt: string
}

type Props = {
  value?: EditValue
  children?: React.ReactNode
  onOk: (value: EditValue) => void
  onCancel?: () => void
}

function EditItem<T extends EditValue>(props: Props) {
  const [value, setValue] = React.useState(
    () => props.value ?? {
      id: uuid4(), title: '', description: '', createdAt: '', updatedAt: '',
    },
  )

  React.useEffect(() => {
    if (props.value) {
      setValue(Object.assign(value, props.value))
    }
  }, [props.value])

  const onSave = () => {
    if (!value.title) {
      message.error('请输入标题')
      return
    }

    const now = date()
    props.onOk({
      ...value,
      createdAt: value.createdAt || now,
      updatedAt: now,
    })
  }

  return (
    <Container>
      <Title>
        <div>* 请输入标题：</div>
        <Input value={value.title} placeholder="请输入标题" onChange={(ev) => setValue({ ...value, title: ev.target.value })} />
        {props.children}
        <Button type="primary" onClick={() => onSave()}>{ props.value ? '确定保存' : '确定新增' }</Button>
        {props.value && (<Button type="primary" onClick={() => props.onCancel && props.onCancel()}>取消修改</Button>)}
      </Title>
      <Description>
        <p>请输入说明:</p>
        <Input.TextArea
          value={value.description}
          onChange={(ev) => setValue({ ...value, description: ev.target.value })}
          autoSize={{ minRows: 2, maxRows: 6 }}
          placeholder="请输入说明"
        />
      </Description>
    </Container>
  )
}

export default EditItem
