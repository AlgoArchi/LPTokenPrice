import React from 'react';
import Logo from './logo';
import {  Navbar,Nav, Form,FormControl,Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


const CustomNavbar = () => {
    return ( 
        <>
         <Navbar style={{ backgroundColor: 'pink' }}variant="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand ><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                         style={{ maxHeight: '100px' }}
                         navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Contact Us</Nav.Link>
                        <Nav.Link href="/">About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</>
    );
};

export default CustomNavbar;