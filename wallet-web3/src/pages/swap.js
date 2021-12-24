import React from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import './style/style.css';
import styled from 'styled-components';

const Button = styled.button `
  background-color: RGB(250,220,230);
  color: Red;
  font-size: 20px;
  padding: 5px 5px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  width:100%;
`;
const Input = styled.input `
  background-color: RGB(250,250,250);
  color: black;
  font-weight:bold;
  font-size: 30px;
  direction: rtl;
  padding: 5px 5px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  width:100%;
`;

const Swap = () => {
    return ( 
        <Container>
            <Row>
              <Col md={4}>
              </Col>
              <Col md={6}>
                  <Card className="swap">
                    <Card.Header className="swap_title">Swap</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <Input type="number" placeholder="ETH"/>
                        <br/>
                        <Input type="number" placeholder="BOC"/>
                      </Card.Text>
                      <Button variant="primary">Connect my wallet</Button>
                    </Card.Body>
                  </Card>
              </Col>
              <Col md={2}>
              </Col>
            </Row>
        </Container>
    );
};

export default Swap;