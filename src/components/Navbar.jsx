import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Pawradiselogo from "../images/pawradise-logo.png"


function Navbar () {
    return (
        <nav className="header">
            <div className="navbar">
                <ul>
                    <NavLink to="/pets/dogs">Dogs</NavLink>
                    <NavLink to="/pets/cats">Cats</NavLink>
                    <NavLink to="/pets/smallPets">Small Pets</NavLink>
                    <NavLink to="/pets/birds">Birds</NavLink>
                    <NavLink to="/pets/fish">Fish</NavLink>
                    <NavLink to="/pets/about">About Us</NavLink>
                </ul>
            </div>
            <div className="Logo-container">
                <img src={Pawradiselogo} alt="Logo" className="logo-picture"/>
                <p>"Everything your pet needs, <br></br> all in one place."</p>
            </div>
        </nav>
    )
}

export default Navbar;