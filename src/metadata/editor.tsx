import React from 'react'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/zh-cn'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  height: 40px;
  border-bottom: 2px solid #eee;
`

const Editor = (props: {}) => {
  return (
    <Container>
      <Nav>
        dafd
      </Nav>
      <div style={{ flex: 1, color: '#000' }}>
        <JSONInput
          id = 'json-editor'
          colors = { {
            default: '#000',
            background: '#FCFDFD',
            background_warning: '#000',
            string: '#FA7921',
            number: '#70CE35',
            colon: '#49B8F7',
            keys: '#59A5D8',
            keys_whiteSpace: '#835FB6',
            primitive: '#386FA4'
          } }
          locale = { locale }
          width = '100%'
          height = '100%'
        />
      </div>
    </Container>
  )
}

export default Editor
