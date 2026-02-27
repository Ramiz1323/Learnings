import React from 'react'
import "../styles/Navbar.scss"
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav>
      <div className="login"><Link to="/login" className='login-btn'>Login</Link></div>
      <div className="register"><Link to="/register" className='register-btn'>Register</Link></div>
    </nav>
  )
}

export default Navbar
