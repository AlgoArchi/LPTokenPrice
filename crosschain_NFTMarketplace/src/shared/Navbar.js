import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lion2_icon from '../assets/images/lion2_icon.png';
class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        
      
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={lion2_icon} alt="logo" /></Link>
        </div>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <div className="input-group">
                  <input className="form-control" type="search" id="earch-input" placeholder="Search items, Creators"/>
                  <span className="input-group-append">
                      <button className="btn ms-n5" type="button">
                        <span className="mdi mdi-magnify"></span>
                      </button>
                  </span>
              </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <button className="btn create-btn me-2">Create</button>
            <button className="btn connect-btn">Connect</button>
          </ul>
         
        </div>
      </nav>
    );
  }
}

export default Navbar;
