import React from 'react';

import logo from './lotus.png';

const Logo = () => {
    return (
        <div className='logo_container' >
            <img src={logo} className='logo' alt="Logo" />
        </div>
    );
};

export default Logo;