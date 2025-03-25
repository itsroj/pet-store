import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Pawradiselogo from "../images/pawradise-logo.png"


function Navbar () {
    return (
        <nav className="header">
            <div className="navbar">
                <ul>
                    <NavLink to="/">Homepage</NavLink>
                    <NavLink to="/pets/dogs">Dogs</NavLink>
                    <NavLink to="/pets/cats">Cats</NavLink>
                    <NavLink to="/pets/smallPets">Small Pets</NavLink>
                    <NavLink to="/pets/birds">Birds</NavLink>
                    <NavLink to="/pets/fish">Fish</NavLink>
                    <NavLink to="/pets/about">About Us</NavLink>
                </ul>
            </div>
            <div className="logoContainer">
                <Link to="/">
                    <img src={Pawradiselogo} alt="Logo" className="logoPicture"/>
                </Link>
                <div className="rotateText">
                    <p>Everything</p>
                    <p>your pet needs,</p>
                    <p>all in one place.</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;