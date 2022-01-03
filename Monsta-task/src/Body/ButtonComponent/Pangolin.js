import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pangolin from '../../images/pangolin.png'
import './style.css';

function Pangolin_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Pangolin } className='button_image' /><span className='left'>Pangolin</span>
    </Button>
  )
}

export default Pangolin_Button;
