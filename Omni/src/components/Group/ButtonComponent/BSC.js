import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BSC from '../../../images/bsc.png'
import './style.css';

function BSC_Button(){
  return (
    <Button className='button_background'>
      <Image src={ BSC } className='button_image' /><span className='left'>BSC</span>
    </Button>
  )
}

export default BSC_Button;
