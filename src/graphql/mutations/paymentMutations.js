import { gql } from '@apollo/client'

const CHECKOUT_PAYMENT = gql`
  mutation checkout($priceId: ID!) {
    checkout(priceId: $priceId) {
      id
      amount
      url
    }
  }
`

export { CHECKOUT_PAYMENT }
