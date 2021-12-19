import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ploygon from '../../../images/polygon.png'
import './style.css';

function Ploygon_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Ploygon } className='button_image' /><span className='left'>Ploygon</span>
    </Button>
  )
}

export default Ploygon_Button;
