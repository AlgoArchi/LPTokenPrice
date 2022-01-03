import React from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Header() {
    return (
        <Navbar expand="xxl" className='white'>
            <Container className="justify-content-end">
                <Navbar className='nav-item items nav-link text-white'>Home</Navbar>
                <Navbar className='nav-item items nav-link text-white'>Page1</Navbar>
                <Navbar className='nav-item items nav-link text-white'>Page2</Navbar>

                <Navbar className='nav-item nav-link text-white Nav_icon_button'>
                    <Button style={{ backgroundColor: 'transparent', border: 0 }}><AiOutlineMenu className='Nav_icon' /></Button>
                </Navbar>

                <Navbar className='nav-item nav-link text-white'>
                    <Button className='Nab_button' variant="primary" size="lg">Action Button</Button>
                </Navbar>

            </Container>
        </Navbar>
    )
}

export default Header;
