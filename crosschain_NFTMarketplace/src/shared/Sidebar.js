import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import lion1_icon from '../assets/images/lion_icon.png';
import lion2_icon from '../assets/images/lion2_icon.png';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <button className="navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <Link className="sidebar-brand brand-logo" to={'/'}><img src={require('../assets/images/logo-mini.svg').default} alt="logo" /></Link>
          {/*<a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../assets/images/logo-mini.svg').default} alt="logo" /></a>*/}
        </div>
        <div className="d-flex flex-column justify-content-between h-100">
        <ul className="nav">
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link active" to="/dashboard">
              <span className="mdi mdi-dots-horizontal me-3"></span>
              <span className="menu-title"><Trans>Active Menu Item</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="mdi mdi-dots-horizontal me-3"></span>
              <span className="menu-title"><Trans>Menu Item</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="mdi mdi-dots-horizontal me-3"></span>
              <span className="menu-title"><Trans>Menu Item</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="mdi mdi-dots-horizontal me-3"></span>
              <span className="menu-title"><Trans>Menu Item</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="mdi mdi-dots-horizontal me-3"></span>
              <span className="menu-title"><Trans>Menu Item</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Menu Item</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Menu Item</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Menu Item</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
        </ul>
       <div className="p-3">
          <div className="d-flex justify-content-between mb-3">
              <div className="lion_icon"><img src={lion1_icon} alt=""/> $0.020</div>
              <div className="lion_icon"><img src={lion2_icon} alt=""/>  $0.723</div>
          </div>
          <div className="d-flex  justify-content-center">
              <div className="lion_icon pe-3"><span className=" mdi mdi-web pe-1"></span> EN</div>
              <div className="social_icon "><span className=" mdi mdi-send "></span> </div>
              <div className="social_icon "><span className=" mdi mdi-twitter"></span> </div>
              <div className="social_icon "><img src={require('../assets/imgs/social.png')} alt='' /></div>
              <div className="social_icon "><img src={require('../assets/imgs/website.png')} alt='' /> </div>
          </div>
       </div>
       </div>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location?.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default Sidebar;