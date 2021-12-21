import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certik from '../../images/certik.png'
import Uniswap_Button from './ButtonComponent/Uniswap.js';
import Avalanche_Button from './ButtonComponent/Avalanche.js';
import BSC_Button from './ButtonComponent/BSC.js';
import Ethereum_Button from './ButtonComponent/Ethereum.js';
import Fantom_Button from './ButtonComponent/Fantom.js';
import Harmony_Button from './ButtonComponent/Harmony.js';
import Linch_Button from './ButtonComponent/Linch.js';
import OxProtocol_Button from './ButtonComponent/OxProtocol';
import Pancakeswap_Button from './ButtonComponent/Pancakeswap.js';
import Pangolin_Button from './ButtonComponent/Pangolin.js';
import Ploygon_Button from './ButtonComponent/Ploygon.js';
import Quickswap_Button from './ButtonComponent/Quickswap.js';
import Solarbeam_Button from './ButtonComponent/Solarbeam.js';
import Spiritswap_Button from './ButtonComponent/Spiritswap.js';
import Sushiswawp_Button from './ButtonComponent/Sushiswap.js';
import XDai_Button from './ButtonComponent/XDai.js';
import './group.css';

function Picturegroup(){
  return (
    <Container className='text-white grant-top'>
      <h1 className='title'><strong><span className='color'>OMNI </span> SUPPORTS</strong></h1>
      <Row>
        <Col sm={6} md={6} lg={6} className='text-white'>
          <h2>DEXES</h2>
        </Col>
        <Col sm={6} md={6} lg={6} className='text-white'>
          <h2>BLOCKCHAINS</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={3} md={3} lg={3} className='text-white icon_block'>
          <Uniswap_Button/>
          <Pangolin_Button />
          <Sushiswawp_Button />
          <Pancakeswap_Button />
          <Solarbeam_Button />
        </Col>

        <Col sm={3} md={3} lg={3} className='text-white icon_block'>
          <Quickswap_Button />
          <Linch_Button/>
          <OxProtocol_Button />
          <Ploygon_Button />
          <Spiritswap_Button />
        </Col>

        <Col sm={3} md={3} lg={3} className='text-white icon_block'>
          <Ethereum_Button />
          <Fantom_Button />
          <Avalanche_Button />
          <Harmony_Button />
        </Col>

        <Col sm={3} md={3} lg={3} className='text-white icon_block'>
          <Ploygon_Button />
          <XDai_Button />
          <Ploygon_Button />
          <BSC_Button />
        </Col>
      </Row>
    </Container>
  )
}

export default Picturegroup;
