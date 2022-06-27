import { gql } from '@apollo/client'

const GET_PAYMENT_PRICE = gql`
  query {
    prices {
      id
      amount
    }
  }
`
export { GET_PAYMENT_PRICE }
