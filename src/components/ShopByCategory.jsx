import React from 'react'
import "./ShopByCategory.css"
import { NavLink } from 'react-router-dom'
import DogPicture from "../images/dogcard.jpg"
import CatPicture from "../images/catcard.png"
import FishPicture from "../images/fishcard.jpg";
import SmallPetsPicture from "../images/smallpetcard.png"
import BirdsPicture from "../images/birdcard.jpg"

const ShopByCategory = () => {
  return (
    <div>
      <h3>start your shopping now</h3>
         <div className="categoryPictureContainer">
            <div className="petCard">
                <NavLink to="/pets/dogs">
                <img src={DogPicture} alt="Dog Picture" />
                <p>Dogs</p> 
                </NavLink>
            </div>
            <div className="petCard">
                <NavLink to="/pets/cats">
                <img src={CatPicture} alt="Cat Picture" />
                <p>Cats</p> 
                </NavLink>
            </div>
            <div className="petCard">
                <NavLink to="/pets/smallPets">
                <img src={SmallPetsPicture} alt="Small Pets Picture" />
                <p>Small Pets</p> 
                </NavLink>
            </div>
            <div className="petCard">
                <NavLink to="/pets/birds">
                <img src={BirdsPicture} alt="Birds Picture" />
                <p>Birds</p> 
                </NavLink>
            </div>
            <div className="petCard">
               <NavLink to="/pets/fish">
               <img src={FishPicture} alt="Fish Picture" />
               <p>Fish</p> 
               </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ShopByCategory
