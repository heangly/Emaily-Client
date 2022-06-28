import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import Landing from '../components/Landing/Landing'
import { GET_CURRENT_USER } from '../graphql/queries/userQueries'

const Home = () => {
  const { loading, data } = useQuery(GET_CURRENT_USER)

  return (
    <div>
      <Landing />
      {!loading && data?.currentUser && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to='/surveys' className='btn blue'>
            Go to surveys
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home
