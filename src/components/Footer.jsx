import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <p>
          Address: <br></br>Pawradise HQ<br></br>66 Flufftail Lane<br></br>33139
          Snuggletown<br></br>Animal Republic
        </p>
      </div>
      <div>
        <p>
          Contact: <br></br> Phone: 677 346 028 <br></br> E-Mail: <a href="mailto:contact@pawradise.com">contact@pawradise.com</a>
        </p>
      </div>
      <div>
        <p>
        <NavLink to="/about">About Us</NavLink> <br />
        <NavLink to="/legal">Legal Notice</NavLink> <br />
        <NavLink to="/privacy">Privacy Policy</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
