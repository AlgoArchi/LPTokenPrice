import React, {useEffect, useState} from 'react'
import {
  Row, Col
} from 'react-bootstrap'
import avatar from '../assets/images/avatar.png'
import { useEthers, ChainId } from "@usedapp/core";
import { ClaimableAmount, VestedAmount, useContractMethod, VestingOwner } from '../hook.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseEther } from "@ethersproject/units";

const Claim = () => {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const { state: claimAmountState, send: claimAmount, events: claimAmountEvents } = useContractMethod('claim');
  const { state: addInvestorState, send: addInvestorFunc, events: addInvestorEvents } = useContractMethod('addInvestor');
  const vestingOwner = VestingOwner();
  const vestedAmount = VestedAmount(account);
  const claimableAmount = ClaimableAmount(account);
  const [addInvestor, setAddInvestor] = useState(false);

  const [investorAddress, setInvestorAddress] = useState('')
  const [investAmount, setInvestAmount] = useState('')

  const connectWallet = () => {
    activateBrowserWallet();
  };

  useEffect(() => {
    if ( addInvestorState && addInvestorState.status === 'Success' ) {
      toast.success('Added Investor!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    } else if ( addInvestorState && addInvestorState.status === 'Exception' ) {
      toast.error(addInvestorState.errorMessage, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  }, [addInvestorState])

  useEffect(() => {

    if ( claimAmountState && claimAmountState.status === 'Exception' ) {
      toast.error(claimAmountState.errorMessage, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    } else if (claimAmountState && claimAmountState.status === 'Success' ) {
      toast.success('Claim Finished!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  }, [claimAmountState])

  useEffect(() => {
    if (chainId !== undefined && chainId !== parseInt(process.env.REACT_APP_NETWORK_ID)) {
      toast.error('Please choose the Binance Smart Chain network!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  }, [chainId])

  const AddInvestor = () => {
    if (chainId !== parseInt(process.env.REACT_APP_NETWORK_ID)) {
      toast.error('Please choose the Binance Smart Chain network!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    } else {
      if ( account ) {
        addInvestorFunc(investorAddress, parseEther(investAmount));
      } else {
        toast.error('Please connect your wallet!', {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    }
  }

  const ClaimInvestor = () => {
    if (chainId !== parseInt(process.env.REACT_APP_NETWORK_ID)) {
      toast.error('Please choose the Binance Smart Chain network!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    } else {
      if ( account ) {
        claimAmount();
      } else {
        toast.error('Please connect your wallet!', {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    }
  }

  return (
    <div className="claim d-flex justify-content-center">
      <Row className="claim-content">
        <Col sm={4} className="d-none d-sm-block d-md-block d-lg-block claim-content-img">
          <img src={avatar} alt=""></img>
        </Col>
        
        <Col sm={8} className="claim-content-info">
          {!account ?
          <Row className="mt-5 mb-4">
            <Col xs={4}></Col>
            <Col xs={8} className="text-center">
              <button className="w-100" onClick={connectWallet}>
                Connect Wallet
              </button>
            </Col>
          </Row>
          :
          <Row className="mt-5 mb-4">
            <Col xs={12} className="text-center align-items-center"> 
              <span className="text-light m-auto">Wallet Connected : {account.slice(0, 6)}...{account.slice(
                    account.length - 4,
                    account.length
                  )}</span>
              { account == vestingOwner &&
                <div className="text-right">
                  <a className="mt-3" href="#" onClick={() => {
                    setAddInvestor(!addInvestor)
                  }}>
                    {addInvestor ? 'Back to Vesting' : 'Add new vesting'}
                  </a>
                </div>
              }
            </Col>
          </Row>
          }
          {
            addInvestor && account == vestingOwner ? (
              <>
                <Row className="mt-4 mb-4">
                  <Col xs={4} className="text-right d-flex align-items-center"> 
                    <span className="text-light" style={{width:85}}>Investor Address</span>
                  </Col>
                  <Col xs={8} className="d-flex align-items-center">
                    <input className="w-100" value={investorAddress} onChange={e => setInvestorAddress(e.target.value)}></input>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">
                  <Col xs={4} className="text-right d-flex align-items-center"> 
                    <span className="text-light" style={{width:85}}>Amount</span>
                  </Col>
                  <Col xs={8} className="d-flex align-items-center">
                    <input className="w-100" type="number" value={investAmount} onChange={e => setInvestAmount(e.target.value)}></input>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                  <Col xs={12} className="text-center">
                    <button onClick={() => AddInvestor()}>
                      Add
                    </button>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row className="mt-4 mb-4">
                  <Col xs={4} className="text-right d-flex align-items-center"> 
                    <span className="text-light" style={{width:85}}>Total $CWE</span>
                  </Col>
                  <Col xs={8} className="d-flex align-items-center">
                    <input className="w-100" readOnly={true} value={`${vestedAmount}`}></input>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4">
                  <Col xs={4} className="text-right d-flex align-items-center"> 
                    <span className="text-light" style={{width:85}}>Available</span>
                  </Col>
                  <Col xs={8} className="d-flex align-items-center">
                    <input className="w-100" readOnly={true} value={`${claimableAmount}`}></input>
                  </Col>
                </Row>
                <Row className="mt-4 mb-5">
                  <Col xs={12} className="text-center">
                    <button onClick={ClaimInvestor}>
                      Claim
                    </button>
                  </Col>
                </Row>
              </>
            )
          }
        </Col>
      </Row>
    </div>
  )
}

export default Claim;