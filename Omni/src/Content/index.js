import React from 'react';
import Navb from '../components/Header/header.js';
import Mainbody from '../components/Body/Body.js';


import Trade from '../components/Trade/trade.js';
import Picturegroup from '../components/Group/group.js'
import Footer from '../components/Footer/footer.js';

function Content() {
  return (
    <div>
      <Navb/>
      <Mainbody/>
 
      <Picturegroup/>
      <Trade/>
      <Footer/>
    </div>
  )
}

export default Content;
