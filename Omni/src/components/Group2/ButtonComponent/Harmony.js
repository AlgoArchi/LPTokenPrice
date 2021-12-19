import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Harmony from '../../../images/harmony.png'
import './style.css';

function Harmony_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Harmony } className='button_image' /><span className='left'>Harmony</span>
    </Button>
  )
}

export default Harmony_Button;
