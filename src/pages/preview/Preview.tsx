import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { message } from 'antd'
import utils from '../../definition/utils'
import hooks from '../../app/hooks'
import JsonInput from '../../components/JsonInput'
import PreviewResult from './PreviewResult'

const Container = styled.div`
  display: flex;
  flex: auto;
`

function Preview() {
  const navigate = useNavigate()
  const [database] = hooks.useDatabase()
  const { id } = useParams()
  const template = database.templates.find((it: any) => it.id === id)
  if (!template) {
    message.error('打印模板已过期')
    navigate('/')
    return null
  }

  if (!template.json) {
    message.error('请先编辑模板后预览')
    navigate('/')
    return null
  }

  const page = React.useMemo(() => utils.deserializePage(template.json!), [])
  const metadata = React.useMemo(
    () => database.metatables.find((it) => it.id === template.metadataId)!,
    [],
  )
  const [json, setJson] = useState<Record<string, any>>(() => JSON.parse(metadata.json))

  return (
    <Container>
      <PreviewResult page={page} data={json} metadata={metadata} />
      <JsonInput
        value={json}
        onChange={(value) => setJson(value || JSON.parse(metadata.json))}
      />
    </Container>
  )
}

export default Preview
