import React from 'react';
import WalletBtn from '../components/Wallet';
import {Col, Row} from 'react-bootstrap';

const Wallet = () => {
    return ( 
        <div >
            <Row>
                <Col md={4}/>
                <Col md={8}>
                    <WalletBtn/>
                </Col>
            </Row>
        </div>
    );
};

export default Wallet;