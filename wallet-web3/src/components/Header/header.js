import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';


//import icons from react icons
import {  FaRegHeart } from 'react-icons/fa';
import {  FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { BsFillWalletFill} from "react-icons/bs";
import { MdSwapHoriz } from "react-icons/md";

//import sidebar css from react-pro-sidebar module and our custom css 
import 'react-pro-sidebar/dist/css/styles.css';
import './header.css';
// import Avatar from './avatar';


const MenuItems = [
  {
    index: 0,
    title: "Wallet",
    url: "/wallet",
    icon: <BsFillWalletFill />,
  },
  {
    index: 1,
    title: "Swap",
    url: "/swap",
    icon: <MdSwapHoriz />,
  },
  {
    index: 2,
    title: "NFT Marketplace",
    url: "/nftmarketplace",
    icon: <FaRegHeart />,
  },
  {
    index: 3,
    title: "Mechanism ",
    url: "/mechanism ",
    icon: <FaRegHeart />,
  }
];


const Header = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    //create a custome function that will change menucollapse state false to true to false
    const menuIconClick =  () => {
        //condition checking to change state from trun to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    
    const [selectedItem, setSelectedItem] = useState();

    return (
        <>
            <div id="header"
            >
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}

                            <p>
                                {menuCollapse ? "swap": "swap & wallet"}
                            </p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ?(<FiArrowRightCircle/>):(<FiArrowLeftCircle/>)}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">

                            {MenuItems.map((item, index) => (
                              <MenuItem key={item.index} onClick={() => setSelectedItem(item.index)} active={selectedItem === index ? true : false} icon={ item.icon }>{item.title}<Link to={item.url}/></MenuItem>
                            ))}

                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut/>}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;