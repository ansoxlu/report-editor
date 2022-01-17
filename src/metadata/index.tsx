import React, { useState } from 'react'
import Structure from './structure'
import styled from 'styled-components'
import Editor from './editor'

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 45%;
  border-right: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const Right = styled.div`
  width: 55%;
  border-left: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const Metadata = () => {
  const [data, setData] = useState<object>({})

  return (
    <Container>
      <Left>
        <Structure/>
      </Left>
      <Right>
        <Editor value={data} onChange={value => setData(value)} />
      </Right>
    </Container>
  )
}

export default Metadata
