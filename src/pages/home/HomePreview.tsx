import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import hooks from '../../app/hooks'
import Item from './components/Item'

function HomePreview() {
  const navigate = useNavigate()
  const [database] = hooks.useDatabase()

  return (
    <div>
      {database.templates.filter((it) => it.json).map((it) => (
        <Item key={it.id}>
          <div>
            <div>{it.title}</div>
            <div />
            <div>{it.updatedAt}</div>
            <div><Button type="primary" onClick={() => navigate(`/preview/${it.id}`)}>预览跳转</Button></div>
          </div>
          <div>
            <div>{it.description}</div>
          </div>
        </Item>
      ))}
    </div>
  )
}
export default HomePreview
