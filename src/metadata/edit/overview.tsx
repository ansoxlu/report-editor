import React from 'react'
import { Metadata } from '../../types'
import styled from 'styled-components'

const Container = styled.div`
`

const Header = styled.div`
  height: 40px;
  border-bottom: 2px solid #eee;
`

const Content = styled.div`

`

const Overview = (props: { value: Metadata, json: object, onChange: (value: Metadata) => void, onSave: () => void }) => {
  return (
    <Container>
      <Header>
        {props.value.title}
      </Header>
      <Content/>
    </Container>
  )
}

export default Overview
