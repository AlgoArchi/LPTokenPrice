import React from 'react';
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

import Group from '../../images/Group.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './group1.css';

function Third_part(){
  return (
    <Container>
      <Row className='GroupTop'>
        <Col md={4} className='text-white'>
          <Image src={Group} className='imgSize' />
          <h1 className='space'>Multi-chain swaps</h1>
          <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
        </Col>
        <Col md={4} className='text-white'>
          <Image src={Group} className='imgSize' />
          <h1 className='space'>8 Blockchains</h1>
          <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
        </Col>
        <Col md={4} className='text-white'>
          <Image src={Group} className='imgSize' />
          <h1 className='space'>Trade 10000+ assets</h1>
          <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Third_part;
