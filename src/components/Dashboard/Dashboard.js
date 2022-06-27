import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Link to='/' className='btn blue'>
        Back to home
      </Link>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
