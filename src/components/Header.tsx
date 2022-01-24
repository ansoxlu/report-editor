import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../asserts/images/logo.png'

const Container = styled.div`
  width: 100%;
  height: 62px;
  border-bottom: 1px solid #ebe0e0;
  display: flex;
  justify-content: center;
`
const Nav = styled.div`
  width: 1230px;
  display: flex;
  align-items: center;

  > div:nth-child(1) {
    display: flex;
    cursor: pointer;

    > p {
      font-size: 28px;
      color: chocolate;
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
`
const Logo = styled.img.attrs(() => ({ src: logo }))`
  width: 60px;
`

const Header = (props: { className?: string }) => {
  const navigate = useNavigate()

  return (
    <Container className={props.className}>
      <Nav>
        <div onClick={() => navigate('/')}>
          <Logo/>
          <p>
            报告编辑器
          </p>
        </div>
      </Nav>
    </Container>
  )
}

export default Header