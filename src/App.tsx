import React from 'react'
import './App.css'
import Editor from './editor'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Error404 from './errors/error-404'
import Metadata from './metadata'
import Graphql from './plugins/graphql'

function App () {
  return (
    <Graphql>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/metadata" element={<Metadata/>} />
          <Route path="/editor" element={<Editor/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </Graphql>
  )
}

export default App
