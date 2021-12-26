import React from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/header.css';

function Header() {
    return (
        <Navbar expand="xxl" className='white'>
            <Container className="justify-content-end">
                <Navbar className='nav-item items nav-link text-white'>Home</Navbar>
                <Navbar className='nav-item items nav-link text-white'>Page1</Navbar>
                <Navbar className='nav-item items nav-link text-white'>Page2</Navbar>

                <Navbar className='nav-item nav-link text-white Nav_icon_button'>
                    <Button style={{ backgroundColor: 'transparent', border: 0 }}><AiOutlineMenu className='Nav_icon' /></Button>
                </Navbar>

                <Navbar className='nav-item nav-link text-white'>
                    <Button className='Nab_button' variant="primary" size="lg">Action Button</Button>
                </Navbar>

            </Container>
        </Navbar>
    )
}

export default Header;

import React, { useState } from "react"; //useState helps us manage our app state
import { Drawer, Button } from "antd"; //importing compnents from ant library
import { AlignRightOutlined } from "@ant-design/icons"; //importing ant design icons
import { MiniSidebar } from "./Sidebar ";
import { Menu, Link, RightMenu } from "@material-ui/icons";
import "./navbar.css"; //importing a css styling sheet

function NavBar() {
  const [shown, setShown] = useState(false);

  const showSidebar = () => {
    setShown(true);
  };

  const drawerClosed = () => {
    setShown(false);
  };

function LeftMenu({mode}) {
  return (
    <Menu mode={mode}>
    <Menu.Item key="mail">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="subscription">
      <Link to="/subscription">Subscription</Link>
    </Menu.Item>
  </Menu>
  )
}

function LeftMenu({mode}) {
 return (
      <Menu mode={mode}>
        <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
}
  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="main-logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu-container">
        <div className="left-menu">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="right-menu">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="small-screen-btn"
          type="primary"
          onClick={showSidebar}
        >
          <AlignRightOutlined size="medium" />
        </Button>
        <Drawer
          title="Sidebar Drawer"
          placement="left"
          className="menu-drawer"
          closable={false}
          onClose={drawerClosed}
          visible={shown}
        >
          <MiniSidebar />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;