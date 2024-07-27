import React, { useState } from 'react'
import { dataMovie } from '../data/dataMovie'

import './StyleNewRealease.css'
function NewRealease() {

    return (
        <>
            <div className='new-realease'>
                <h1>New Realease</h1>
                <div className='list-movie'>
                    {dataMovie.map(item => (
                        <section id='movie' className='item-move'>
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