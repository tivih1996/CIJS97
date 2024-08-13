
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md"  className="bg-body-tertiary">
                <Container>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-info">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#features">Contact</Nav.Link>
                            <Nav.Link href="#pricing">Premium</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header