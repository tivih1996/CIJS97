import React from 'react'
import './Modal.css'
import '../components(rfce)/cardPokemon/card.css'

const closeModal = () => {
    const modalPokemon = document.getElementById('modalPokemon')
    modalPokemon.classList.remove('show')
  }
function ModalPokemon({itemCard}) {
  console.log(itemCard)
    return (
        <div id='modalPokemon' className='' onClick={closeModal}>
            <div className='background-modalPK'>
            <div className="background-img">
                <img className="modal-img" src={itemCard.img} alt={itemCard.name}  />
            </div>
            <div className='background-information'>
                <section className='inf-name'>{itemCard.number}</section>
                <section className='inf-name'>{itemCard.name}</section>
                <span className={`App-${itemCard.attribute1}`}>{itemCard.attribute1}</span>
                <span className={`App-${itemCard.attribute2}`}>{itemCard.attribute2}</span>
            </div>
            </div>
        </div>
    )
}

export default ModalPokemon