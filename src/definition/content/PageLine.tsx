import React from 'react'
import styled from 'styled-components'
import { ContentDefinition } from './types'
import Single from '../layout/Single'

const Message = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px 0;
  background: #f3f3f3;
  border: 1px solid #ddd;
`

const PageLine: ContentDefinition<string, string> = {
  title: '分页线',
  defaultValue: '',
  description: '插入固定分页',
  key: 'PageLine',
  layout: Single,
  styles: [],
  Blueprint() {
    return (
      <div />
    )
  },
  Building() {
    return (
      <Message>
        分页线
      </Message>
    )
  },
  Render() {
    return (
      <br />
    )
  },
}

export default PageLine
