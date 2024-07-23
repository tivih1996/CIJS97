import React from 'react'
import './Modal.css'
import '../components(rfce)/cardPokemon/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { card } from '../components(rfce)/cardPokemon/dataCard';


function ModalPokemon({...its}) {
    
    let items = its.itemCard
    console.log(items)
    const closeModal = () => {
        const modalPokemon = document.getElementById('modalPokemon')
        modalPokemon.classList.remove('show')
        // xoá nội dung in put
        const inpText = document.getElementsByTagName('input')
        for (let i = 0; i < inpText.length; i++) {
            inpText[i].value = ''
        }
    }

    
    let itemCard = {}
    let itemObject = {}
    if(items !== null && items !== undefined ){
    const cardObject = JSON.parse(localStorage.getItem('userCard'))
    itemObject = Object.values(cardObject).find(itm => itm.name === items.name )
    itemCard = {...itemObject}
    }
    


    var atbNoneNull = []
    if (itemCard !== null) {
        let atb = Object.keys(itemCard).filter(key => key.includes('attribute'))
        for (let idx of atb) {

            if (itemCard[idx] !== '' && itemCard[idx] !== undefined && itemCard[idx] !== null) {
                atbNoneNull.push(itemCard[idx])
            }
        }

    }
    
    const getParam = (e) => {
        const namePokemon = e.target.attributes[0].value
        const attributePokemon = e.target.attributes[2].value
        const newAttributePokemon = e.target.value

        document.getElementsByClassName('button-update').id = `${namePokemon}${attributePokemon}`
        document.getElementsByClassName('button-update').content = `${newAttributePokemon}`
        document.getElementsByClassName('button-update').namePokemon = `${namePokemon}`
        document.getElementsByClassName('button-update').attribute = `${attributePokemon}`
    }



    const updateAtribute = (e) => {
        const idSpan = document.getElementsByClassName('button-update').id
        const newAttri = document.getElementsByClassName('button-update').content
        const namePokemon = document.getElementsByClassName('button-update').namePokemon
        const oldAttri = document.getElementsByClassName('button-update').attribute

        for (let item of card) {
            if (item.name === namePokemon) {
                let arrKey = Object.keys(item)
                let keyNeedUpdate = arrKey.find(key => item[key] === oldAttri)
                if (keyNeedUpdate !== undefined) {
                    item[keyNeedUpdate] = newAttri

                }
            }
        }


        document.getElementById(idSpan).innerText = newAttri
        document.getElementById(idSpan).setAttribute('class', `App-${newAttri}`)

        closeModal()
        const cardPresent = { ...card }
        localStorage.setItem('userCard', JSON.stringify(cardPresent))

    }
   
    return (
        <div id='modalPokemon' className='' >

            <div className="background-modalPK">
                <div className="background-img">

                    <img className="modal-img" src={itemCard.img} alt={itemCard.name} />
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" style={{ color: "#63E6BE", }} onClick={closeModal} />
                </div>

                <div className='background-information'>
                    <section className='inf-name'>
                        {itemCard.number}
                        <button
                            className='button-update'
                            id=''
                            content=''
                            namePokemon=''
                            attribute=''
                            onClick={updateAtribute}  >Cập nhật thuộc tính</button>
                    </section>
                    <section className='inf-name'>
                        {itemCard.name}
                    </section>
                    {atbNoneNull.map((item) => (
                        <input id={itemCard.name} className={`App-${item}`} placeholder={item} onChange={getParam} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ModalPokemon