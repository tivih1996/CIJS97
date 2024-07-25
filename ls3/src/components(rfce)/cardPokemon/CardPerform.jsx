import React, { useState } from 'react'
import './card.css'
import ModalPokemon from '../../Modal/ModalPokemon'
import { useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner';

// import { card } from './dataCard'
// import img001 from "../../images/001.png";
// import img002 from "../../images/002.png";
// import img003 from "../../images/003.png";
// import img004 from "../../images/004.png";
// import img005 from "../../images/005.png";
// import img006 from "../../images/006.png";
// import img007 from "../../images/007.png";
// import img008 from "../../images/008.png";
// import img009 from "../../images/009.png";
// import img010 from "../../images/010.png";
// import img011 from "../../images/011.png";
// import img012 from "../../images/012.png";

const cardPK = [
  { name: 'Bulbasaur', number: '#0001', img: `https://github.com/HybridShivam/Pokemon/blob/master/assets/images/001.png?raw=true`, attribute1: 'Grass', attribute2: 'Poison' },
  { name: 'Ivysaur', number: '#0002', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/002.png?raw=true', attribute1: 'Grass', attribute2: 'Poison' },
  { name: 'Venusaur', number: '#0003', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/003.png?raw=true', attribute1: 'Grass', attribute2: 'Poison' },
  { name: 'Charmander', number: '#0004', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/004.png?raw=true', attribute1: 'Fire', attribute2: '' },
  { name: 'Charmeleon', number: '#0005', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/005.png?raw=true', attribute1: 'Fire', attribute2: '' },
  { name: 'Charizard', number: '#0006', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/006.png?raw=true', attribute1: 'Fire', attribute2: 'Flying' },
  { name: 'Squirtile', number: '#0007', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/007.png?raw=true', attribute1: 'Water', attribute2: '' },
  { name: 'Wartortle', number: '#0008', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/008.png?raw=true', attribute1: 'Water', attribute2: '' },
  { name: 'Blastoise', number: '#0009', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/009.png?raw=true', attribute1: 'Water', attribute2: '' },
  { name: 'Caterpie', number: '#0010', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/010.png?raw=true', attribute1: 'Bug', attribute2: '' },
  { name: 'Metapod', number: '#0011', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/011.png?raw=true', attribute1: 'Bug', attribute2: '' },
  { name: 'Butterfree', number: '#0012', img: 'https://github.com/HybridShivam/Pokemon/blob/master/assets/images/012.png?raw=true', attribute1: 'Bug', attribute2: 'Flying' }
]


function CardPerform() {
  // Khởi tạo local strorage
  if (localStorage.getItem('userCard') === null) {
    localStorage.setItem('userCard', JSON.stringify(cardPK))
  }
  // Lấy dũ liệu lưu trên local
  const cardObject = JSON.parse(localStorage.getItem('userCard'))
  var cardArray = Object.values(cardObject).map(item => ({
    name: item.name,
    number: item.number,
    img: item.img,
    attribute1: item.attribute1,
    attribute2: item.attribute2
  }))

  //--------------------------
  const [card, setCard] = useState(cardArray)
  const [currentItem, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  

  // open Modal
  const openModal = (item) => {
    const modalPokemon = document.getElementById('modalPokemon')
    modalPokemon.classList.replace('hidden', 'show')
    const cardObject = JSON.parse(localStorage.getItem('userCard'))
    const cardArray = Object.values(cardObject).map(item => ({
      name: item.name,
      number: item.number,
      img: item.img,
      attribute1: item.attribute1,
      attribute2: item.attribute2
    }))
    const newItem = cardArray.find(idx => idx.name === item.name)
    const cardArrayFilter = cardArray.filter(item => item.name.toLowerCase().includes(document.querySelector('input').value.toLowerCase()))
    setItem(newItem)
    setCard([...cardArrayFilter])

  }



  //render lít tìm kiếm

  const searchPekemon = (e) => {
    const cardArrayFilter = cardArray.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    return setCard([...cardArrayFilter])
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[card]);

  //render HTML
  return (
    <>
      <search>
        <label>Tìm kiếm Pokémon</label>
        <input type='text' onChange={searchPekemon}></input>
      </search>

      <div className="App-container">

        {card.map((items) => (
          <div key={items.name} className="App-item">
            <div className="background-color">
              {loading ? (
                <TailSpin
                  height="80"
                  width="80"
                  color="#00BFFF"
                  ariaLabel="loading"
                />
              ) : (
                <img className="App-img" src={items.img} alt={items.name} onClick={() => openModal(items)} />
              )}
            </div>
            <div>
              <section>{items.number}</section>
              <section className='App-name'>{items.name}</section>
              <span className={`App-${items.attribute1}`} id={`${items.name}${items.attribute1}`}>{items.attribute1}</span>
              <span className={`App-${items.attribute2}`} id={`${items.name}${items.attribute2}`}>{items.attribute2}</span>
            </div>

          </div>
        ))}
        <ModalPokemon itemCard={currentItem} />
      </div>

    </>
  )
}

export default CardPerform