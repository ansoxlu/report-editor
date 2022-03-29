import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #ebe0e0;

  > div:first-child {
    display: flex;
    flex: auto;
    margin-bottom: 8px;
    align-items: center;

    > div:nth-child(1) {
      font-size: 16px;
    }

    > div:nth-child(2) {
      flex: auto;
    }

    > div:nth-child(3) {
      padding-right: 25px;
    }
  }

  > div:last-child {
    display: flex;
    color: #bfbfbf;

    > div:nth-child(2) {
      flex: auto;
    }
  }
`

type Props = {
  children: React.ReactNode
};

function Item(props: Props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Item
