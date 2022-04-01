import React from 'react'
import {
  Button, InputNumber, message, Select, Tooltip,
} from 'antd'
import styled from 'styled-components'
import { SyncOutlined } from '@ant-design/icons'
import { Page } from '../../../definition/types'
import definition from '../../../definition/definition'

const Title = styled.div`
  font-size: 22px;
  text-align: center;
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
`

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
  const getSizeTile = (value: { width: number, height: number }) => {
    const sizes = definition.paperSizes
      .find((it) => (it.width === value.width && it.height === value.height)
        || (it.width === value.height && it.height === value.width))
    return sizes?.title ?? '自定义'
  }

  const [value, setValue] = React.useState(() => ({
    width: props.value.width,
    height: props.value.height,
    title: getSizeTile(props.value),
  }))

  const onDirectionChange = () => {
    if (!value.height) {
      message.error('方向切换失败,宽需要不能为0(无限)')
      return
    }
    setValue({
      title: value.title,
      width: value.height,
      height: value.width,
    })
    props.onChange({
      ...props.value,
      width: value.height,
      height: value.width,
    })
  }

  const onStyleChange = (key: string, value: any) => {
    const index = props.value.styles.findIndex((it) => it.definition.key === key)
    const style = props.value.styles[index]
    style.value = value
    props.value.styles.splice(index, 1, style)
    props.onChange({ ...props.value })
  }

  const onHeightChange = (height: number) => {
    setValue({ width: value.width, height, title: getSizeTile({ width: value.width, height }) })
  }

  const onWidthChange = (width: number) => {
    setValue({ width, height: value.height, title: getSizeTile({ width, height: value.height }) })
  }

  const onSizeChange = (key: string) => {
    const sizes = definition.paperSizes.find((it) => it.title === key)
    if (sizes) {
      setValue(sizes)
      props.onChange({
        ...props.value,
        width: sizes.width,
        height: sizes.height,
      })
    }
  }

  const onBlur = () => {
    if (!value.width) {
      message.error('修改失败,宽需要不能为0(无限)')
      setValue({
        width: props.value.width,
        height: props.value.height,
        title: getSizeTile(props.value),
      })
      return
    }
    props.onChange({
      ...props.value,
      width: props.value.width,
      height: props.value.height,
    })
  }

  return (
    <div>
      <Groups>
        <Subject>尺寸</Subject>
        <Select value={value.title} style={{ width: 112 }} onChange={onSizeChange}>
          <Select.Option value="">自定义</Select.Option>
          {definition.paperSizes.map((it) => (
            <Select.Option key={it.title} value={it.title}>
              {it.title}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={onDirectionChange}><SyncOutlined /></Button>
      </Groups>
      <Groups>
        <Subject>宽度</Subject>
        <InputNumber
          value={value.width}
          min={0}
          max={999}
          style={{ width: 165 }}
          addonAfter="毫米"
          onChange={onWidthChange}
          onBlur={() => onBlur()}
        />
      </Groups>
      <Groups>
        <Subject>高度</Subject>
        <InputNumber
          value={value.height}
          min={0}
          max={999}
          style={{ width: 165 }}
          addonAfter="毫米"
          onChange={onHeightChange}
          onBlur={() => onBlur()}
        />
      </Groups>
      <Tooltip placement="right" title="添加新内容时使用的默认值，不影响已添加内容">
        <Title>默认样式</Title>
      </Tooltip>
      {props.value.styles.map((it) => (
        <Groups key={it.definition.key}>
          <Subject>{it.definition.title}</Subject>
          <it.definition.Blueprint
            value={it.value}
            onChange={(value) => onStyleChange(it.definition.key, value)}
          />
        </Groups>
      ))}
    </div>
  )
}

export default PageStyle
