import React from 'react'
import styled from 'styled-components'
import { Menu } from './types'
import HomeMetadata from './HomeMetadata'
import HomeTemplate from './HomeTemplate'
import HomePreview from './HomePreview'

const Container = styled.div`
  width: var(--content-w);
  display: flex;
  padding: 30px 0;
`

const Aside = styled.aside`
  width: 300px;
  margin-right: 30px;
  border-radius: 6px;
`

const Article = styled.article`
  width: 900px;
  border: 1px solid #ebe0e0;
  border-radius: 6px;
`

const Item = styled.div<{ index: number, isActive: boolean }>`
  font-size: 23px;
  color: chocolate;
  border-bottom: 1px solid #ebe0e0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${(props) => (props.index + 2) * 18}px;
  background-color: ${(props) => (props.isActive ? 'peachpuff' : '#f3f3f3')};
  cursor: pointer;
`
const Description = styled.div`
  display: flex;
  height: 54px;
  background-color: peachpuff;
  color: chocolate;
  font-size: 20px;
  align-items: center;
  padding-left: 30px;
`

const MENUS: Menu[] = [
  {
    key: 'Metadata',
    title: '数据模板',
    description: '打印模板需要注入动态数据,在此之前你需要编辑数据格式,用于验证渲染时的格式和注入',
    Element: HomeMetadata,
  },
  {
    key: 'Template',
    title: '打印模板',
    description: '完成数据格式编辑后,开始编辑模板, 编辑视图和效果视图有所区别,“打印预览”查看最终效果',
    Element: HomeTemplate,
  },
  {
    description: '',
    key: 'Preview',
    title: '打印预览',
    Element: HomePreview,
  },
]

export default function Home() {
  const [activeKey, setActiveKey] = React.useState(MENUS[0].key)

  const active = React.useMemo(() => MENUS.find((it) => it.key === activeKey)!, [activeKey])

  return (
    <Container>
      <Aside>
        {MENUS.map((it, index) => (
          <Item
            key={it.title}
            index={index}
            isActive={activeKey === it.key}
            onClick={() => setActiveKey(it.key)}
          >
            {it.title}
          </Item>
        ))}
      </Aside>
      <Article>
        <Description>
          {active.description}
        </Description>
        <active.Element />
      </Article>
    </Container>
  )
}
