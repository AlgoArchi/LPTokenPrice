import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import linch from '../../../images/linch.png'
import './style.css';

function linch_Button(){
  return (
    <Button className='button_background'>
      <Image src={ linch } className='button_image' /><span className='left'>Uniswap</span>
    </Button>
  )
}

export default linch_Button;
