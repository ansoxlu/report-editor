import React from 'react'
import styled from 'styled-components'
import { TEMPLATES } from '../plugins/database'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'
import { PageSerialize, Template } from '../definition/types'
import { Button } from 'antd'

const Container = styled.div`
  padding: 15px 30px;
`

const Items = styled.div`
  padding: 15px 8px;
  border-bottom: 1px solid #ebe0e0;

  > div:first-child {
    display: flex;
    flex: auto;
    margin-bottom: 8px;
    align-items: center;

    > div:nth-child(1) {
      font-size: 16px;
    }

    > div:nth-child(2) {
      flex: auto;
    }

    > div:nth-child(3) {
      padding-right: 25px;
    }
  }

  > div:last-child {
    color: #bfbfbf;
  }
`

const Preview = () => {
  const navigate = useNavigate()
  const [templates] = useLocalStorage('RE-templates', JSON.stringify(TEMPLATES))
  const temps = (JSON.parse(templates) as Template[]).filter(it => it.json && (JSON.parse(it.json) as PageSerialize).layouts.length > 0)

  return (
    <Container>
      {temps.map((it, index) => (
        <Items key={index}>
          <div>
            <div>{it.title}</div>
            <div/>
            <div>{it.updatedAt}</div>
            <div><Button type="primary" onClick={() => navigate(`/preview/${it.id}`)}>打印预览</Button></div>
          </div>
          <div>
            {it.description}
          </div>
        </Items>
      ))}
    </Container>
  )
}

export default Preview
