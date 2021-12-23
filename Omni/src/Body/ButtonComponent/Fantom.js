import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fantom from '../../images/fantom.png'
import './style.css';

function Fantom_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Fantom } className='button_image' /><span className='left'>Fantom</span>
    </Button>
  )
}

export default Fantom_Button;
