import React, { useState,useEffect } from 'react'
import { dataMovie } from '../data/dataMovie'
import Explore from './Explore'
import './StyleNewRealease.css'
function NewRealease() {


const [itemMovieCurrent, setItemMovieCurrent] = useState([])


    return (
        <>
        <Explore itemMovieCurrent = {itemMovieCurrent} />
            <div className='new-realease'>
                <h1>New Realease</h1>
                <div className='list-movie'>
                    {dataMovie.map(item => (
                        <section id={item.id} className='item-move' onClick={()=>{setItemMovieCurrent([item])}} >
                            <img src={item.image} className='img-movie' />
                            <div className='content-movie' >
                            <p className='episode-movie'>Episode {item.episode}</p>
                            <p className='name-movie'>{item.movieName}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewRealease