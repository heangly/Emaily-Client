import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { SERVER_GOOGLE_OAUTH_URI } from '../../constants/serverURL'
import { GET_CURRENT_USER } from '../../graphql/queries/userQueries'

const Header = () => {
  const { data } = useQuery(GET_CURRENT_USER)

  // const user = fetch('http://localhost:4000/api/current_user').then((res) =>
  //   res.json()
  // )

  // user.then((r) => console.log(r))

  console.log(data)

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link className='brand-logo' to='/'>
            Logo
          </Link>
          <ul className='right'>
            <li>
              <a href={SERVER_GOOGLE_OAUTH_URI}>Login With Google</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
