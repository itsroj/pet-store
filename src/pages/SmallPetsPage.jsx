import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Pets.css";


const SmallPetsPage = () => {
  const [smallPetProducts, setSmallPetProducts] = useState([]);
  const [filter, setFilter] = useState("");
   //here we need get all of the projects from our server
   useEffect(() => {
    axios
      .get("http://localhost:5005/products")
      .then((res) => {
        console.log(res.data);
        const filteredData = res.data.filter((oneProduct) => {
          if (oneProduct.animal_type === "small pets") {
            return true;
          }
        })
        setSmallPetProducts(filteredData)
      })
      .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      <p>Small Pets Products</p>
      <button onClick={() => {setFilter("Food & Snacks")}}>Food & Snacks</button>
      <button onClick={() => {setFilter("Toys & Enrichment")}}>Toys & Enrichment</button>
      <button onClick={() => {setFilter("Grooming & Hygiene")}}>Grooming & Hygiene</button>
      <button onClick={() => {setFilter("Healthcare")}}>Healthcare</button>
      <button onClick={() => {setFilter("Accessories & Furniture")}}>Accessories & Furniture</button>
      <button onClick={() => {setFilter("")}}>All Products</button>
      <div className="productContainer">
      {smallPetProducts.filter((oneProduct)=>{
        if (oneProduct.category.includes(filter)) {
          return true;
        }
      }).map((oneProduct) => {
        return <div key={oneProduct.id} className="productCard">
          <h3>{oneProduct.name}</h3>
          <img src={oneProduct.image} alt="product image"/>
          <p>Price: {oneProduct.price}€</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default SmallPetsPage
