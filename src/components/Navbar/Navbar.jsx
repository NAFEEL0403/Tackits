import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Tackits Logo" className="logo" />

      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
            Our Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            <button className="btn">Contact Us</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
