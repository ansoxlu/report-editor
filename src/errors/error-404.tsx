import React from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header/>
      <Result
        status="404"
        title="404"
        subTitle="没有找到内容"
        extra={<Button type="primary" onClick={() => navigate('/')}>返回首页</Button>}
      />
    </div>
  )
}

export default Error404
