import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SERVER_BASE_GRAPHQL_URI } from '../constants/serverURL'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentUser: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const graphqlClient = new ApolloClient({
  uri: SERVER_BASE_GRAPHQL_URI,
  cache,
  credentials: 'include'
})

export default graphqlClient
