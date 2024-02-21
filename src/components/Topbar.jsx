import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {GiFullPizza } from 'react-icons/gi'
const Topbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className="text-light">
                <GiFullPizza className='text- warning'/> &nbsp;&nbsp;
                Free Home Delivery on Order Above 500/- Rupees</h6> 
            <Nav className="ms-auto">
                <LinkContainer to="/home" activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Aboutus" activeClassName>
                    <Nav.Link>AboutUs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy" activeClassName>
                    <Nav.Link>Terms and Policy</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    
      
    </>
  )
}

export default Topbar
