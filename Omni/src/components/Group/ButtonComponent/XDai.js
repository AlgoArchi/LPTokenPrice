import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import xDai from '../../../images/xdai.png'
import './style.css';

function xDai_Button(){
  return (
    <Button className='button_background'>
      <Image src={ xDai } className='button_image' /><span className='left'>xDai</span>
    </Button>
  )
}

export default xDai_Button;
