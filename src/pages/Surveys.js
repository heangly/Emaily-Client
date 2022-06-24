import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Dashboard from '../components/Dashboard/Dashboard'
import { GET_CURRENT_USER } from '../graphql/queries/userQueries'

const Surveys = () => {
  const navigate = useNavigate()

  const { loading, data } = useQuery(GET_CURRENT_USER)

  useEffect(() => {
    const loggedInUserFromLocalStorage = JSON.parse(
      localStorage.getItem('loggedInUser')
    )
    if (!loading && !data?.currentUser && !loggedInUserFromLocalStorage) {
      navigate('/')
    }
  }, [data, loading, navigate])

  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default Surveys
