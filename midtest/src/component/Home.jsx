import React from 'react'
import NewRealease from './NewRealease'
import Explore from './Explore'
import './StyleHome.css'
function Home() {
  return (
    <>
    
    <header className='header-home'>
        <span></span>
        <link></link>
        <link></link>
        <input type='text' ></input>
    </header>
    <main className='main-home'>
    <Explore  />
    <NewRealease  />
    </main>
    </>
  )
}

export default Home