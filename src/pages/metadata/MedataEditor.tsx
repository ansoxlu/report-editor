import { message } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import styled from 'styled-components'
import hooks from '../../app/hooks'
import Mutation from './Mutation'
import { Metadata } from '../../definition/types'
import JsonInput from '../../components/JsonInput'

const Container = styled.div`
  display: flex;
  width: 100%;
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

function MedataEditor() {
  const navigate = useNavigate()
  const [database, setDatabase] = hooks.useDatabase()

  const { id } = useParams()
  const metadata = React.useMemo(() => database.metatables.find((it) => it.id === id), [database])
  if (!metadata) {
    message.error('编辑内容已被删除')
    navigate('/')
    return null
  }

  const [jsonCache, setJsonCache] = useLocalStorage(`RE-editMetadata-${id}`, metadata.json)

  const json: Record<string, any> = React.useMemo(() => JSON.parse(jsonCache), [jsonCache])

  const onJsonChange = (json: string) => {
    setJsonCache(json)
  }

  const onChange = (value: Metadata) => {
    const index = database.metatables.findIndex((it) => it.id === value.id)
    database.metatables.splice(index, 1, value)
    setDatabase(database)
  }

  return (
    <Container>
      <Left>
        <Mutation value={metadata} onChange={onChange} json={json} />
      </Left>
      <Right>
        <JsonInput value={json} onChange={onJsonChange} />
      </Right>
    </Container>
  )
}

export default MedataEditor
