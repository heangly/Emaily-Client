import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'
import graphqlClient from './graphql/graphqlClient'
import App from './App'
import 'materialize-css/dist/css/materialize.min.css'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
)
