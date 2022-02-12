import React from 'react'
import styled from 'styled-components'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/zh-cn'
import { message } from 'antd'

const Container = styled.div`
`

const JsonEditor = (props: {
  value: object
  onChange: (value?: object) => void
}) => {
  const handleChange = (result: any) => {
    if (!result.error) {
      if (!result.json) {
        return props.onChange()
      }
      if (Array.isArray(result.jsObject)) {
        return message.error('数据不是JSON对象')
      }
      props.onChange(result.jsObject)
    }
  }

  return (
    <Container>
      <JSONInput
        id = 'json-editor'
        placeholder={props.value}
        onChange={(result: any) => handleChange(result)}
        colors = { {
          default: '#000',
          background: '#FCFDFD',
          background_warning: '#000',
          string: '#FA7921',
          number: '#70CE35',
          colon: '#49B8F7',
          keys: '#59A5D8',
          keys_whiteSpace: '#835FB6',
          primitive: '#386FA4',
          error: '#e30b0b'
        } as any}
        locale = { locale }
        width = '100%'
        height = '100%'
      />
    </Container>
  )
}

export default JsonEditor
