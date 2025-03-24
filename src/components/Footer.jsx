import React from 'react';
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <p>Address: <br></br>Pawradise HQ77<br></br> Flufftail LaneSnuggletown<br></br> Pet 33139 Animal Republic</p> 
      </div>
      <div>
        <p>Contact <br></br> Phone: 677 346 028 <br></br> E-Mail: contact@pawradise.com</p>
      </div>
      <div>
        <p>About Us <br></br>Legal Notice<br></br>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
