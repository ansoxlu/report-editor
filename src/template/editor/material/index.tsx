import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { DroppableIds } from '../types'
import { CONTENT_DEFINITIONS, PAPER_SIZES } from '../../../definition'
import { Select, Button, message, InputNumber, Popconfirm } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import JustifyContent from '../../../definition/styles/justify-content'
import { Page, Template } from '../../../definition/types'
import { useNavigate } from 'react-router-dom'

const Container = styled.aside`
  width: 250px;
  color: #333;
  padding-top: 12px;
`

const Groups = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`

const Title = styled.div`
`

const Subject = styled.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`

const Items = styled.ul`
  padding: 10px 12px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Item = styled.li<{isDragging?: boolean}>`
  display: flex;
  height: 30px;
  width: 170px;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  user-select: none;
  margin-bottom: 8px;

`

const Clone = styled(Item)`
  + div {
      display: none !important;
  }
`

function Material (props: {
  value: Page
  onChange: (value: Page) => void
  updating: boolean,
  template: Template
  onSave: (back: boolean) => void
  onCancel: () => void
}) {
  const navigate = useNavigate()

  const PageStyle = (props: { value: Page, onChange: (value: Page) => void }) => {
    const [value, setValue] = useState<{width: number, height: number, title: string}>({ width: props.value.width, height: props.value.height, title: '' })

    // upset value.title
    useEffect(() => {
      const sizes = PAPER_SIZES.find(it => (it.width === value.width && it.height === value.height) || (it.width === value.height && it.height === value.width))
      setValue({
        ...value,
        title: sizes?.title ?? '自定义'
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
        height: value.width
      })
    }

    const changeStyle = (key: string, value: any) => {
      const index = props.value.styles.findIndex(it => it.definition.key === key)
      const style = props.value.styles[index]
      style.value = value
      props.value.styles.splice(index, 1, style)
      props.onChange({ ...props.value })
    }

    const changeHeight = (height: number) => {
      setValue({ ...value, height })
      props.onChange({ ...props.value, height: height })
    }

    const changeWidth = (width: number) => {
      setValue({ ...value, width })
      if (!width) {
        message.error('宽需要不能为0(无限)')
        return
      }
      props.onChange({ ...props.value, width: width })
    }

    const handleSizeChange = (key: string) => {
      const sizes = PAPER_SIZES.find(it => it.title === key)
      if (sizes) {
        props.onChange({
          ...props.value,
          width: sizes.width,
          height: sizes.height
        })
      }
    }

    return (
      <div>
        <Groups>
          <Subject>尺寸</Subject>
          <Select value={value.title} style={{ width: 112 }} onChange={handleSizeChange}>
            <Select.Option value={''}>自定义</Select.Option>
            {PAPER_SIZES.map((it, index) => (<Select.Option key={index} value={it.title}>{it.title}</Select.Option>))}
          </Select>
          <Button type="primary" onClick={handleChangeDirection}><SyncOutlined/></Button>
        </Groups>
        <Groups>
          <Subject>宽度</Subject>
          <InputNumber value={value.width} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeWidth} onBlur={() => changeWidth(value.width || props.value.width)}/>
        </Groups>
        <Groups>
          <Subject>高度</Subject>
          <InputNumber value={value.height} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeHeight} />
        </Groups>
        {props.value.styles.map((it, index) => (
          <Groups key={index}>
            <Subject>{it.definition.key === JustifyContent.key ? '竖向排列' : it.definition.title}</Subject>
            <it.definition.Blueprint value={it.value} onChange={value => changeStyle(it.definition.key, value)}/>
          </Groups>
        ))}
      </div>
    )
  }

  return (
    <Droppable droppableId={DroppableIds.Material} isDropDisabled={true} >
      {(provided) => (
        <Container ref={provided.innerRef}>
          <Groups>
            <Title>{props.template.title}</Title>
            <div style={{ flex: 'auto' }}/>
            {props.updating && (
              <Popconfirm
                placement="topRight"
                title="是否保存后返回？"
                okText="是"
                cancelText="否"
                onConfirm={() => props.onSave(true)}
                onCancel={() => navigate('/template')}
              >
                <Button type="primary">返回</Button>
              </Popconfirm>
            )}
            {!props.updating && (<Button type="primary" onClick={() => navigate('/template')}>返回</Button>)}
          </Groups>
          { props.updating && (
            <Groups>
              <Popconfirm
                placement="topRight"
                title="是否确定放弃修改？"
                okText="是"
                cancelText="否"
                onConfirm={props.onCancel}
              >
                <Button type="primary" danger>放弃修改</Button>
              </Popconfirm>
              <div style={{ flex: 'auto' }}/>
              <Popconfirm
                placement="topRight"
                title="是否确定保存？"
                okText="是"
                cancelText="否"
                onConfirm={() => props.onSave(false)}
              >
                <Button type="primary" >确定保存</Button>
              </Popconfirm>
            </Groups>
          )}
          <Groups>
            <Subject>内容</Subject>
            <Items>
              {CONTENT_DEFINITIONS.map((it, index) => (
                <Draggable
                  key={it.key}
                  draggableId={it.key}
                  index={index}>
                  {(provided, snapshot) => (
                    <React.Fragment>
                      <Item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        style={snapshot.isDragging ? provided.draggableProps.style : {}}
                      >
                        {it.title}
                      </Item>
                      {snapshot.isDragging && (
                        <Clone>
                          {it.title}
                        </Clone>
                      )}
                    </React.Fragment>
                  )}
                </Draggable>
              ))}
            </Items>
          </Groups>
          <PageStyle
            value={props.value}
            onChange={props.onChange}
          />
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}

export default Material
