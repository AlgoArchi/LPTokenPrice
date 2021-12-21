import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Image} from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Group from '../../images/Group.png';
import Arrow from '../../images/arrow.png';
import Graph from '../../images/graphic.png';
import Harmony from '../../images/harmony.png'
import Polygon from '../../images/polygon.png'
import Near from '../../images/near.png'
import Certik from '../../images/certik.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mainstyle.css';

function Mainbody(){
  return (
    <Container>
        {/*  --- New Release --- */}
      <div className='top'>
        <Row>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <h3 className='release'>New Release</h3>
            <div>
              <strong><p className='omnichain'><span className='color'>OMNI-CHAIN EXCHANGE </span> PROTOCOL</p></strong>
            </div>
            <p className='line-heigh' style={{fontSize:30}}>The Omni-DEX is a cross-chain exchange allowing the swap of thousands of tokens across 8 different blockchains seamlessly</p>
            <Button className='text-white start_trading_button' variant="primary" size="lg">Start Trading <Image src={Arrow} height={17} width={45} alt='arrow' /></Button>
          </Col>
              
                {/*  Search form  */}
          <Col sm={6} md={6} lg={6} className='text-white'>
            <div className='search_back'>
              <p className='text-white' style={{ fontSize: 30, paddingTop:50 }}>Complete multi chain<br/>swaps in 1 click!</p>
              <div className="text-white group-padding">
                <InputGroup.Text className='search_icon'><FiSearch/></InputGroup.Text>
                <FormControl className='input_style text-white' placeholder="Search name or paste address" size="lg"/>
                <Button className='star'><BsFillStarFill /></Button>
              </div>
            </div>
          </Col>

        </Row>
      </div>

            {/*  There picture "Multi,, 8 Blochain,, Trade ,"  */}
      <div className='GroupTop'>
        <Row>
          <Col sm={4} md={4} lg={4} className='text-white'>
            <Image src={Group} className='imgSize' />
            <h1 className='space'>Multi-chain swaps</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
          </Col>
          <Col sm={4} md={4} lg={4} className='text-white'>
            <Image src={Group} className='imgSize' />
            <h1 className='space'>8 Blockchains</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
          </Col>
          <Col sm={4} md={4} lg={4} className='text-white'>
            <Image src={Group} className='imgSize' />
            <h1 className='space'>Trade 10000+ assets</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
          </Col>
        </Row>
      </div>

          {/*  Graphic  */}
      <div className='GroupTop'>
        <Row>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <Image src={Graph} className='graphsize' />
          </Col>
          <Col sm={6} md={6} lg={6} className='text-white top'>
            <h1 className='title'><strong>WHAT IS <span className='color'>OMNI?</span></strong></h1>
            <p className='para'>Omni is the ultimate exchange protocol that allows users to exchange a token from one chain to another with ease.Featuring Ethereum, Smart Chain, Avalanche, Polygon, Fantom, and more by utilizing over 50 decentralized exchanges.</p>
            <Row className='buttonGroup_margin'>
              <Col sm={6} md={6} lg={6}><Button className='text-white button_1'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button></Col>
              <Col sm={6} md={6} lg={6}><Button className='text-white button_2'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button></Col>
            </Row>
          </Col>
        </Row>
      </div>

          {/* GRANT FPR OMNI */}
      <div className='GroupTop text-white'>
        <h1 className='title'><strong>GRANTS FOR <span className='color'>OMNI</span></strong></h1>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tompor incididunt ut labore et dolore magana aliqua.</p>
        <Row className='Top'>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <div className='icon_back'>
              <Image src={Polygon} className='iconsize' /> <span style={{paddingLeft:30}}><strong> Matic Grant</strong></span>
            </div>
            <div className='icon_back'>
              <Image src={Near} className='iconsize' /> <span style={{ paddingLeft: 30 }}><strong> Near Grant</strong></span>
            </div>
          </Col>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <div className='icon_back'>
              <Image src={Harmony} className='iconsize' /> <span style={{ paddingLeft: 30 }}><strong> Harmony Grant</strong></span>
            </div>
          </Col>
        </Row>
      </div>


      <div className='GroupTop text-white'>
        <h1 className='title'><strong><span className='color'>OMNI </span> AUDITS</strong></h1>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisciping<br />elit, sed do eiusmod tempor incididunt ut labore</p>
        <Row className='Top'>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <div className='icon_back'>
              <Image src={Certik} className='iconsize' /> <span className='sidespace'><strong> CertiK Audit</strong></span>
            </div>

          </Col>
          <Col sm={6} md={6} lg={6} className='text-white'>
            <Button className='text-white button2' variant="primary" size="lg">Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Mainbody;
