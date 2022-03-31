import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Button, Popconfirm } from 'antd'
import { useNavigate } from 'react-router-dom'
import { DroppableIds } from '../types'
import definition from '../../../definition/definition'
import { Page, Template } from '../../../definition/types'
import PageStyle from './PageStyle'

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

const Item = styled.li<{ isDragging?: boolean }>`
  display: flex;
  height: 30px;
  width: 170px;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border: 1px ${(props) => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  user-select: none;
  margin-bottom: 8px;

`

const Clone = styled(Item)`
  + div {
    display: none !important;
  }
`

function Material(props: {
  value: Page
  onChange: (value: Page) => void
  updated: boolean,
  template: Template
  onSave: () => void
  onCancel: () => void
}) {
  const navigate = useNavigate()

  const onSaveAndHome = () => {
    props.onSave()
    navigate('/')
  }

  return (
    <Droppable droppableId={DroppableIds.Material} isDropDisabled>
      {(provided) => (
        <Container ref={provided.innerRef}>
          <Groups>
            <Title>{props.template.title}</Title>
            <div style={{ flex: 'auto' }} />
            {props.updated && (
              <Popconfirm
                placement="topRight"
                title="是否保存后返回？"
                okText="是"
                cancelText="否"
                onConfirm={() => onSaveAndHome}
                onCancel={() => navigate('/')}
              >
                <Button type="primary">返回首页</Button>
              </Popconfirm>
            )}
            {!props.updated && (
              <Button type="primary" onClick={() => navigate('/')}>返回首页</Button>)}
          </Groups>
          {props.updated && (
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
              <div style={{ flex: 'auto' }} />
              <Popconfirm
                placement="topRight"
                title="是否确定保存？"
                okText="是"
                cancelText="否"
                onConfirm={() => props.onSave()}
              >
                <Button type="primary">确定保存</Button>
              </Popconfirm>
            </Groups>
          )}
          <Groups>
            <Subject>内容</Subject>
            <Items>
              {definition.contents.map((it, index) => (
                <Draggable
                  key={it.key}
                  draggableId={it.key}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <>
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
                    </>
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
