import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../src/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function Newrelease() {
    const data = [{
        nameSong: 'Sky Fall',
        artis: 'Adele',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/WeeklyTop/SkyFall.png?raw=true',
      },
      {
        nameSong: 'Softcore',
        artis: 'The Neighbourhood',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/WeeklyTop/Softcore.png?raw=true',
      },
      {
        nameSong: 'Superman',
        artis: 'Eminem',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/WeeklyTop/Superman.png?raw=true',
      },
      {
        nameSong: 'The Loneliest',
        artis: 'Maneskin',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/WeeklyTop/TheLoneliest.png?raw=true',
      },
      {
        nameSong: 'The Loneliest',
        artis: 'Maneskin',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/WeeklyTop/TheLoneliest.png?raw=true',
      }]
    
      return (
        <div>
          <h1 className='mt-5 mb-4' style={{color:'white', fontSize:'32px'}} >New Release <span style={{color:'rgba(238, 16, 176, 1)'}}>Songs</span> </h1>
          <section className='d-flex justify-content-between'>
            {data.map((item) => (
              <Card className='d-flex flex-column align-items-center mt-2 ' style={{width:'180px', height:'220px', backgroundColor:' #1F1F1F', borderRadius: '10px'}} >
                <Card.Img  className='mt-2' src={item.imgLink} style={{ width: '150px', height:'150px' }} />
                <Card.Body className='p-0 mt-1' style={{width:'150px', height:'42px',padding:'none'}}>
                  <Card.Title style={{fontSize:'16px', color:'white',padding:'none'}}>{item.nameSong}</Card.Title>
                  <Card.Text  style={{fontSize:'12px', color:'white', opacity: '0.7' }}>
                    {item.artis}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
            <div className='d-flex flex-column justify-content-center'>
             <span className='d-flex justify-content-center align-items-center' style={{width:'62px', height: '63px',backgroundColor:'#1F1F1F',borderRadius:'50%', cursor:'pointer'}}>
              <FontAwesomeIcon icon={faPlus} size="xl" style={{ color:'white', cursor:'pointer'}} />
              </span>
            <span style={{color:'white',width: '93px', height: '31px', fontSize:'20px',fontWeight:'600'}}>View All</span>
            </div>
          </section>
        </div>
  )
}

export default Newrelease