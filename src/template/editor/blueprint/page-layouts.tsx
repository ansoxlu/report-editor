import React from 'react'
import styled from 'styled-components'
import { Droppable, DragDropContext, DropResult, Draggable } from 'react-beautiful-dnd'
import { Button, Popconfirm, Select, Modal } from 'antd'
import { Page, PageMode } from '../../../definition/types'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const Header = styled.div`
  padding: 10px 15px;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #aaa;
    justify-content: space-between;
    padding-bottom: 10px;

    > div:last-child {
      width: 190px;
    }
  }
  > div:nth-child(2) {
    padding: 15px 0;
    line-height: 24px;
    border-bottom: 1px solid #aaa;
  }
`

const Elements = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  height: 100%;
`

const Items = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background: #f3f3f3;
  display: flex;

  > div:first-child {
    flex: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const PageLayouts = (props: { value: Page, onChange: (value: Page) => void, onChangeActive:(layoutId: string) => void }) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }
    const layouts = props.value.layouts
    // 删除后的位置调整
    const offset = destination.index > 0 && source.index > destination.index ? destination.index - 1 : 0
    const target = layouts[source.index]
    // 删除原有
    layouts.splice(source.index, 1)
    // 重新插入
    layouts.splice(destination.index - offset, 0, target)
    props.onChange({ ...props.value, layouts: [...layouts] })
  }

  const handleDelete = (id: string) => {
    const index = props.value.layouts.findIndex(it => it.id === id)
    props.value.layouts.splice(index, 1)
    props.onChange({ ...props.value, layouts: [...props.value.layouts] })
  }
  const handleModeChange = (mode: PageMode) => {
    if (!props.value.offsets.length) {
      props.onChange({ ...props.value, mode })
      return
    }
    Modal.confirm({
      title: '修改确认',
      icon: <ExclamationCircleOutlined />,
      content: '分页属性已经设置，切换需要重新设置，是否切换？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        props.onChange({ ...props.value, mode })
      }
    })
  }

  return (
    <div>
      <Header>
        <div>
          <div>分页设置</div>
          <div>
            <Select style={{ width: '100%' }} value={props.value.mode} onChange={handleModeChange}>
              <Select.Option value="autoFixed">自动+固定</Select.Option>
              <Select.Option value="headerFooter">页头页尾</Select.Option>
            </Select>
          </div>
        </div>
        {props.value.mode === 'autoFixed' && (
          <div>1.内容超出页面尺寸会自动分页;<br/>2.可以在指定元素后面分页，元素删除分页删除;</div>
        )}
        {props.value.mode === 'headerFooter' && (
          <div>1.列表内容无法作为页头页尾;<br/>2.指定页头页尾后无法编辑，如需编辑请移除再重新设置;</div>
        )}
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="page-layouts">
          {(provided, snapshot) => (
            <Elements
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDraggingOver}
            >
              {props.value.layouts.map((it, index) => (
                <Draggable key={it.id} draggableId={it.id} index={index}>
                  {(provided, snapshot) => (
                    <Items
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={provided.draggableProps.style}
                      isDragging={snapshot.isDragging}
                    >
                      <div {...provided.dragHandleProps}>
                        {index + 1}
                      </div>
                      <div>
                        <Popconfirm
                          placement="topRight"
                          title="是否确定删除？"
                          okText="是"
                          cancelText="否"
                          onConfirm={() => handleDelete(it.id)}
                        >
                          <Button type="primary" danger>删除</Button>
                        </Popconfirm>
                        <Button type="primary" onClick={() => props.onChangeActive(it.id)}>编辑</Button>
                      </div>
                    </Items>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Elements>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default PageLayouts
