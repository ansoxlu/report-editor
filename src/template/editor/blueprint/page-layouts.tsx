import React from 'react'
import styled from 'styled-components'
import { Droppable, DragDropContext, DropResult, Draggable } from 'react-beautiful-dnd'
import { Button, Popconfirm, Menu, Dropdown } from 'antd'
import { sortBy } from 'lodash'
import { Page } from '../../../definition/types'

const Header = styled.div`
  padding: 10px 15px;

`

const Elements = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  height: 100%;
`

const Items = styled.div<{isDragging: boolean}>`
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  margin: 15px;
  font-size: 18px;
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
  const PageSetting = (props: {index: number, value: Page, onChange: (value: Page) => void }) => {
    const handlePageable = () => {
      const indexes = props.value.pageIndexes
      if (!indexes.includes(props.index)) {
        indexes.push(props.index)
        props.onChange({ ...props.value, pageIndexes: sortBy(indexes) })
      }
    }

    return (
      <Menu>
        <Menu.Item disabled onClick={() => props.onChange({ ...props.value, header: props.index })}>页头</Menu.Item>
        <Menu.Item disabled onClick={() => props.onChange({ ...props.value, footer: props.index })}>页尾</Menu.Item>
        <Menu.Item disabled onClick={handlePageable}>分页</Menu.Item>
      </Menu>
    )
  }

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
    const layouts = props.value.layouts
    const index = layouts.findIndex(it => it.id === id)
    layouts.splice(index, 1)

    const pageIndex = props.value.pageIndexes.findIndex(it => it === index)
    if (pageIndex !== -1) {
      props.value.pageIndexes.splice(pageIndex, 1)
    }

    const listIndex = props.value.listIndexes.findIndex(it => it === index)
    if (listIndex !== -1) {
      props.value.pageIndexes.splice(listIndex, 1)
    }

    props.onChange({
      ...props.value,
      layouts: [...layouts],
      pageIndexes: [...props.value.pageIndexes],
      listIndexes: [...props.value.listIndexes]
    })
  }

  return (
    <div>
      <Header>
        <h3>分页说明</h3>
        <p>1.内容超出页面尺寸会自动分页;</p>
        <p>2.可以在指定元素后面分页，元素删除分页删除;</p>
        <h3>页头页尾说明</h3>
        <p>1.列表内容无法作为页头页尾;</p>
        <p>2.页头页尾设置后无法编辑，如需编辑请取消后再重新设置;</p>
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
                    <React.Fragment>
                      {index === props.value.footer && (<div>取消页尾</div>)}
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
                          <Dropdown
                            overlay={<PageSetting index={index} {...props}/>}
                            disabled={
                              // 已设置页头页尾
                              index <= props.value.header || (index >= props.value.footer && props.value.footer > 0) ||
                              // 已设置分页
                              props.value.pageIndexes.includes(index) ||
                              // 列表禁用分页或页头页尾
                              (props.value.listIndexes.length === 1 && props.value.listIndexes[0] === index) ||
                              (props.value.listIndexes.length > 1 && index > props.value.listIndexes[0]) ||
                              (props.value.listIndexes.length > 1 && index < props.value.listIndexes[props.value.listIndexes.length - 1])
                            }
                          >
                            <Button type="primary">设置</Button>
                          </Dropdown>
                          <Button type="primary" onClick={() => props.onChangeActive(it.id)}>编辑</Button>
                        </div>
                      </Items>
                      {index === props.value.header && (<div>取消页头</div>)}
                      {props.value.pageIndexes.includes(index) && (<div>取消分页</div>)}
                    </React.Fragment>
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