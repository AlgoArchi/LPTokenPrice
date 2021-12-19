import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Solarbeam from '../../../images/solarbeam.png'
import './style.css';

function Solarbeam_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Solarbeam } className='button_image' /><span className='left'>Solarbeam</span>
    </Button>
  )
}

export default Solarbeam_Button;
