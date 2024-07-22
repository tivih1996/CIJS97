import React from 'react'
import './Modal.css'
import '../components(rfce)/cardPokemon/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { card } from '../components(rfce)/cardPokemon/dataCard';


function ModalPokemon({ itemCard }) {

    const closeModal = () => {
        const modalPokemon = document.getElementById('modalPokemon')
        modalPokemon.classList.remove('show')
        // xoá nội dung in put
        const inpText = document.getElementsByTagName('input')
        for (let i = 0; i < inpText.length; i++) {
            inpText[i].value = ''
        }

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
    const updateAttribute = (e) => {
        const namePokemon = e.target.attributes[0].value
        const attributePokemon = e.target.attributes[2].value
        const newAttributePokemon = e.target.value
        for (let item of card) {
            if (item.name === namePokemon) {
                let arrKey = Object.keys(item)
                let keyNeedUpdate = arrKey.find(key => item[key] === attributePokemon)
                if (keyNeedUpdate !== undefined) {
                    item[keyNeedUpdate] = newAttributePokemon
                }
            }
        }

    }
    return (
        <div id='modalPokemon' className='' >

            <div className="background-modalPK">
                <div className="background-img">

                    <img className="modal-img" src={itemCard.img} alt={itemCard.name} />
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" style={{ color: "#63E6BE", }} onClick={closeModal} />
                </div>
                <button className='button-update' >Cập nhật thuộc tính</button>
                <div className='background-information'>
                    <section className='inf-name'>{itemCard.number}</section>
                    <section className='inf-name'>{itemCard.name}</section>
                    {atbNoneNull.map((item) => (
                        <input id={itemCard.name} className={`App-${item}`} placeholder={item}
                            onChange={(e) => updateAttribute(e)} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ModalPokemon