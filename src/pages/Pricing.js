import React from 'react'
import './Pricing.css'
import Navbar1 from '../components/Navbar1'

function Pricing() {
  return (
    <div className='Pricing'>
      <Navbar1 />
      <div className='section-container'>
        <section>
          <h1>Pricing</h1>
          <h2>
            Create a clean, ad-free home for your writing on the web for free
            where number of posts per day is unlimited.
          </h2>
          <div className='price-container'>
            <div className='privacy'>
              <h2>Privacy & security</h2>
              <p>
                We're built around keeping your identity confidential and your
                creative work safe. We protect you so you can focus on writing.
              </p>
            </div>
            <div className='optimization'>
              <h2>Self-Optimization</h2>
              <p>
                There's no software to update or servers to run. Note.as gets
                better while you sleep, and we handle the basic maintenance for
                you.
              </p>
            </div>
            <div className='stability'>
              <h2>Stability</h2>
              <p>
                We care more about stability and leaving things where you last
                found them over big, radical changes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pricing
