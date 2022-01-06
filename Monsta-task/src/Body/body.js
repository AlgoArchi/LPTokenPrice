import React, { useState } from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';


const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "swapExactMoniForStt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = "0x2a3167fc2Fc1130AAd87f13Dec763620E99E18b4";

function Mainbody() {
    
    const [btntext, setBtnText] = useState("CONNECT WALLET");
    const [chainId, setChainId] = useState("");

    // account? btntext = "DISCONNECT" : btntext = "CONNECT WALLET";

    const connectWallet = () => {
        if (btntext === "DISCONNECT") {
            alert("CONNECTION is running");
        } else {
            connection();
        }
    }


    const connection = () => {
        window.monsta
            .request({ method: 'eth_requestAccounts' })
            .then(() => {
                setBtnText("DISCONNECT WALLET");
                setChainId("0x3e9");
                window.monsta.on('chainChanged', (_chainId) => window.location.reload());

            })
            .catch((err) => {
                if (err.code === 4001) {
                    console.log('Please connect to Monsta.');
                } else {
                    console.error(err);
                }
            });
    }

    const [salary, setSalary] = useState("");
    function handlechange(event) {
        setSalary(event.target.value);
    }

    const Swap = () => {
        // const contract = window.monsta
    }

    return (
        
        <div>
            <Navbar expand="xxl" className='white'>
                <Container className="justify-content-end">
                    <Navbar className='nav-item nav-link text-white'>
                        <Button className='Nab_button' variant="primary" size="lg" onClick={connectWallet} >{btntext}</Button>
                    </Navbar>

                </Container>
            </Navbar>
            <Container>
                <div className='Omni_chain_container'>
                    
                    <div className='calculation_container'>
                        <div className='cal_change'>
                            <div className='change_container1'>

                                <div className='ETH_container'>
                                    <div className='ETH_amount_input_container'>

                                        <input type='number' min={1} onChange={handlechange} />
                                        <button type='button'>
                                            MONI
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='change_container2'>

                                <div className='ETH_container'>
                                    <div className='ETH_amount_input_container'>
                                        <input type='number' value={salary} disabled />
                                        <button type='button'>
                                            STT
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='change_button_container'>
                                <Button className='text-white audit_button' onClick={Swap}>Swap</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
    
}

export default Mainbody;