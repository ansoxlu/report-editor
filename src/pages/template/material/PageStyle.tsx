import React from 'react'
import {
  Button, InputNumber, message, Select,
} from 'antd'
import styled from 'styled-components'
import { SyncOutlined } from '@ant-design/icons'
import { Page } from '../../../definition/types'
import definition from '../../../definition/definition'
import JustifyContent from '../../../definition/style/JustifyContent'

const Groups = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`
const Subject = styled.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`

function PageStyle(props: { value: Page, onChange: (value: Page) => void }) {
  const [value, setValue] = React.useState<{width: number, height: number, title: string}>({ width: props.value.width, height: props.value.height, title: '' })

  // upset value.title
  React.useEffect(() => {
    const sizes = definition.paperSizes
      .find((it) => (it.width === value.width && it.height === value.height)
        || (it.width === value.height && it.height === value.width))
    setValue({
      ...value,
      title: sizes?.title ?? '自定义',
    })
  }, [props.value.width, props.value.height, value.width, value.height])

  const handleChangeDirection = () => {
    if (!value.height) {
      message.error('方向切换失败,宽需要不能为0(无限)')
      return
    }
    props.onChange({
      ...props.value,
      width: value.height,
      height: value.width,
    })
  }

  const changeStyle = (key: string, value: any) => {
    const index = props.value.styles.findIndex((it) => it.definition.key === key)
    const style = props.value.styles[index]
    style.value = value
    props.value.styles.splice(index, 1, style)
    props.onChange({ ...props.value })
  }

  const changeHeight = (height: number) => {
    setValue({ ...value, height })
    props.onChange({ ...props.value, height })
  }

  const changeWidth = (width: number) => {
    setValue({ ...value, width })
    if (!width) {
      message.error('宽需要不能为0(无限)')
      return
    }
    props.onChange({ ...props.value, width })
  }

  const handleSizeChange = (key: string) => {
    const sizes = definition.paperSizes.find((it) => it.title === key)
    if (sizes) {
      props.onChange({
        ...props.value,
        width: sizes.width,
        height: sizes.height,
      })
    }
  }

  return (
    <div>
      <Groups>
        <Subject>尺寸</Subject>
        <Select value={value.title} style={{ width: 112 }} onChange={handleSizeChange}>
          <Select.Option value="">自定义</Select.Option>
          {definition.paperSizes.map((it, index) => (
            <Select.Option key={index} value={it.title}>
              {it.title}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={handleChangeDirection}><SyncOutlined /></Button>
      </Groups>
      <Groups>
        <Subject>宽度</Subject>
        <InputNumber value={value.width} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeWidth} onBlur={() => changeWidth(value.width || props.value.width)} />
      </Groups>
      <Groups>
        <Subject>高度</Subject>
        <InputNumber value={value.height} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeHeight} />
      </Groups>
      {props.value.styles.map((it, index) => (
        <Groups key={index}>
          <Subject>{it.definition.key === JustifyContent.key ? '竖向排列' : it.definition.title}</Subject>
          <it.definition.Blueprint
            value={it.value}
            onChange={(value) => changeStyle(it.definition.key, value)}
          />
        </Groups>
      ))}
    </div>
  )
}

export default PageStyle
