import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';


function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column"  >
      <Container>
        <h5>MELODIES</h5>
        <Container>
          <p>Menu</p>
        </Container>
      </Container>
    </Nav>
  )
}

export default Sidebar