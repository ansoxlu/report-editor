import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
`

const EditHeader = styled.div`
  display: flex;
  align-items: center;

  > input {
    width: auto;
    flex: auto;
  }
  > button {
    margin-left: 15px;
  }
`

interface EditData {
  id?: string
  title?: string
  description?: string
}

const Structure = () => {
  const EditContent = (props: { value?: EditData, onConfirm: (value: EditData) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<EditData>(props.value || {})

    const handleSave = () => {
      props.onConfirm(value)
    }

    return (
      <Container>
        <EditHeader>
          <div>* 请输入标题：</div>
          <Input value={value.title} onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          <Button type="primary" onClick={() => handleSave()}>确认保存</Button>
          {props.value && (<Button type="primary" onClick={() => handleSave()}>取消修改</Button>)}
        </EditHeader>
        <div>
          <Input.TextArea value={value.description} autoSize={{ minRows: 2, maxRows: 6 }} placeholder="请输入说明"/>
        </div>
      </Container>
    )
  }

  const save = (value: EditData) => {
    if (!value.title) {
      return message.error('请输入标题')
    }
  }

  return (
    <div>
      <EditContent onConfirm={value => save(value)}/>
    </div>
  )
}

export default Structure
