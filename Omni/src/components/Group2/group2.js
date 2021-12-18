import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certik from '../../images/certik.png'
import './group2.css';
import Uniswap_Button from './ButtonComponent/Uniswap.js';
import Avalanche_Button from './ButtonComponent/Avalanche.js';
import BSC_Button from './ButtonComponent/BSC.js';
import Ethereum_Button from './ButtonComponent/Ethereum.js';
import Fantom_Button from './ButtonComponent/Fantom.js';
import Harmony_Button from './ButtonComponent/Harmony.js';
import linch_Button from './ButtonComponent/linch.js';
import OxProtocol_Button from './ButtonComponent/OxProtocol';
import Pancakeswap_Button from './ButtonComponent/Pancakeswap.js';
import Pangolin_Button from './ButtonComponent/Pangolin.js';
import Ploygon_Button from './ButtonComponent/Ploygon.js';
import Quickswap_Button from './ButtonComponent/Quickswap.js';
import Solarbeam_Button from './ButtonComponent/Solarbeam.js';
import Spiritswap_Button from './ButtonComponent/Spiritswap.js';
import Sushiswawp_Button from './ButtonComponent/Sushiswap.js';
import xDai_Button from './ButtonComponent/xDai.js';

function Picture_group(){
  return (
    <Container className='text-white grant-top'>
      <h1 className='title'><strong><span className='color'>OMNI </span> SUPPORTS</strong></h1>
      <Row>
        <Col sm={3} className='text-white'>
          <p className='dexes'>DEXES</p>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className='text-white'>
          <Uniswap_Button/>
        </Col>

        <Col sm={3} className='text-white icon_block'>
          <div className='group_icon'>
            <Image src={Certik} className='iconsize' /> <span className='sidespace'>CertiK Audit</span>
          </div>
        </Col>

        <Col sm={3} className='text-white icon_block'>
          <div className='group_icon'>
            <Image src={Certik} className='iconsize' /> <span className='sidespace'>CertiK Audit</span>
          </div>
        </Col>

        <Col sm={3} className='text-white icon_block'>
          <div className='group_icon'>
            <Image src={Certik} className='iconsize' /> <span className='sidespace'>CertiK Audit</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Picture_group;
