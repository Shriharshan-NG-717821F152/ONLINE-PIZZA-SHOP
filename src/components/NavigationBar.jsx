import React from 'react'
import { Navbar,Nav,Container, NavbarBrand,Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant='light'>
      <Container>
        <NavbarBrand>
          <Image src="images/pizz.png" alt="logo"  style={{height:'50px'}}/>
        </NavbarBrand>
        <Navbar.Brand href="#home">GAYA3 PIZZA'S</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="Login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Cart">
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar
