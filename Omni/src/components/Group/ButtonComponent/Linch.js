import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Linch from '../../../images/linch.png';
import './style.css';

function Linch_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Linch } className='button_image' /><span className='left'>Linch</span>
    </Button>
  )
}

export default Linch_Button;
