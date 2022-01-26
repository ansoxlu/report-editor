import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { DroppableIds } from '../types'
import { Page, PAPER_SIZES } from '../../../definition/types'
import { CONTENT_DEFINITIONS } from '../../../definition/content/types'
import { Select, Button, message, InputNumber } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import { Style } from '../../../definition/styles/types'
import JustifyContent from '../../../definition/styles/justify-content'

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
  onChangePage: (page: Page) => void
  page: Page
}) {
  const PageStyle = (props: { width: number, height: number, styles: Style<any>[], onChange:(width: number, height: number, styles: Style<any>[]) => void }) => {
    const [value, setValue] = useState<{width: number, height: number, size: string}>({ width: props?.width ?? 0, height: props?.height ?? 0, size: '' })

    useEffect(() => {
      if (!props.width && !props.height) {
        const sizes = PAPER_SIZES.find(it => it.title === 'A4')!
        props.onChange(sizes.width, sizes.height, props.styles)
      }
    })

    useEffect(() => {
      const sizes = PAPER_SIZES.find(it => (it.width === value.width && it.height === value.height) || (it.width === value.height && it.height === value.width))
      setValue({
        ...value,
        size: sizes?.title ?? '自定义'
      })
    }, [props.width, props.height, value.width, value.height])

    const handleChangeDirection = () => {
      if (!value.height) {
        message.error('方向切换失败,宽需要不能为0(无限)')
        return
      }
      props.onChange(value.height, value.width, props.styles)
    }

    const changeStyle = (key: string, value: any) => {
      const index = props.styles.findIndex(it => it.definition.key === key)
      const style = props.styles[index]
      style.value = value
      props.styles.splice(index, 1, style)
      props.onChange(props.width, props.height, [...props.styles])
    }

    const changeHeight = (height: number) => {
      setValue({ ...value, height })
      props.onChange(props.width, height, props.styles)
    }

    const changeWidth = (width: number) => {
      setValue({ ...value, width })
      if (!width) {
        message.error('宽需要不能为0(无限)')
        return
      }
      props.onChange(width, props.height, props.styles)
    }

    const handleSizeChange = (key: string) => {
      const sizes = PAPER_SIZES.find(it => it.title === key)
      if (sizes) {
        props.onChange(sizes.width, sizes.height, props.styles)
      }
    }

    return (
      <div>
        <Groups>
          <Title>尺寸</Title>
          <Select value={value.size} style={{ width: 112 }} onChange={handleSizeChange}>
            <Select.Option value={''}>自定义</Select.Option>
            {PAPER_SIZES.map((it, index) => (<Select.Option key={index} value={it.title}>{it.title}</Select.Option>))}
          </Select>
          <Button type="primary" onClick={handleChangeDirection}><SyncOutlined/></Button>
        </Groups>
        <Groups>
          <Title>宽度</Title>
          <InputNumber value={value.width} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeWidth} onBlur={() => changeWidth(props.width)}/>
        </Groups>
        <Groups>
          <Title>高度</Title>
          <InputNumber value={value.height} min={0} max={999} style={{ width: 165 }} addonAfter="毫米" onChange={changeHeight} />
        </Groups>
        {props.styles.map((it, index) => (
          <Groups key={index}>
            <Title>{it.definition.key === JustifyContent.key ? '竖向排列' : it.definition.title}</Title>
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
            <Title>内容</Title>
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
            width={props.page.width}
            height={props.page.height}
            styles={props.page.styles}
            onChange={((width, height, styles) => props.onChangePage({ ...props.page, width, height, styles }))}
          />
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}

export default Material
