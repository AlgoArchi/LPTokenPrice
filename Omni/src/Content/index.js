import React from 'react';
import Navb from '../components/Navbar/Navbar.js';
import Release from '../components/NewRelease/Release.js';
import Third_part from '../components/Group1/group1.js';
import Graphic from '../components/Graphic/graphic.js';
import Grant from '../components/Grant/grant.js';
import Audit from '../components/Audit/audit.js';
import Trade from '../components/Trade/trade.js';
import Picture_group from '../components/Group2/group2.js'

function Content() {
  return (
    <div>
      <Navb/>
      <Release/>
      <Third_part/>
      <Graphic/>
      <Grant/>
      <Audit/>
      <Picture_group/>
      <Trade/>
    </div>
  )
}

export default Content;
