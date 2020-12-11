import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import images from './images.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



function Navi(){

    return(
        <div> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={images} height="30px" width="30px" alt="logo"/> Health-Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Book Appointment</Nav.Link>
            <Nav.Link href="#pricing">View Doctors</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Give Feedback</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
</div>

    )
}
export default Navi;