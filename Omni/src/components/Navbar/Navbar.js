import React from 'react';
import {Container, Navbar, Button} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navb(){
  return (
    <Navbar expand="xxl" className='white'>
      <Container className="removeback justify-content-end">
        <Navbar className='nav-item nav-link text-white page2'>Home</Navbar>
        <Navbar className='nav-item nav-link text-white page2'>Page1</Navbar>
        <Navbar className='nav-item nav-link text-white page2'>Page2</Navbar><AiOutlineMenu/>
        <Button className='nav-item nav-link text-white button_margin' variant="primary" size="lg">Action Button</Button>
     </Container>
    </Navbar>
  )
}

export default Navb;
