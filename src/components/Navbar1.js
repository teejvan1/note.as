import React from 'react'
import './Navbar1.css'
import logo from '../img/logo.webp'

function Navbar() {
  return (
    <nav className='Navbar1'>
      <ul>
        <li>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/pricing'>Pricing</a>
        </li>
        <li>
          <a href='/new/1'>Start writing</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
