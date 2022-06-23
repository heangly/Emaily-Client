import { gql } from '@apollo/client'

const GET_CURRENT_USER = gql`
  query {
    currentUser {
      googleId
      credit
    }
  }
`
export { GET_CURRENT_USER }
