import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">Home Page</Link> | 
      <Link to='/dashboard'>Dashboard</Link> | 
      <Link to="/dashboard/profile">Profile</Link> | 
      <Link to="/dashboard/products">Products</Link>

      <div className='page' style={{backgroundColor: 'gray'}}>
          <Outlet />
      </div>
    </div>
  )
}

export default Dashboard