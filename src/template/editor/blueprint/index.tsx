import React, { useState } from 'react'
import styled from 'styled-components'
import { Layout } from '../../../definition/layout'
import { Content } from '../../../definition/content'
import { Tabs } from 'antd'
import LayoutContents from './layout-contents'
import PageLayouts from './page-layouts'
import { Page } from '../../../definition/types'

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

function Blueprint (props: {
  value: Layout | Content<any, any> | undefined,
  data: object,
  onChange: (value: Layout | Content<any, any>) => void,
  onChangeActive: (layoutId: string, contentId?: string) => void
  page: Page,
  onChangePage: (value: Page) => void
}) {
  const [current, setCurrent] = useState<number>(0)

  const changeValue = (value: any) => {
    props.onChange({
      ...props.value!,
      value: value
    })
  }

  const changeContents = (contents: Content<any, any>[]) => {
    props.onChange({
      ...props.value!,
      contents
    })
  }

  const changeStyle = (key: string, value: any) => {
    const styles = props.value!.styles
    const index = styles.findIndex(it => it.definition.key === key)
    const style = styles[index]
    style.value = value
    styles.splice(index, 1, style)

    props.onChange({
      ...props.value!,
      styles
    })
  }

  const renderContentOrLayout = () => {
    if ((props.value as Layout)?.contents) {
      const layout = props.value as Layout
      if (!layout.contents.length) {
        return (
          <Notice>请添加内容</Notice>
        )
      }
      return (
        <LayoutContents value={layout.contents} onChange={changeContents} onChangeActive={contentId => props.onChangeActive(layout.id, contentId) } />
      )
    }
    const content = props.value as Content<any, any>
    return (
      <content.definition.Blueprint value={content.value} onChange={changeValue} />
    )
  }

  return (
    <Container>
      <Tabs
        activeKey={String(current)}
        onChange={v => setCurrent(Number(v))}
        centered
        size="large"
        style={{ height: '100%' }}
      >
        <Tabs.TabPane tab={!props.value || (props.value as Layout).contents ? '元素' : '属性'} key="0">
          {current === 0 && !!props.value && (renderContentOrLayout())}
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="1">
          {current === 1 && !!props.value && (props.value.styles.map((it, index) => (
            <Items key={index} >
              <Title>{it.definition.title}</Title>
              <it.definition.Blueprint value={it.value} onChange={value => changeStyle(it.definition.key, value)}/>
            </Items>
          )))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="页面元素" key="3">
          {current === 3 && (<PageLayouts value={props.page} onChange={props.onChangePage} onChangeActive={layoutId => {
            props.onChangeActive(layoutId)
            setCurrent(0)
          }} />)}
        </Tabs.TabPane>
      </Tabs>
    </Container>
  )
}

export default Blueprint
