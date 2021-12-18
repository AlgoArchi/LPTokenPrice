import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certik from '../../images/certik.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './audit.css';

function Audit(){
  return (
    <Container className='text-white grant-top'>
      <h1 className='title'><strong><span className='color'>OMNI </span> AUDITS</strong></h1>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisciping<br/>elit, sed do eiusmod tempor incididunt ut labore</p>
      <Row className='Top'>
        <Col md={6} className='text-white'>
          <div className='icon_back'>
            <Image src={Certik} className='iconsize' /> <span className='sidespace'><strong> CertiK Audit</strong></span>
          </div>
          
        </Col>
        <Col md={6} className='text-white'>
        <Button className='text-white button2' variant="primary" size="lg">Action Button <HiOutlineArrowNarrowRight /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Audit;
