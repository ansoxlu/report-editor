import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { GithubOutlined } from '@ant-design/icons'
import logo from '../../asserts/images/logo.png'

const Container = styled.div`
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #ebe0e0;
`

const Logo = styled.div`
  display: flex;

  > img {
    height: 60px;
  }

  > span {
    font-size: 28px;
    color: chocolate;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
`

const Icon = styled.div`
  font-size: 40px;
  margin-left: 40px;
`

function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>
        <img src={logo} alt="logo" />
        <span>
          报告编辑器
        </span>
      </Logo>
      <div>
        <a href="https://github.com/ansoxlu/report-editor" target="_blank" rel="noreferrer">
          <Icon><GithubOutlined /></Icon>
        </a>
      </div>
    </Container>
  )
}

export default Header
