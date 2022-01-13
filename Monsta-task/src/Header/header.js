import React from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import { useEthers, ChainId } from "@usedapp/core";


function Header() {

    const { activateBrowserWallet, account, chainId } = useEthers();

    const connectWallet = () => {
        activateBrowserWallet();
        if (account) {
            alert('success')
        }
    }

    return (
        <Navbar expand="xxl" className='white'>
            <Container className="justify-content-end">
                <Navbar className='nav-item nav-link text-white'>
                    <Button className='Nab_button' variant="primary" size="lg" onClick={connectWallet} >Connect Wallet</Button>
                </Navbar>

            </Container>
        </Navbar>
    )
}

export default Header;
