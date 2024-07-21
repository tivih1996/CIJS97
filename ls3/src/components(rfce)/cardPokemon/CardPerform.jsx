import React, { useState } from 'react'
import './card.css'
import ModalPokemon from '../../Modal/ModalPokemon'
import { card } from './dataCard'


// function Hello(prop) {
//   return alert(prop+' xin chào!')
// }

function CardPerform() {
  const [showModalPK, setShowModalPK] = useState(false);
  const [currentItem, setItem] = useState(null)

  const openModal = (item) => {
    setShowModalPK(true)
    const modalPokemon = document.getElementById('modalPokemon')
    modalPokemon.classList.add('show')
    setItem(item)
  
  }


  return (
    <div className="App-container">

      {card.map((items,index)=>(
        <div key={index} className="App-item">
        <div className="background-color">
          <img className="App-img" src={items.img} alt={items.name} onClick={()=>openModal(items)} />
        </div>
        <div>
          <section>{items.number}</section>
          <section className='App-name'>{items.name}</section>
          <span className={`App-${items.attribute1}`}>{items.attribute1}</span>
          <span className={`App-${items.attribute2}`}>{items.attribute2}</span>
        </div>
    
      </div>
    ))}
        <ModalPokemon itemCard = {currentItem} />
    </div>
  )
}

export default CardPerform