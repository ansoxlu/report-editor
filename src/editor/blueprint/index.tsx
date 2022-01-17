import React, { useState } from 'react'
import styled from 'styled-components'
import { Layout } from '../../definition/layout'
import { Content } from '../../definition/content'
import { Tabs } from 'antd'

const Container = styled.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`
const Items = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
`
const Title = styled.span`
  display: inline-block;
  width: 80px;
`

function Blueprint (props: {
  value: Layout | Content<any, any> | undefined,
  data: object,
  onChange: (value: Layout | Content<any, any>) => void
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
      return (
        <layout.definition.Blueprint contents={(props.value as Layout).contents} onChangeContents={changeContents} />
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
      >
        <Tabs.TabPane tab="属性" key="0">
          {!!props.value && (renderContentOrLayout())}
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="1">
          {!!props.value && (props.value.styles.map((it, index) => (
            <Items key={index} >
              <Title>{it.definition.title}</Title>
              <it.definition.Blueprint value={it.value} onChange={value => changeStyle(it.definition.key, value)}/>
            </Items>
          )))}
        </Tabs.TabPane>
      </Tabs>
    </Container>
  )
}

export default Blueprint
