import React from 'react'
import './More.css'
import Navbar1 from '../components/Navbar1'

function More() {
  return (
    <div className='More'>
      <Navbar1 />
      <div className='section-container'>
        <section>
          <h1>More</h1>
          <div className='more-container'>
            <div className='writing'>
              <h2>Made for writing</h2>
              <p>
                Not complex websites, not e-commerce, not content man­age­ment.
                Just writing.
              </p>
            </div>
            <div className='independent'>
              <h2>Stay Independent</h2>
              <p>
                Build a home for your writing, outside of walled gardens and
                locked-down platforms.
              </p>
            </div>
            <div className='ad-free'>
              <h2>Ad-free</h2>
              <p>You'll never see ads while you're focused on your work.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default More
