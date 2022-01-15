import React from 'react'
import {
  Navbar, Container, Nav, Image
} from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import banner from '../assets/images/logo-nav.png'

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="">
        <Image src={banner} width={50} className="banner"></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="ms-5" href="https://chainwars.gg/" target="_blank"><FaHome></FaHome></Nav.Link>
          <Nav.Link className="ms-5" href="https://chainwars.gg/" target="_blank">News</Nav.Link>
          {/* <NavDropdown className="ms-5" title="News" id="collasible-nav-dropdown">
            <NavDropdown.Item href="">News1</NavDropdown.Item>
            <NavDropdown.Item href="">News2</NavDropdown.Item>
            <NavDropdown.Item href="">News3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">News</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link className="ms-5">Lootbox</Nav.Link>
          <Nav.Link className="ms-5">Collections</Nav.Link>
          <Nav.Link className="ms-5">Market</Nav.Link>
          <Nav.Link className="ms-5" href="https://docs.chainwars.gg/" target="_blank">Learn</Nav.Link>
          {/* <NavDropdown className="ms-5" title="Learn" href="https://docs.chainwars.gg/" target="_blank" id="collasible-nav-dropdown">
            <NavDropdown.Item href="">Learn1</NavDropdown.Item>
            <NavDropdown.Item href="">Learn2</NavDropdown.Item>
            <NavDropdown.Item href="">Learn3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Learn more</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
