import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import Default from '../layouts/Default'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Default>
      <Result
        status="404"
        title="404"
        subTitle="没有找到内容"
        extra={<Button type="primary" onClick={() => navigate('/')}>返回首页</Button>}
      />
    </Default>
  )
}
