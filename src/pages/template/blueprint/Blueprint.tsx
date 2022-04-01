import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Tabs } from 'antd'
import { Layout } from '../../../definition/layout/types'
import { Content } from '../../../definition/content/types'
import LayoutContents from './LayoutContents'
import PageLayouts from './PageLayouts'
import { Metadata, Page } from '../../../definition/types'

const Container = styled.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`
const Items = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`
const Title = styled.span`
  display: inline-block;
  width: 80px;
`

const Notice = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  background-color: #ff7875;
  font-size: 32px;
  height: 88px;
`

function Blueprint(props: {
  active: Layout | Content<any, any> | undefined,
  onChangeActiveValue: (value: Layout | Content<any, any>) => void,
  onChangeActive: (layoutId: string, contentId?: string) => void
  value: Page,
  onChange: (value: Page) => void,
  metadata: Metadata,
  getData: (value: string | string[]) => any
}) {
  const [current, setCurrent] = useState<number>(0)

  const changeValue = (value: any) => {
    props.onChangeActiveValue({
      ...props.active!,
      value,
    })
  }

  const changeContents = (contents: Content<any, any>[]) => {
    props.onChangeActiveValue({
      ...props.active!,
      contents,
    })
  }

  const changeStyle = (key: string, value: any) => {
    const { styles } = props.active!
    const index = styles.findIndex((it) => it.definition.key === key)
    const style = styles[index]
    style.value = value
    styles.splice(index, 1, style)

    props.onChangeActiveValue({
      ...props.active!,
      styles,
    })
  }

  const renderContentOrLayout = () => {
    if ((props.active as Layout)?.contents) {
      const layout = props.active as Layout
      if (!layout.contents.length) {
        return (
          <Notice>请添加内容</Notice>
        )
      }
      return (
        <LayoutContents
          value={layout.contents}
          onChange={changeContents}
          onChangeActive={(id) => props.onChangeActive(layout.id, id)}
        />
      )
    }
    const content = props.active as Content<any, any>
    return (
      <content.definition.Blueprint
        value={content.value}
        onChange={changeValue}
        metadata={props.metadata}
        getData={props.getData}
      />
    )
  }

  const handleDelete = () => {
    if ((props.active as Layout)?.contents) {
      // 删除 layout
      const index = props.value.layouts.findIndex((it) => it.id === props.active!.id)
      props.value.layouts.splice(index, 1)
    } else {
      // 删除 content
      const content = props.active as Content<any, any>
      const contentIndex = content.layout.contents.findIndex((it) => it.id === content.id)
      content.layout.contents.splice(contentIndex, 1)

      // 修改 layout
      const layoutIndex = props.value.layouts.findIndex((it) => it.id === content.layout.id)
      if (content.layout.contents.length === 0) {
        // 无内容删除 layout
        props.value.layouts.splice(layoutIndex, 1)
      } else {
        props.value.layouts.splice(layoutIndex, 1, content.layout)
      }
    }
    props.onChange({ ...props.value })
  }

  return (
    <Container>
      <Tabs
        activeKey={String(current)}
        onChange={(v) => setCurrent(Number(v))}
        centered
        size="large"
        style={{ height: '100%' }}
      >
        <Tabs.TabPane tab={!props.active || (props.active as Layout).contents ? '元素' : '属性'} key="0">
          {current === 0 && !!props.active && (renderContentOrLayout())}
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="1">
          {current === 1 && !!props.active && [
            <Items key="button" style={{ justifyContent: 'center' }}><Button type="primary" danger onClick={handleDelete}>删除</Button></Items>,
            props.active.styles.map((it) => (
              <Items key={it.definition.key}>
                <Title>{it.definition.title}</Title>
                <it.definition.Blueprint
                  value={it.value}
                  onChange={(value) => changeStyle(it.definition.key, value)}
                />
              </Items>
            )),
          ]}
        </Tabs.TabPane>
        <Tabs.TabPane tab="页面元素" key="3">
          {current === 3 && (
          <PageLayouts
            value={props.value}
            onChange={props.onChange}
            onChangeActive={(layoutId) => {
              props.onChangeActive(layoutId)
              setCurrent(0)
            }}
          />
          )}
        </Tabs.TabPane>
      </Tabs>
    </Container>
  )
}

export default Blueprint
