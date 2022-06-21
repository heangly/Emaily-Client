import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'
import graphqlClient from './graphql/graphqlClient'
import App from './App'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
