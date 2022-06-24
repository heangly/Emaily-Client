import { useMutation, useQuery } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'

import { SERVER_GOOGLE_OAUTH_URI } from '../../constants/serverURL'
import { GET_CURRENT_USER } from '../../graphql/queries/userQueries'
import { LOGOUT_USER } from '../../graphql/mutations/userMutations'

const Header = () => {
  const navigate = useNavigate()

  const { loading, data } = useQuery(GET_CURRENT_USER)

  const [logout] = useMutation(LOGOUT_USER, {
    refetchQueries: [{ query: GET_CURRENT_USER }]
  })

  if (!loading) {
    localStorage.setItem('loggedInUser', JSON.stringify(data.currentUser))
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
                <li>
                  <Link to='/surveys'>Surveys</Link>
                </li>
                <li>
                  <button
                    className='waves-effect waves-light btn red lighten-2'
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
