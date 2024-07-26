import React from 'react'
import { dataMovie } from '../data/dataMovie'
import './StyleExplore.css'

function Explore() {
    // hiệu ứng chuyển động slide show
      const listMovieScroll = document.querySelector('.list-movie-scroll')
      // const withImg = document.getElementsByTagName('img')[0].offsetWidth
      // console.log(withImg)
      // setInterval(() => {
      //   listMovieScroll.style.transform = `translateX(${withImg * -1}px)`
      // }, 2000)
    // ------


  return (
  <>
    <div className='explore'>
    <h1> Explore </h1>

    <p>What are you gonna watch today ?</p>

    <div className='list-movie-scroll'>
      {dataMovie.map(item =>(
        <section className='item-move-scroll'>
            <img src={item.poster} className='img-movie-explore' />
            <div className='content-explore'>
            <p className='name-movie'>{item.movieName}</p>
            <p className='description-movie'>{item.description}</p>
            </div>
        </section>
      ))}
    </div>
    </div>
</>
  )
}

export default Explore