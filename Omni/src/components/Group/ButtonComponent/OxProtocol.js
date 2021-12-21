import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ox from '../../../images/Ox.png'
import './style.css';

function Ox_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Ox } className='button_image' /><span className='left'>Ox Protocol</span>
    </Button>
  )
}

export default Ox_Button;
