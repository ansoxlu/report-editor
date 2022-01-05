import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Page, DroppableIds, PaperSizes } from '../constants'
import { Content, ContentAll } from '../content'
import { Layout, LayoutAll } from '../layout'
import { Select, Switch } from 'antd'

const Container = styled.aside`
  width: 250px;
  color: #333;
  padding-top: 12px;
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
`

const Title = styled.div`
  padding: 0 12px;
  display: flex;
  height: 40px;
  align-items: center;
  font-size: 14px;
  width: 60px;
`

const Items = styled.ul`
  padding: 10px 12px;
  font-size: 12px;
  flex-wrap: wrap;
  display: flex;
`

const Item = styled.li<{isDragging?: boolean}>`
  display: flex;
  height: 30px;
  width: 48%;
  margin: 1%;
  align-items: center;
  background: #f3f3f3;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  user-select: none;

  > svg {
    margin: 0 5px;
  }
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
  const [size, setSize] = useState<string | undefined>()

  const changeSize = (value: string) => {
    setSize(value)
    const sizes = PaperSizes.find(it => it.title === value)
    if (sizes) {
      props.onChangePage({
        ...props.page,
        width: props.page.landscape ? sizes.height : sizes.width,
        height: props.page.landscape ? sizes.width : sizes.height
      })
    }
  }
  useEffect(() => {
    if (!size) {
      changeSize('A4')
    }
  })

  const changePageSwitch = (v: boolean) => {
    props.onChangePage({
      ...props.page,
      width: props.page.height,
      height: props.page.width,
      landscape: v
    })
  }

  const ItemsBox = (props: { offset: number, list: Layout<any>[] | Content<any, any>[]}) => {
    return (
      <Items>
        {props.list.map((it, index) => (
          <Draggable
            key={it.key}
            draggableId={it.key}
            index={props.offset + index}>
            {(provided, snapshot) => (
              <React.Fragment>
                <Item
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                  style={snapshot.isDragging ? provided.draggableProps.style : {}}
                >
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-bar-code"/>
                  </svg>
                  {it.title}
                </Item>
                {snapshot.isDragging && (
                  <Clone>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-bar-code"/>
                    </svg>
                    {it.title}
                  </Clone>
                )}
              </React.Fragment>
            )}
          </Draggable>
        ))}
      </Items>
    )
  }
  return (
    <Droppable droppableId={DroppableIds.Material} isDropDisabled={true} >
      {(provided) => (
        <Container ref={provided.innerRef}>
          <TitleBox>
            <Title>尺寸</Title>
            <Select
              value={size}
              onChange={v => changeSize(v)}
              style={{ width: 135 }}
            >
              {PaperSizes.map((it, index) => (<Select.Option key={index} value={it.title}>{it.title}</Select.Option>))}
            </Select>
          </TitleBox>
          <TitleBox>
            <Title>方向</Title>
            <Switch
              checked={props.page.landscape}
              onChange={changePageSwitch}
              checkedChildren="横" unCheckedChildren="竖"
            />
          </TitleBox>
          <Title>布局</Title>
          <ItemsBox list={LayoutAll} offset={0} />
          <Title>内容</Title>
          <ItemsBox list={ContentAll} offset={LayoutAll.length} />
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}

export default Material
