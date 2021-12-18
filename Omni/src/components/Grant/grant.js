import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Harmony from '../../images/harmony.png'
import Polygon from '../../images/polygon.png'
import Near from '../../images/near.png'
import './grant.css';

function Grant(){
  return (
    <Container className='text-white grant-top'>
      <h1 className='title'><strong>GRANTS FOR <span className='color'>OMNI</span></strong></h1>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tompor incididunt ut labore et dolore magana aliqua.</p>
      <Row className='Top'>
        <Col md={6} className='text-white'>
          <div className='icon_back'>
            <Image src={Polygon} className='iconsize' /> <span className='sidespace'><strong> Matic Grant</strong></span>
          </div>
          <div className='icon_back'>
            <Image src={Near} className='iconsize' /> <span className='sidespace'><strong> Near Grant</strong></span>
          </div>
        </Col>
        <Col md={6} className='text-white'>
          <div className='icon_back'>
            <Image src={Harmony} className='iconsize' /> <span className='sidespace'><strong> Harmony Grant</strong></span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Grant;
