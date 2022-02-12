import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Error404 from './errors/error-404'
import Metadata from './metadata'
import MetadataEditor from './metadata/editor'
import Template from './template'
import TemplateEditor from './template/editor'
import Preview from './preview'
import PreviewEditor from './preview/editor'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="template" element={<Template/>} />
          <Route path="metadata" element={<Metadata/>} />
          <Route path="preview" element={<Preview/>} />
        </Route>
        <Route path="/metadata/:id" element={<MetadataEditor/>}/>
        <Route path="/template/:id" element={<TemplateEditor/>}/>
        <Route path="/preview/:id" element={<PreviewEditor/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  )
}

export default App
