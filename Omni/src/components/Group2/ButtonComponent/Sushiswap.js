import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sushiswap from '../../../images/sushiswap.png'
import './style.css';

function Sushiswap_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Sushiswap } className='button_image' /><span className='left'>Uniswap</span>
    </Button>
  )
}

export default Sushiswap_Button;
