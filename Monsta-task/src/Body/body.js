import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Group from '../images/Group.png';
import Arrow from '../images/arrow.png';
import Graph from '../images/graphic.png';
import Harmony from '../images/harmony.png'
import Polygon from '../images/polygon.png'
import Near from '../images/near.png'
import Certik from '../images/certik.png'
import Uniswap_Button from './ButtonComponent/Uniswap.js';
import Avalanche_Button from './ButtonComponent/Avalanche.js';
import BSC_Button from './ButtonComponent/BSC.js';
import Ethereum_Button from './ButtonComponent/Ethereum.js';
import Fantom_Button from './ButtonComponent/Fantom.js';
import Harmony_Button from './ButtonComponent/Harmony.js';
import Linch_Button from './ButtonComponent/Linch.js';
import OxProtocol_Button from './ButtonComponent/OxProtocol';
import Pancakeswap_Button from './ButtonComponent/Pancakeswap.js';
import Pangolin_Button from './ButtonComponent/Pangolin.js';
import Ploygon_Button from './ButtonComponent/Ploygon.js';
import Quickswap_Button from './ButtonComponent/Quickswap.js';
import Solarbeam_Button from './ButtonComponent/Solarbeam.js';
import Spiritswap_Button from './ButtonComponent/Spiritswap.js';
import Sushiswawp_Button from './ButtonComponent/Sushiswap.js';
import XDai_Button from './ButtonComponent/XDai.js';
import { FiSettings } from "react-icons/fi";
import Ethereum from '../images/ethereum.png';
import facebook from "../images/fb.svg";
import discord from "../images/discord.svg";
import github from "../images/github.svg";
import email from "../images/mail.svg";
import twitter from "../images/twitter.svg";
import telegram from "../images/telegram.svg";
import coingecko from "../images/coingecko.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Mainbody() {
    return (
        <div>
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
                                <p className='text-white'>Complete multi chain<br />swaps in 1 click!</p>
                                
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
                                <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='text-white'>
                                <Image src={Group} className='imgSize' />
                                <h1 className='three_picture_title'>8 Blockchains</h1>
                                <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                            </Col>
                            <Col sm={12} md={12} lg={4} className='text-white'>
                                <Image src={Group} className='imgSize' />
                                <h1 className='three_picture_title'>Trade 10000+ assets</h1>
                                <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                            </Col>
                        </Row>
                    </div>
                </div>

                    {/*  Graphic  */}
                <div className='top'>
                    <div className='what_omni_container'>
                        <h1 className='what_omni_head text-white'><strong>WHAT IS <span className='color'>OMNI?</span></strong></h1>
                        <div className='text-white graph'>
                            <Image src={Graph} className='graphsize' />
                        </div>
                        <div className='text-white'>
                            <p className='what_omni_para'>Omni is the ultimate exchange protocol that allows users to exchange a token from one chain to another with ease.Featuring Ethereum, Smart Chain, Avalanche, Polygon, Fantom, and more by utilizing over 50 decentralized exchanges.</p>
                            <div className='buttonGroup_margin'>
                                <Button className='text-white button_1'>Action Button <BsArrowRight /></Button>
                                <Button className='text-white button_2'>Action Button <BsArrowRight /></Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GRANT FPR OMNI */}
                <div className='top text-white'>
                    <h1 className='what_omni_head'><strong>GRANTS FOR <span className='color'>OMNI</span></strong></h1>
                    <p className='what_omni_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tompor incididunt ut labore et dolore magana aliqua.</p>
                    <Row>
                        <Col sm={12} md={6} lg={6} className='text-white grants_group'>
                            <div className='Grnats_icon_back'>
                                <Image src={Polygon} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Matic Grant</strong></span>
                            </div>
                            <div className='Grnats_icon_back'>
                                <Image src={Near} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Near Grant</strong></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} className='text-white grants_group'>
                            <div className='Grnats_icon_back'>
                                <Image src={Harmony} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Harmony Grant</strong></span>
                            </div>
                        </Col>
                    </Row>
                </div>

                    {/* Omni Audits */}
                <div className='top text-white'>
                    <h1 className='what_omni_head'><strong><span className='color'>OMNI </span> AUDITS</strong></h1>
                    <p className='what_omni_para'>Lorem ipsum dolor sit amet, consectetur adipisciping<br />elit, sed do eiusmod tempor incididunt ut labore</p>
                    <Row>
                        <Col md={6} className='text-white grants_group'>
                            <div className='Grnats_icon_back'>
                                <Image src={Certik} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> CertiK Audit</strong></span>
                            </div>

                        </Col>
                        <Col md={6} className='text-white audit_button_container'>
                            <Button className='text-white audit_button' variant="primary" size="lg">Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
                        </Col>
                    </Row>
                </div>

                        {/* Button Group */}
                <div className='top'>
                    <h1 className='what_omni_head text-white'><strong><span className='color'>OMNI </span> SUPPORTS</strong></h1>
                    <div className='buttongroup_container'>
                        <div className='text-white'>
                            <h2 className='dex_blockchain'>DEXES</h2>
                            <div className="dex_blockchain_container">
                                <div className='text-white'>
                                    <Uniswap_Button />
                                    <Pangolin_Button />
                                    <Sushiswawp_Button />
                                    <Pancakeswap_Button />
                                    <Solarbeam_Button />
                                </div>

                                <div className='text-white'>
                                    <Quickswap_Button />
                                    <Linch_Button />
                                    <OxProtocol_Button />
                                    <Ploygon_Button />
                                    <Spiritswap_Button />
                                </div>
                            </div>
                        </div>
                        <div className='text-white'>
                            <h2 className='dex_blockchain'>BLOCKCHAINS</h2>
                            <div className='dex_blockchain_container'>
                                <div className='text-white'>
                                    <Ethereum_Button />
                                    <Fantom_Button />
                                    <Avalanche_Button />
                                    <Harmony_Button />
                                </div>

                                <div className='text-white'>
                                    <Ploygon_Button />
                                    <XDai_Button />
                                    <Ploygon_Button />
                                    <BSC_Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                        {/*  Exchange */}
                <div className='text-white top'>
                    <h1 className='what_omni_head'><strong>TRADE <span className='color'>YOUR TOKEN</span><br />DIRECTLY ON<br /><span className='color'>YOUR PLATFORM!</span></strong></h1>
                    <p className='what_omni_para'>The Omni Relay Widget enables users to buy and sell tokens on any website.<br />This means that your users can buy token, without having to leave your website!<br />It's free and easy to setup. Already joined 40+ projects.</p>
                    <div className='trade_actionButton_container'>
                        <Button className='text-white audit_button'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
                    </div>

                    <div className='calculation_container'>
                        <span className='cal_title'>Omni-DEX
                            <FiSettings size={33} />
                        </span>

                        <div className='cal_change'>
                            <div className='change_container1'>
                                <div className='ehtereum_picture'>
                                    <Image src={Ethereum} height={43} width={43} alt='token' />
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
                                        <input className='amount_info_button' value={"$4, 259"} disabled />
                                    </div>
                                </div>
                            </div>
                                {/* Down arrow */}
                            <div className='calc_arrow_down'>
                                <button>
                                    <BsArrowDown color='white' size={40}/>
                                </button>
                            </div>
                                {/*  RIght arrow */}
                            <div className='calc_arrow_right'>
                                <button>
                                    <Image src={Arrow} height={17} width={45} alt='arrow' />
                                </button>
                            </div>
                            
                            <div className='change_container2'>
                                <div className='ehtereum_picture'>
                                    <Image src={Ethereum} height={43} width={43} alt='token' />
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
                                        <input className='amount_info_button amount_info_button_right' value={"Est.Fee $70"} disabled />
                                    </div>
                                </div>
                            </div>

                            <div className='change_button_container'>
                                <Button className='text-white audit_button'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
                            </div>

                        </div>
                    </div>

                    <div className='calculation_container documentation_contain'>
                        <div>
                            <h1 className='documentation_head'><strong>DOCUMENTATION</strong></h1>
                            <p className='documentation_para'>Find out more about our Multi-Chain solution and platform</p>
                        </div>
                        <div className='documentation_button_contain'>
                            <Button className='text-white audit_button'>Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='subscribe_container'>
                <Container>
                    <div className='subscribe_content'>
                        <div>
                            <h1><strong>Subscribe to our newsletter</strong></h1>
                            <span className='documentation_para'>Find in your email to receive Omni's latest<br />info and updates</span>
                        </div>
                        <div className='email_input_container'>
                            <div className='subscribe_input_container'>
                                <input type='text' placeholder='Email Address' />
                                <Button>Action Button</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

                {/*  Footer */}
            <Container className='footer_container'>
                <div className='detail_container'>
                    <div className='seperate'>
                        <div>
                            <h3 className='footer_title'>Community</h3>
                            <nav className='icon_arrange'>
                                <span className='icon_arrange_img'>
                                    <img src={facebook} alt='facebook' />
                                </span>
                                
                                <span className='icon_arrange_img'>
                                    <img src={discord} alt='dicord' />
                                </span>
                                
                                <span className='icon_arrange_img'>
                                    <img src={twitter} alt='twitter' />
                                </span>
                                
                                <span className='icon_arrange_img'>
                                    <img src={telegram} alt='telegram' />
                                </span>

                                <span className='icon_arrange_img'>
                                    <img src={email} alt='email' />
                                </span>

                                <span className='icon_arrange_img'>
                                    <img src={github} alt='github' />
                                </span>

                                <span className='icon_arrange_img'>
                                    <img src={coingecko} alt='coingecko' />
                                </span>
                            </nav>
                        </div>

                        <div>
                            <h3 className='footer_title'>Documents</h3>
                            <nav className='second_detail'>
                                <p>Pitch Deck <img src={Arrow} height={15} width={35} alt='arrow' /></p>
                                <p>One Pager <img src={Arrow} height={15} width={35} alt='arrow' /></p>
                                <p>Roadmap <img src={Arrow} height={15} width={35} alt='arrow' /></p>
                            </nav>
                        </div>
                        <div>
                            <h3 className='footer_title'>Company</h3>
                            <nav className='second_detail'>
                                <p>Merch Shop <img src={Arrow} height={15} width={35} alt='arrow' /></p>
                                <p>Contact Our Team <img src={Arrow} height={15} width={35} alt='arrow' /></p>

                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Mainbody;