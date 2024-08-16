import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../src/App.scss'

function PosterHome() {
  const data = [{
    name: 'HieuThuHai',
    img: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Poster/HieuThuHai.png?raw=true'
  },
  {
    name: 'Billie Eilish',
    img: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Poster/BillieElish.png?raw=true'
  },
  {
    name: 'Maroon 5',
    img: 'https://raw.githubusercontent.com/tivih1996/CIJS97/master/melodies/src/image/Poster/Maroon5.png'
  }
  ]
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item >
          <img
            className="position-relative start-50 translate-middle-x "
            style={{width:'900px',height:'350px', borderRadius:'10px'}}
            src={item.img}
            alt={item.name}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default PosterHome