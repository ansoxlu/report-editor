import React, { useState } from 'react'
import BookView from '../components/book-view'
import { Button, Input, message } from 'antd'

interface EditData {
  id?: string
  title?: string
  description?: string
}

const Metadata = () => {
  const EditContent = (props: { value?: EditData, onConfirm: (value: EditData) => void, onCancel?: () => void }) => {
    const [value, setValue] = useState<EditData>(props.value || {})

    const handleSave = () => {
      props.onConfirm(value)
    }

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <p>*请输入标题：</p>
          <Input value={value.title} onChange={ev => setValue({ ...value, title: ev.target.value })}/>
          <Button type="primary" onClick={() => handleSave()}>确认保存</Button>
          {props.value && (<Button type="primary" onClick={() => handleSave()}>取消修改</Button>)}
        </div>
        <div>
          <p>请输入标题：</p>
          <Input.TextArea value={value.description} autoSize={{ minRows: 2, maxRows: 6 }}/>
        </div>
      </div>
    )
  }

  const save = (value: EditData) => {
    if (!value.title) {
      return message.error('请输入标题')
    }
  }

  return (
    <BookView>
      <EditContent onConfirm={value => save(value)}/>
    </BookView>
  )
}

export default Metadata
