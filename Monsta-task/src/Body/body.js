import React from 'react';
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Mainbody() {
    return (
        <div>
            <Container>
                <div className='Omni_chain_container'>
                    
                    <div className='calculation_container'>

                        <div className='cal_change'>
                            <div className='change_container1'>

                                <div className='ETH_container'>
                                    <div className='ETH_amount_input_container'>

                                        <input type='number' min={1} />
                                        <button type='button'>
                                            MONI
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='change_container2'>

                                <div className='ETH_container'>
                                    <div className='ETH_amount_input_container'>
                                        <input type='number' disabled />
                                        <button type='button'>
                                            STT
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='change_button_container'>
                                <Button className='text-white audit_button'>Swap</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Mainbody;