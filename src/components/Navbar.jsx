import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Pawradiselogo from "../images/pawradise-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="header">
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets/dogs"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets/cats"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Cats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets/smallPets"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Small Pets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets/birds"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Birds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets/fish"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Fish
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logoContainer">
        <Link to="/">
          <img src={Pawradiselogo} alt="Logo" className="logoPicture" />
        </Link>
        <div className="rotateText">
          <p>Everything</p>
          <p>your pet needs,</p>
          <p>all in one place.</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
