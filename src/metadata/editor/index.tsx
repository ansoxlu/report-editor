import React, { useState } from 'react'
import styled from 'styled-components'
import JsonInput from './json-input'
import { METATABLES } from '../../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { Metadata } from '../../types'
import { useParams, useNavigate } from 'react-router-dom'
import Overview from './overview'
import { message } from 'antd'
import Header from '../../components/Header'

const Container = styled.div`
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  > div:nth-child(2) {
    display: flex;
  }
`

const HeaderContainer = styled(Header)`
  > div {
    width: 100%;
    padding: 0 30px;
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

const index = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [metatables, setMetatables] = useLocalStorage('RE-metatables', JSON.stringify(METATABLES))

  const list = JSON.parse(metatables) as Metadata[]
  const target = list.find(it => it.id === id)
  if (!target) {
    message.error('编辑内容已被删除')
    navigate('/metadata')
    return null
  }
  const [metadata, setMetadata] = useState(target)

  const [jsonCache, setJsonCache] = useLocalStorage(`RE-editMetadata-${metadata.id}`)

  const [json, setJson] = useState<object>(JSON.parse(jsonCache || metadata.example))

  const handleSave = (metadata: Metadata) => {
    setMetadata(metadata)
    const list = JSON.parse(metatables) as Metadata[]
    const index = list.findIndex(it => it.id === metadata.id)
    list.splice(index, 1, metadata)
    setMetatables(JSON.stringify(list))
    setJsonCache('')
  }

  const handleJsonChange = (value: object, json: string) => {
    setJson(value)
    setJsonCache(json)
  }

  return (
    <Container>
      <HeaderContainer/>
      <div>
        <Left>
          <Overview value={metadata} json={json} onChange={handleSave} />
        </Left>
        <Right>
          <JsonInput value={ json } onChange={handleJsonChange} />
        </Right>
      </div>
    </Container>
  )
}

export default index
