import React, { Component } from 'react';
// import { Trans } from 'react-i18next';
class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-center text-sm-left d-block d-sm-inline-block">© 2021 Leonicorn Swap</span>
            <span className="float-none d-block mt-1 mt-sm-0 text-center">
              <span className="me-3">Terms & Conditions</span>
              <span>Privacy Policy</span>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;