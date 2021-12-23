import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pancakeswap from '../../images/pancakeswap.png'
import './style.css';

function Pancakeswap_Button(){
  return (
    <Button className='button_background'>
      <img src={ Pancakeswap } className='button_image' /><span>Pancakeswap</span>
    </Button>
  )
}

export default Pancakeswap_Button;
