import React, { Component } from 'react'
import logo from '../assets/images/logo.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="d-flex justify-content-center mb-4">
          <img src={logo} height={80} className="logo" alt=""></img>
        </div>
        {/* <div className="text-light text-center mb-4 info" style={{fontSize: 'large', fontWeight: 'bold'}}>
          Support | FAQ | Privacy policy | Terms & Conditions | Disclaimer
        </div> */}
      </div>
    )
  }
}
