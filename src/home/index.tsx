import React from 'react'
import BookView from '../components/book-view'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Items = styled.div`
  font-size: 23px;
  margin-bottom: 8px;
  color: chocolate;
  border-bottom: 1px solid #000;
`

const Home = () => {
  return (
    <BookView>
      <Container>
        <Link to="/metadata">
          <Items>数据编辑</Items>
        </Link>
        <Link to="/template">
          <Items>报告模板</Items>
        </Link>
        <Link to="/preview">
          <Items>打印预览</Items>
        </Link>
        <Link to="/guide">
          <Items>使用文档</Items>
        </Link>
      </Container>
    </BookView>
  )
}

export default Home
