// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/index.jsx';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './components/Header/header.js';
import { Row, Col } from 'react-bootstrap';
import Swap from './pages/swap';
import Wallet from './pages/wallet';
import NftMarketPlace from './pages/nftmarketplace';
import Mechanism from './pages/mechanism';



function App() {
    return ( 
        <div >
            <BrowserRouter >
                <CustomNavbar />
                <Row className = "app" >
                    <Col md = { 2 } >
                        <Header/>
                    </Col> 
                    <Col md = { 8 } >
                        <Routes>
                            <Route path = 'wallet/' element = { <Wallet/>} />
                            <Route path = 'mechanism/' element = { <Mechanism />} />
                            <Route path = 'nftmarketplace/'element = { <NftMarketPlace/> }/>
                            <Route path = 'swap/'element = { <Swap/> }/>
                        </Routes> 
                    </Col> 
                </Row> 
            </BrowserRouter> 
        </div>
    );
}

export default App;