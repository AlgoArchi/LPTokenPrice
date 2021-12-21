import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Group from '../images/Group.png';
import Arrow from '../images/arrow.png';
import Graph from '../images/graphic.png';
import Harmony from '../images/harmony.png'
import Polygon from '../images/polygon.png'
import Near from '../images/near.png'
import Certik from '../images/certik.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Mainbody() {
    return (
        <Container>
            {/*  --- New Release --- */}
            <div className='top Omni_chain_container'>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={6} className='text-white'>
                        <div style={{marginBottom:"2rem"}}>
                            <h5 style={{fontSize: "1.5rem", margin: 0, textAlign: "left"}}>NEW RELEASE</h5>
                            <div>
                                <strong><h2 className='Omni_chain'><span className='color'>OMNI-CHAIN<br/> EXCHANGE</span><br/>PROTOCOL</h2></strong>
                            </div>
                            <div>
                                <p className='release_para'>The Omni-DEX is a cross-chain exchange allowing the swap of thousands of tokens across 8 different blockchains seamlessly</p>
                            </div>
                            <Button className='text-white start_trading_button' variant="primary" size="lg">Start Trading <Image src={Arrow} height={17} width={45} alt='arrow' /></Button>
                        </div>
                    </Col>

                    {/*  Search form  */}
                    <Col sm={12} md={12} lg={12} xl={6} className='text-white'>
                        <div className='search_back'>
                            <p className='text-white' style={{ fontSize: "1.75rem" }}>Complete multi chain<br />swaps in 1 click!</p>
                            
                            <div className='input_search'>
                                <div>
                                    <div>
                                        <FiSearch
                                            className='search_icon'
                                            size={26}
                                            color={"#fff"}
                                        />
                                        <input
                                            className='search_input_field'
                                            type='text'
                                            placeholder='Search name or paste address'
                                        />
                                    </div>
                                </div>
                                <button type='button'>
                                    <BsFillStarFill color='#fff' size={24} />
                                </button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

            {/*  There picture "Multi,, 8 Blochain,, Trade ,"  */}
            <div className='top'>
                <div className='three_picture'>
                    <Row>
                        <Col sm={12} md={6} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h3 className='three_picture_title'>Multi-chain swaps</h3>
                            <p className='three_picture_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h1 className='three_picture_title'>8 Blockchains</h1>
                            <p className='three_picture_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                        <Col sm={12} md={12} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h1 className='three_picture_title'>Trade 10000+ assets</h1>
                            <p className='three_picture_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                    </Row>
                </div>
            </div>

                {/*  Graphic  */}
            <div className='top'>
                <Row>
                    <div className='justify-content-end'>
                        <h2 className='text-white what_omni'><strong>WHAT IS <span className='color'>OMNI?</span></strong></h2>
                    </div>
                    <Col md={6} className='text-white'>
                        <Image src={Graph} className='graphsize' />
                    </Col>
                    <Col md={6} className='text-white top'>
                        <p className='release_para'>
                            Omni is the ultimate exchange protocol that allows users to exchange a token from one chain to another with ease.Featuring Ethereum, Smart Chain, Avalanche, Polygon, Fantom, and more by utilizing over 50 decentralized exchanges.
                        </p>
                    
                    <Row className='buttonGroup_margin'>
                        <Col sm={6}>
                            <Button className='text-white button_1'>
                                Action Button 
                                <Image
                                    src={Arrow} 
                                    height={17} 
                                    width={45} 
                                    alt='arrow' />
                            </Button>
                            </Col>
                        <Col sm={6}><Button className='text-white button_2'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button></Col>
                    </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Mainbody;