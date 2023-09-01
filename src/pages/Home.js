import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar1'

function home() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <h1>note.as</h1>
        <h2>All your notes at one single place</h2>
        <a href='/new/1'>Start writing</a>
      </main>
    </>
  )
}

export default home
