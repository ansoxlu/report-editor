import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Render from './render'
import JsonEditor from './json-editor'
import { METATABLES, TEMPLATES } from '../../plugins/database'
import { useParams, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { Metadata, Template } from '../../definition/types'
import { message } from 'antd'
import { deserializePage } from '../../definition/utils'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    display: flex;
    flex: auto;
  }
`

const Editor = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [templates] = useLocalStorage('RE-templates', JSON.stringify(TEMPLATES))
  const template = (JSON.parse(templates) as Template[]).find((it: any) => it.id === id)
  if (!template) {
    message.error('打印模板已过期')
    navigate('/preview')
    return null
  }

  const page = deserializePage(JSON.parse(template.json))

  const [metatables] = useLocalStorage('RE-metatables', JSON.stringify(METATABLES))
  const metadata = (JSON.parse(metatables) as Metadata[]).find(it => it.id === template.metadataId)!
  const [json, setJson] = useState<object>(JSON.parse(metadata.json))

  return (
    <Container>
      <Header isFull={true}/>
      <div>
        <Render page={page} data={json} metadata={metadata}/>
        <JsonEditor value={json} onChange={value => setJson(value || JSON.parse(metadata.json))}/>
      </div>
    </Container>
  )
}

export default Editor
