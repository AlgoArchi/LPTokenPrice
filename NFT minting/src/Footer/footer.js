import React from 'react';
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

import Opensea from '../assets/images/opensea.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function FooterPart() {
    return (
        <div>
            <footer className='footer_container'>
                <FaDiscord color="white" className="iconsize" />
                <FaTelegramPlane color="white" className="iconsize" />
                <FaTwitter color="white" className="iconsize" />
                {/*<a className='instagram'>    
                    <i className='fab fa-instagram iconsize'></i>
                </a>*/}
                <ImFacebook color="white" className="iconsize" />
                <img src={Opensea} alt='Opensea' className="iconsize" />
            </footer>
        </div>
    )

}

export default FooterPart;