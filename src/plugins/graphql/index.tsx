import React, { ReactNode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import typeDefs from './schema'
import typePolicies from './database'

const apolloClient = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache({
    typePolicies
  }),
  typeDefs: gql`${typeDefs}`,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-only'
    },
    watchQuery: {
      fetchPolicy: 'cache-only'
    }
  }
})

const Graphql = (props: { children: ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {props.children}
    </ApolloProvider>
  )
}

export default Graphql
