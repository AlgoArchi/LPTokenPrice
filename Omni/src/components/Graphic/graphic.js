import React from 'react';
import { Container, Row, Col, Image, Button} from "react-bootstrap";
import Graph from '../../images/graphic.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './graphic.css';

function Graphic(){
  return (
    <Container className='top'>
      <Row className='GroupTop'>
        <Col md={6} className='text-white'>
          <Image src={Graph} className='graphsize' />
        </Col>
        <Col md={6} className='text-white second'>
          <h1 className='title'><strong>WHAT IS <span className='color'>OMNI?</span></strong></h1>
          <p className='para'>Omni is the ultimate exchange protocol that allows users to exchange a token from one chain to another with ease.Featuring Ethereum, Smart Chain, Avalanche, Polygon, Fantom, and more by utilizing over 50 decentralized exchanges.</p>
          <Row>  
            <Col sm={6}><Button className='text-white button1'  variant="primary" size="lg">Action Button <HiOutlineArrowNarrowRight /></Button></Col>
            <Col sm={6}><Button className='text-white button2' variant="primary" size="lg">Action Button <HiOutlineArrowNarrowRight /></Button></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Graphic;
