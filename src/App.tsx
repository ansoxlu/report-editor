import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Error404 from './errors/error-404'
import Metadata from './metadata'
import MetadataEdit from './metadata/edit'
import Template from './template'
import TemplateEditor from './template/editor'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="/metadata" element={<Metadata/>} />
          <Route path="/template" element={<Template/>} />
        </Route>
        <Route path="/metadata/:id" element={<MetadataEdit/>}/>
        <Route path="/template/:id" element={<TemplateEditor/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  )
}

export default App
