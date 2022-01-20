import React from 'react'
import styled from 'styled-components'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  width: 100%;
  height: 62px;
  border-bottom: 1px solid #ebe0e0;
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
  padding-left: ${props => (props.index + 2) * 22}px;
  background-color: ${props => props.isActive ? 'peachpuff' : '#f3f3f3'};
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
    title: '数据编辑',
    url: '/metadata',
    description: '配置你的数据格式,为打印时的动态数据作准备'
  },
  {
    title: '模板编辑',
    url: '/template',
    description: '构造要打印的模板,结合已配置的数据开始编辑'
  },
  {
    title: '打印预览',
    url: '/preview'
  },
  {
    title: '使用文档',
    url: '/guide'
  }
]

const Home = () => {
  const location = useLocation()
  const menu = MENUS.find(it => it.url === location.pathname)!

  return (
    <Container>
      <Header/>
      <Content>
        <Aside>
          {MENUS.map((it, index) => (
            <Link to={it.url} key={it.url}>
              <Menu index={index} isActive={it.url === menu.url}>{it.title}</Menu>
            </Link>
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
