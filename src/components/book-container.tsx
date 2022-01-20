import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Book = styled.div`
  width: 148mm;
  min-height: 210mm;
  background-color: antiquewhite;
`

const BookContainer = (props: { children: ReactNode }) => {
  return (
    <Container>
      <Book>
        {props.children}
      </Book>
    </Container>
  )
}

export default BookContainer
