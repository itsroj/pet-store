import React from "react";
import "./ShopByCategory.css";
import { Link } from "react-router-dom";
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
          <Link to="/pets/dogs">
            <img src={DogPicture} alt="Dog Picture" />
            <p className="petCardCategoryName">Dogs</p>
          </Link>
        </div>
        <div className="petCard">
          <Link to="/pets/cats">
            <img src={CatPicture} alt="Cat Picture" />
            <p className="petCardCategoryName">Cats</p>
          </Link>
        </div>
        <div className="petCard">
          <Link to="/pets/smallPets">
            <img src={SmallPetsPicture} alt="Small Pets Picture" />
            <p className="petCardCategoryName">Small Pets</p>
          </Link>
        </div>
        <div className="petCard">
          <Link to="/pets/birds">
            <img src={BirdsPicture} alt="Birds Picture" />
            <p className="petCardCategoryName">Birds</p>
          </Link>
        </div>
        <div className="petCard">
          <Link to="/pets/fish">
            <img src={FishPicture} alt="Fish Picture" />
            <p className="petCardCategoryName">Fish</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;

