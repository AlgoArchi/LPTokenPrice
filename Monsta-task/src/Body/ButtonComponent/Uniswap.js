import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Uniswap from '../../images/uniswap.png'
import './style.css';

function Uniswap_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Uniswap } className='button_image' /><span className='left'>Uniswap</span>
    </Button>
  )
}

export default Uniswap_Button;
