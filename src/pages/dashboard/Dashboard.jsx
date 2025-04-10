import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../store/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={ () => dispatch(logout())}>Click To LOGOUT</button><br />
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