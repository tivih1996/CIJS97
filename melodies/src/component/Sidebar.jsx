import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import '../../src/App.scss'
import Button from 'react-bootstrap/esm/Button';




function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column"  >
      <Container className='mt-5' >
        <Container className='p-0' >
        <span className='melodies'>Melodies</span>
        </Container>
        
        <Container className='p-0 mt-4' style={{color:'white', fontWeight: 600}}>
          <Container className='p-0'>
          <h6 className='tiltle-sidebar'>Menu</h6>
          <p >Home</p>
          <p>Discover</p>
          <p>Albums</p>
          <p>Artists</p>
          </Container>
          <Container className='p-0'>
          <h6 className='tiltle-sidebar'>Library</h6>
          <p>Recently Added</p>
          <p>Most played</p>
          </Container>
          <Container className='p-0'>
          <h6 className='tiltle-sidebar'>Playlist an favorite</h6>
          <p>Your favorites</p>
          <p>Your playlist</p>
          <p style={{color: '#0E9EEF'}}>Add playlist</p>
          </Container>
          <Container className='p-0'>
          <h6 className='tiltle-sidebar'>General</h6>
          <p>Setting</p>
          </Container>
          <h6 className='tiltle-sidebar' style={{opacity:'1',fontSize:'24px'}}>Logout</h6>
        </Container>
      </Container>
    </Nav>
  )
}

export default Sidebar