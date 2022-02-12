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
    description: '配置你的数据格式,为打印时的动态数据作准备'
  },
  {
    title: '2. 模板编辑',
    url: '/template',
    description: '结合已保存的数据开始编辑模板'
  },
  {
    title: '3. 打印预览',
    url: '/preview',
    description: '已完成数据和模板编辑，开始进行预览和打印'
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
