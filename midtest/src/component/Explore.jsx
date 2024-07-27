import React from 'react'
import { useState, useEffect } from 'react'
import { dataMovie } from '../data/dataMovie'
import './StyleExplore.css'

function Explore() {
  // hiệu ứng chuyển động slide show
  const [idxImg, setidxImg] = useState(0)
  const lengthImg = document.getElementsByClassName('img-movie-explore').length
  const listMovieScroll = document.querySelector('.list-movie-scroll')

  console.log(idxImg)
  useEffect(() => {
    const intervalid = setInterval(() => {
      const listMovieScroll = document.querySelector('.list-movie-scroll')
      listMovieScroll.style.transform = `translateX(${1170 * -1 * idxImg}px)`
      setidxImg(previdxImg => (previdxImg +1) % 7)
    }, 4000)

    return () => clearInterval(intervalid)
  }, [idxImg])
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
        <div className='slide-show-movie'>
          <div className='list-movie-scroll'>
            {dataMovie.map(item => (
              <section className='item-movie-scroll'>
                <img src={item.poster} className='img-movie-explore' />
                <div className='content-explore'>
                  <p className='name-movie'>{item.movieName}</p>
                  <p className='description-movie'>{item.description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore