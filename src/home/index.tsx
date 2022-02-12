import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  width: 1230px;
  margin: 0 auto;
  display: flex;
  min-height: 90%;
  padding-top: 30px;
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

const Menu = styled.div<{index: number, isActive: boolean}>`
  font-size: 23px;
  color: chocolate;
  border-bottom: 1px solid #ebe0e0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => (props.index + 2) * 18}px;
  background-color: ${props => props.isActive ? 'peachpuff' : '#f3f3f3'};
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

const MENUS = [
  {
    title: '1. 数据编辑',
    url: '/metadata',
    description: '报告模板需要注入动态数据,在此之前你需要编辑数据格式示例,用于验证渲染时的格式和注入'
  },
  {
    title: '2. 模板编辑',
    url: '/template',
    description: '完成数据格式编辑后,开始编辑模板, 编辑视图和效果视图有所区别,“打印预览”查看最终效果'
  },
  {
    title: '3. 打印预览',
    url: '/preview',
    description: '已完成数据和模板编辑后,开始查看渲染结果和PDF生成'
  },
  {
    title: ' 说明文档',
    url: 'https://github.com/ansoxlu/report-editor'
  }
]

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menu = MENUS.find(it => it.url === location.pathname)

  useEffect(() => {
    if (!menu) {
      navigate(MENUS[0].url)
    }
  })

  if (!menu) {
    return null
  }

  const jump = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url)
    } else {
      navigate(url)
    }
  }

  return (
    <Container>
      <Header/>
      <Content>
        <Aside>
          {MENUS.map((it, index) => (
            <Menu key={index} index={index} isActive={it.url === menu.url} onClick={() => jump(it.url)}>{it.title}</Menu>
          ))}
        </Aside>
        <Article>
          <Description>
            {menu.description}
          </Description>
          <Outlet/>
        </Article>
      </Content>
    </Container>
  )
}

export default Home
