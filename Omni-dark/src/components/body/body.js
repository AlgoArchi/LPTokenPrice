import React from 'react';
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components';
import WalletBody from './walletBody';

const Web3 = require("web3");


const Button = styled.button `
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 5px 5px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Label = styled.label `
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

const ConnectButton = () => {

    return ( <
        Button onClick = { ethEnabled } > Please Connect Wallet < /Button>
    );
};



const WalletBtn = () => {


    return ( <
        div >
        <
        Row >
        <
        Col md = { 4 } >
        <
        Label > My Wallet < /Label>  < /
        Col > <
        Col md = { 4 } >
        <
        /Col> <
        Col md = { 4 } >
        <
        ConnectButton / >
        <
        /Col>  < /
        Row > <
        Row >
        <
        Col md = { 12 } >
        <
        WalletBody / >
        <
        /Col>  < /
        Row > <
        /div>
    );
};

export default WalletBtn;