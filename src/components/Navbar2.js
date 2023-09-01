import React from 'react'
import './Navbar2.css'
import logo from '../img/logo.webp'

function Navbar2() {
  return (
    <div>
      <nav className='Navbar2'>
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
            <a href='/more'>More</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar2
