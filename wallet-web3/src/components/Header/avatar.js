import React from 'react';

import './header.css';
import avatar from '../../images/avatar.jpg';

const Avatar = () => {
    return (
        <div className="avatar">
			<img src={avatar} alt="avatar" height="70" />
        </div>
    );
};

export default Avatar;