import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => dispatch(login()) }>Click To Login</button>
        <Nav />
    </div>
  )
}

export default Home