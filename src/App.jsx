import {useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home';
import About from "./pages/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Products from "./pages/dashboard/Products";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} >
            <Route path='profile' element={<Profile />} />
            <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
