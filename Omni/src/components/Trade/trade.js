import React from 'react';
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Ethereum from '../../images/ethereum.png'
import Arrow from '../../images/arrow.png'
import './trade.css';

function Trade(){
  return (
    <Container className='text-white grant-top'>
      <h1 className='title'><strong>TRADE <span className='color'>YOUR TOKEN</span><br/>DIRECTLY ON<br/><span className='color'>YOUR PLATFORM!</span></strong></h1>
      <p className='para'>The Omni Relay Widget enables users to buy and sell tokens on any website.<br/>This means that your users can buy token, without having to leave your website!<br/>It's free and easy to setup. Already joined 40+ projects.</p>
      <div>
        <Button className='text-white button_trade' variant="primary" size="lg">Action Button <HiOutlineArrowNarrowRight /></Button>
      </div>
      <div className='calculation_container'>
        <span className='cal_title'>Omni-DEX
          <FiSettings size={33}/>
        </span>
        
        <div className='cal_change'>
          <img src={Ethereum} height={38} width={38} alt='token'/>
          
          <div className='ETH_container'>
            <div className='ETH_amount_input_container'>
              <p>1</p>
              <input type='text' />
              <button type='button'>
                ETH
              </button>
            </div>
            
            <div>
              <button className='amount_info_button'>
                $4,259
              </button>
            </div>
          </div>

          <div className='calc_arrow'>
            <button>
              <img src={Arrow} height={17} width={45} alt='arrow' />
            </button>
          </div>
          <img src={Ethereum} height={38} width={38} alt='token'/>

          <div className='ETH_container'>
            <div className='ETH_amount_input_container'>
              <input type='text' />
              <button type='button'>
                OMNI
              </button>
            </div>
            <div>
              <button className='amount_info_button'>
                $4,259
              </button>
              <button className='amount_info_button'>
                $4,259
              </button>
            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default Trade;
