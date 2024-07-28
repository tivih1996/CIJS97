import React from 'react'
import { useState, useEffect } from 'react'
import { dataMovie } from '../data/dataMovie'
import './StyleExplore.css'

function Explore({ itemMovieCurrent }) {
  
  // hiệu ứng chuyển động slide show
  const [idxImg, setidxImg] = useState(0)
  const [data, setData] = useState(dataMovie)
  const [item, setItem] = useState([])

  useEffect(() => {
    setItem(itemMovieCurrent)
    console.log(item)
  }, [itemMovieCurrent])

  console.log(idxImg)
  useEffect(() => {
    var intervalid = setInterval(() => {
      const listMovieScroll = document.querySelector('.list-movie-scroll')
      listMovieScroll.style.transform = `translateX(${1170 * -1 * idxImg}px)`
      setidxImg(previdxImg => (previdxImg + 1) % data.length)
    }, 4000)

    return () => clearInterval(intervalid)
  }, [idxImg])

  



  return (
    <>
      <div className='explore'>
        <h1> Explore </h1>

        <p>What are you gonna watch today ?</p>
        <div className='slide-show-movie'>
          <div className='list-movie-scroll'>
            {data.map(item => (
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