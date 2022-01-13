import React from 'react';
import Mainbody from './Body/body.js';
import Navigation from './Navbar/navbar.js';
import FooterPart from './Footer/footer.js';

function Content() {
    return (
        <>
            <div>
                <Navigation />
                <Mainbody />
                <FooterPart />           
            </div>
            
        </>    
    )
}

export default Content;