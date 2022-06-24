import { gql } from '@apollo/client'

const LOGOUT_USER = gql`
  mutation {
    logout {
      googleId
      credit
    }
  }
`

export { LOGOUT_USER }
