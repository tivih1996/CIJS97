import React from 'react'
import { card } from './dataCard'
import './card.css'



function CardPerform(prop) {
  
  
  return (
    <div className="App-container">
             {card.map((items, index) => (
                <div key={index} className="App-item">
                    <div className="background-color">
                    <img className="App-img" src={items.img} alt={items.name} onClick={() => prop.hello(items.name)}  />
                    </div>
                    <div>
                    <section>{items.number}</section>
                    <section className='App-name'>{items.name}</section>
                    <span className={`App-${items.attribute1}`}>{items.attribute1}</span>
                    <span className={`App-${items.attribute2}`}>{items.attribute2}</span>
                    </div>
                </div>))}
    </div>
                 
        ) 
}

export default CardPerform