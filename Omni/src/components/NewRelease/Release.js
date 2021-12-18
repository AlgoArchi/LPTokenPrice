import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, } from "react-bootstrap";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Release.css';

function Release(){
  return (
    <Container className='top'>
      <Row>
        <Col xxl={6} className='text-white'>
          <h3 className='release'>New Release</h3>
          <div>
            <strong><p className='omnichain'><span className='color'>OMNI-CHAIN EXCHANGE </span> PROTOCOL</p></strong>
          </div>
          <p className='release line-heigh'>The Omni-DEX is a cross-chain exchange allowing the swap of thousands of tokens across 8 different blockchains seamlessly</p>
          <Button className='text-white button-size' variant="primary" size="lg">Start Trading <HiOutlineArrowNarrowRight /></Button>
        </Col>
        <Col xxl={6} className='text-white'>
          <div className='search_back'>
            <p className='release search_top text-white'>Complete multi chain<br/>swaps in 1 click!</p>
            <InputGroup className="text-white group-padding">
              <InputGroup.Text className='search_icon'><FaSearch/></InputGroup.Text>
              <FormControl className='input_style text-white' placeholder="Search name or paste address" size="lg"/>
              <InputGroup.Text className='star'><BsFillStarFill /></InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Release;
