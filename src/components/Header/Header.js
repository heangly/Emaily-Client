import { useMutation, useQuery } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'

import { SERVER_GOOGLE_OAUTH_URI } from '../../constants/serverURL'
import { GET_CURRENT_USER } from '../../graphql/queries/userQueries'
import { LOGOUT_USER } from '../../graphql/mutations/userMutations'
import { GET_PAYMENT_PRICE } from '../../graphql/queries/paymenQueries'
import { CHECKOUT_PAYMENT } from '../../graphql/mutations/paymentMutations'

const Header = () => {
  const navigate = useNavigate()
  const { loading, data } = useQuery(GET_CURRENT_USER)
  const { loading: priceLoading, data: priceData } = useQuery(GET_PAYMENT_PRICE)

  const [
    checkout,
    { data: checkoutData, loading: checkoutLoading, error: checkoutError }
  ] = useMutation(CHECKOUT_PAYMENT)

  const [logout] = useMutation(LOGOUT_USER, {
    refetchQueries: [{ query: GET_CURRENT_USER }]
  })

  if (!loading) {
    localStorage.setItem('loggedInUser', JSON.stringify(data?.currentUser))
  }

  const addCreditHandler = async () => {
    if (!priceLoading) {
      const { data } = await checkout({
        variables: { priceId: priceData?.prices[0].id }
      })
      window.location.href = data.checkout.url
    }
  }

  const logoutHandler = () => {
    logout().then(() => {
      navigate('/')
      localStorage.removeItem('loggedInUser')
    })
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link className='brand-logo' to='/'>
            Emaily
          </Link>
          <ul className='right'>
            {data?.currentUser ? (
              <>
                <li style={{ marginRight: '20px' }}>
                  <button
                    className='waves-effect waves-light btn green'
                    onClick={addCreditHandler}
                  >
                    {checkoutLoading ? 'Loading...' : 'Add Credit'}
                  </button>
                </li>

                <li>
                  <button
                    className='waves-effect waves-light btn red accent-3'
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <a href={SERVER_GOOGLE_OAUTH_URI}>Login With Google</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
