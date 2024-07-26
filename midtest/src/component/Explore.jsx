import React from 'react'
import { dataMovie } from '../data/dataMovie'
import './StyleExplore.css'

function Explore() {
  return (
    <>
    <div className='explore'>
    <h1>Explore</h1>
    <p>What are you gonna watch today ?</p>
    <div className='list-movie'>
        
            <img src={item.image} className='img-movie' />
            <p className='name-movie'>{item.episode}</p>
            <p className='description-movie'>{item.movieName}</p>
       

    </div>
    </div>
</>
  )
}

export default Explore