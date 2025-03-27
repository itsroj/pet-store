import React from "react";
import "./ShopByCategory.css";
import { NavLink } from "react-router-dom";
import DogPicture from "../images/dogcard.jpg";
import CatPicture from "../images/catcard.png";
import FishPicture from "../images/fishcard.jpg";
import SmallPetsPicture from "../images/smallpetcard.png";
import BirdsPicture from "../images/birdcard.jpg";

const ShopByCategory = () => {
  return (
    <div>
      <h3>Start your shopping now</h3>
      <div className="categoryPictureContainer">
        <div className="petCard">
          <NavLink
            to="/pets/dogs" end
            className={({ isActive }) => (isActive ? "active-category" : "")}
          >
            <img src={DogPicture} alt="Dog Picture" />
            <p className="petCardCategoryName">Dogs</p>
          </NavLink>
        </div>
        <div className="petCard">
          <NavLink
            to="/pets/cats"
            className={({ isActive }) => (isActive ? "active-category" : "")}
          >
            <img src={CatPicture} alt="Cat Picture" />
            <p className="petCardCategoryName">Cats</p>
          </NavLink>
        </div>
        <div className="petCard">
          <NavLink
            to="/pets/smallPets"
            className={({ isActive }) => (isActive ? "active-category" : "")}
          >
            <img src={SmallPetsPicture} alt="Small Pets Picture" />
            <p className="petCardCategoryName">Small Pets</p>
          </NavLink>
        </div>
        <div className="petCard">
          <NavLink
            to="/pets/birds"
            className={({ isActive }) => (isActive ? "active-category" : "")}
          >
            <img src={BirdsPicture} alt="Birds Picture" />
            <p className="petCardCategoryName">Birds</p>
          </NavLink>
        </div>
        <div className="petCard">
          <NavLink
            to="/pets/fish"
            className={({ isActive }) => (isActive ? "active-category" : "")}
          >
            <img src={FishPicture} alt="Fish Picture" />
            <p className="petCardCategoryName">Fish</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
