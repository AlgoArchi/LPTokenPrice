import React from 'react';
import { Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ethereum from '../../../images/ethereum.png'
import './style.css';

function Ethereum_Button(){
  return (
    <Button className='button_background'>
      <Image src={ Ethereum } className='button_image' /><span className='left'>Uniswap</span>
    </Button>
  )
}

export default Ethereum_Button;
