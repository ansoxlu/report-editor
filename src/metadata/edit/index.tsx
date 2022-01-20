import React, { useState } from 'react'
import styled from 'styled-components'
import Editor from './editor'
import { METATABLES } from '../../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { Metadata } from '../../types'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import Overview from './overview'

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
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
  const [metatables, setMetatables] = useLocalStorage('metatables', JSON.stringify(METATABLES))

  const list = JSON.parse(metatables) as Metadata[]
  const target = list.find(it => it.id === id)
  if (!target) {
    navigate('/metadata')
    return null
  }
  const [metadata, setMetadata] = useState<Metadata>(target)
  const [searchParams] = useSearchParams()

  const eTarget = metadata.examples.find(it => it.id === searchParams.get('exampleId')) || (metadata.examples.length > 0 ? metadata.examples[0] : undefined)
  const [json, setJson] = useState<object>(eTarget ? JSON.parse(eTarget.json) : {})

  const handleSave = () => {
    const list = JSON.parse(metatables) as Metadata[]
    const index = list.findIndex(it => it.id === metadata.id)
    list.splice(index, 1, metadata)
    setMetatables(JSON.stringify(list))
  }

  return (
    <Container>
      <Left>
        <Overview value={metadata} json={json} onChange={value => { setMetadata(value) }} onSave={() => handleSave()} />
      </Left>
      <Right>
        <Editor value={ json } onChange={value => setJson(value)} />
      </Right>
    </Container>
  )
}

export default index
