import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SERVER_BASE_GRAPHQL_URI } from '../constant/serverURL'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },

        projects: {
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
  cache
})

export default graphqlClient
