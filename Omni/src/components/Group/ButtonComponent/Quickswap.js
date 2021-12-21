import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quickswap from '../../../images/quickswap.png'
import './style.css';

function Quickswap_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Quickswap } className='button_image' /><span className='left'>Quickswap</span>
    </Button>
  )
}

export default Quickswap_Button;
