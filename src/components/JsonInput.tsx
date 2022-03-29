import React from 'react'
import styled from 'styled-components'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/zh-cn'
import { message } from 'antd'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #000
`

type Props = {
  value: Record<any, string>
  onChange: (json: string) => void
}

function JsonInput(props: Props) {
  const onChange = (result: any) => {
    if (!result.error) {
      if (!result.json) {
        props.onChange('{}')
        return
      }
      if (Array.isArray(result.jsObject)) {
        message.error('数据不是JSON对象')
        return
      }
      props.onChange(result.json)
    }
  }

  return (
    <Container>
      <JSONInput
        id="json-editor"
        placeholder={props.value}
        onChange={(result: any) => onChange(result)}
        colors={{
          default: '#000',
          background: '#FCFDFD',
          background_warning: '#000',
          string: '#FA7921',
          number: '#70CE35',
          colon: '#49B8F7',
          keys: '#59A5D8',
          keys_whiteSpace: '#835FB6',
          primitive: '#386FA4',
          error: '#e30b0b',
        } as any}
        locale={locale}
        width="100%"
        height="100%"
      />
    </Container>
  )
}

export default JsonInput
