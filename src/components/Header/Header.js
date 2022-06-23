import { Link } from 'react-router-dom'
import { SERVER_GOOGLE_OAUTH_URI } from '../../constants/serverURL'

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link className='brand-logo' to='/'>
          Logo
        </Link>
        <ul className='right'>
          <li>
            <a href={SERVER_GOOGLE_OAUTH_URI}>Login With Google</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
