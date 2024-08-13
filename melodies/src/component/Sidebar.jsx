import React from 'react'
import Nav from 'react-bootstrap/Nav';


function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column"  >
      <Nav.Link href="/home">Melodies</Nav.Link>
      
      <Nav.Link eventKey="link-1">Menu</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav>
  )
}

export default Sidebar