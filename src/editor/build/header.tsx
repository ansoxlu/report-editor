import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 45px;
  font-size: 18px;
  border-bottom: 2px solid #e4e7ed;
`

function Header () {
  return (
    <HeaderContainer/>
  )
}

export default Header
