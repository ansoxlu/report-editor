import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'

const Container = styled.div`
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 65px);
  justify-content: center;
`

type Props = {
  children?: React.ReactNode
}

function Default(props: Props) {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
        {props.children}
      </Content>
    </Container>
  )
}
export default Default
