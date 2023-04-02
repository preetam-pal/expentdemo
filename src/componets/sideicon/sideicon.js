import React from "react";
import '../sideicon/sideicon.css';

import Referesh from '../../images/refresh-icon.svg'
import Location from '../../images/location.svg'
import Fullscreen from '../../images/full-screen.svg'

function Sidebox() {
  return (
    <div className="side-box">
        <ul>
            <li><a href="#"><span className="icon"><img src={Referesh} /></span></a></li>
            <li><a href="#"><span className="icon"><img src={Location} /></span></a></li>
            <li><a href="#"><span className="icon"><img src={Fullscreen} /></span></a></li>
            <li><a href="#"><span className="icon">+</span><span className="icon minus">-</span></a></li>
        </ul>
    </div>  
  );
}
export default Sidebox;