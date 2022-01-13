import React from 'react';
import Button from '@mui/material/Button';
import animatelotus from '../assets/video/lotus.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Mainbody() {
    return (
        <div className='main_container'>
            <div className='animatelotus_container'>
                <img src={animatelotus} className='animatelotus' />
            </div>
            <div className='mint_container'>
                <div style={{marginLeft:"auto", marginRight:"auto"}}>
                    <p>1/xxxx</p>
                    <Button className='mint_button' variant="contained">CONNECT WALLET</Button>
                </div>
            </div>
        </div>
    )
}

export default Mainbody;