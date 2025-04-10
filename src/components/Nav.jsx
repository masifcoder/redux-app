import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to='/'>Home Page</Link><br />
        <Link to='/about'>About Page</Link><br />
        <Link to='/dashboard'>Dashboard</Link><br />
    </div>
  )
}

export default Nav