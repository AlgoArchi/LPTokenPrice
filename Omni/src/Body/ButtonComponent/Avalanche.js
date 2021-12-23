import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Avalanche from '../../images/avalanche.png'
import './style.css';

function Avalanche_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Avalanche } className='button_image' /><span className='left'>Avalanche</span>
    </Button>
  )
}

export default Avalanche_Button;
