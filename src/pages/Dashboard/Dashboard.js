import React from 'react'
import Analytical from '../../components/Analytical/Analytical'
import Base from '../../components/Base/Base'
const Dashboard = () => {
  return (
    <Base>
      <h2 className='text-3xl my-3 ml-6 font-bold'>Dashboard</h2>
      <hr className='mx-6 border-gray-600' />
      <Analytical />
    </Base>
  )
}

export default Dashboard