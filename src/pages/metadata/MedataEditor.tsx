import { message } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

  const cacheKey = React.useMemo(() => `RE-editMetadata-${id}`, [id])

  const [json, setJson] = React.useState<Record<string, any>>(
    () => JSON.parse(localStorage.getItem(cacheKey) || metadata.json || '{}'),
  )

  const onJsonChange = (value: Record<string, any>) => {
    localStorage.setItem(cacheKey, JSON.stringify(value))
    setJson(json)
  }

  const onSave = (value: Metadata) => {
    const index = database.metatables.findIndex((it) => it.id === value.id)
    database.metatables.splice(index, 1, value)
    setDatabase(database)
    localStorage.removeItem(cacheKey)
  }

  return (
    <Container>
      <Left>
        <Mutation value={metadata} onChange={onSave} json={json} />
      </Left>
      <Right>
        <JsonInput value={json} onChange={(value) => onJsonChange(value)} />
      </Right>
    </Container>
  )
}

export default MedataEditor
