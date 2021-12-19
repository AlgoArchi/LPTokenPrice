import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spiritswap from '../../../images/spiritswap.png'
import './style.css';

function Spiritswap_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Spiritswap } className='button_image' /><span className='left'>Spiritswap</span>
    </Button>
  )
}

export default Spiritswap_Button;
