import React from 'react';
import {Container, Navbar, Button} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Navb(){
  return (
    <Navbar expand="lg" className='white'>
      <Container className="justify-content-end" style={{ fontSize: 26}}>
        <Navbar className='nav-item nav-link text-white'>Home</Navbar>
        <Navbar className='nav-item nav-link text-white'>Page1</Navbar>
        <Navbar className='nav-item nav-link text-white'>Page2</Navbar>
        
        <Navbar className='nav-item nav-link text-white'>
          <Button style={{backgroundColor:'transparent', border:0}}><AiOutlineMenu className='list_icon' /></Button>
        </Navbar>

        <Navbar className='nav-item nav-link text-white'>
          <Button className='Nab_button' variant="primary" size="lg">Action Button</Button>
        </Navbar>
     
     </Container>
    </Navbar>
  )
}

export default Navb;
