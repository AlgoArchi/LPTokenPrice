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
    <div>
      <Container className='text-white grant-top'>
        <h1 className='title'><strong>TRADE <span className='color'>YOUR TOKEN</span><br/>DIRECTLY ON<br/><span className='color'>YOUR PLATFORM!</span></strong></h1>
        <p className='para'>The Omni Relay Widget enables users to buy and sell tokens on any website.<br/>This means that your users can buy token, without having to leave your website!<br/>It's free and easy to setup. Already joined 40+ projects.</p>
        <div>
          <Button className='text-white button_trade'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
        </div>
        
        <div className='calculation_container'>
          <span className='cal_title'>Omni-DEX
            <FiSettings size={33}/>
          </span>
          
          <div className='cal_change'>
            <div className='ehtereum_picture'>
              <img src={Ethereum} height={43} width={43} alt='token'/>
            </div>

            <div className='ETH_container'>
              <div className='ETH_amount_input_container'>
                <p>1</p>
                <input type='text' />
                <button type='button'>
                  ETH
                </button>
              </div>
              
              <div>
                <input className='amount_info_button' value={"$4, 259"} disabled/>
              </div>
            </div>

            <div className='calc_arrow'>
              <button>
                <img src={Arrow} height={17} width={45} alt='arrow' />
              </button>
            </div>
            <div className='ehtereum_picture'>
              <img src={Ethereum} height={43} width={43} alt='token'/>
            </div>

            <div className='ETH_container'>
              <div className='ETH_amount_input_container'>
                <input type='text' />
                <button type='button'>
                  OMNI
                </button>
              </div>
              <div>
                <input className='amount_info_button' value={"$4, 259"} disabled />
                <input className='amount_info_button amount_info_button_right' value={"Est.Fee $70"} disabled/>  
              </div>
            </div>

            <div>
              <Button className='text-white button_trade'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
            </div>

          </div>
        </div>

        <div className='calculation_container cal_title'>
          <div>
            <h1 style={{fontSize:55}}><strong>DOCUMENTATION</strong></h1>
            <span className='cal_title'>Find out more about our Multi-Chain solution and platform</span>
          </div>
          <div style={{marginTop:25}}>
            <Button className='text-white button_trade'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
          </div>
        </div>
      </Container>
      <div className='subscribe_container'>
        <Container>
          <div className='subscribe_content'>
            <div >
              <h3 style={{fontSize:50}}>Subscribe to our newsletter</h3>
              <span className='cal_title'>Find in your email to receive Omni's latest<br/>info and updates</span>
            </div>
            
            <div className='subscribe_input_container'>
                <input type='text' placeholder='Email Address'/>
                <Button>Action Button</Button>
              </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Trade;
