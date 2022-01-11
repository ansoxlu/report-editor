import React from 'react'
import './App.css'
import Editor from './editor'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Error404 from './errors/error-404'
import { MockedProvider } from '@apollo/client/testing'
import mocks from '../mock/graphql'

// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

/* const apolloClient = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
}) */

function App () {
  return (
    <MockedProvider mocks={mocks}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/editor" element={<Editor/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </MockedProvider>
  )
}

export default App
