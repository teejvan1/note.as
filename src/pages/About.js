import React from 'react'
import Navbar1 from '../components/Navbar1'
import './About.css'
import aboutImage from '../img/about.webp'

function About() {
  return (
    <div className='About'>
      <Navbar1 />

      <section>
        <h1>About</h1>
        <h2>
          Note.as is the fastest and easiest way to create notes in very less
          time possible.
        </h2>
        <div className='about-image-container'>
          <img className='about-image' src={aboutImage} alt='' />
        </div>
      </section>
    </div>
  )
}

export default About
