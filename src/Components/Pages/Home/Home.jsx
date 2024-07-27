import React from 'react'
import "./Home.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import munlogo from "../../../images/mun_logo.png";

const Home = () => {
  return (
    <div className="home">
    <Navbar expand="lg" className="home-nav">
      <Container fluid>
        <Navbar.Brand href="#"><img src={munlogo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='home-nav-links'>About Us</Nav.Link>
            <Nav.Link href="#action2" className='home-nav-links'>Past Event</Nav.Link>
            <Nav.Link href="#action3" className='home-nav-links'>Team</Nav.Link>
            <Nav.Link href="#" className='home-nav-links'>
              FAQs
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" className='home-button'>Contact Us</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Home