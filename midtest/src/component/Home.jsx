import React from 'react'
import NewRealease from './NewRealease'

import { Link } from 'react-router-dom'
import './StyleHome.css'
function Home() {
  return (
    <>

      <header className='header-home'>
        <div className='navbar'>
          <span className='anonime'> Anonime</span>
          <span className='home'> Home</span>
          <span className='listanime'> List anime</span>
          <input className='input-name-movie' type='text' placeholder='Search anime or movie' ></input>
        </div>
      </header>
      <main className='main-home'>
        
        <NewRealease />
      </main>
    </>
  )
}

export default Home