import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Pets.css";


const DogsPage = () => {
  const [dogProducts, setDogProducts] = useState([]);
  const [filter, setFilter] = useState("");
   //here we need get all of the projects from our server
   useEffect(() => {
    axios
      .get("http://localhost:5005/products")
      .then((res) => {
        // console.log(res.data);
        const filteredData = res.data.filter((oneProduct) => {
          if (oneProduct.animal_type === "dogs") {
            return true;
          }
        })
        setDogProducts(filteredData)
      })
      .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      <h3>Dog Products</h3>
      <div className="categoryButtonContainer">
        <button onClick={() => {setFilter("Food & Snacks")}}>Food & Snacks</button>
        <button onClick={() => {setFilter("Toys & Enrichment")}}>Toys & Enrichment</button>
        <button onClick={() => {setFilter("Grooming & Hygiene")}}>Grooming & Hygiene</button>
        <button onClick={() => {setFilter("Healthcare")}}>Healthcare</button>
        <button onClick={() => {setFilter("Accessories & Furniture")}}>Accessories & Furniture</button>
        <button onClick={() => {setFilter("")}}>All Products</button>
      </div>
      <div className="productContainer">
      {dogProducts.filter((oneProduct)=>{
        if (oneProduct.category.includes(filter)) {
          return true;
        }
      }).map((oneProduct) => {
        return <div key={oneProduct.id} className="productCard">
          <img src={oneProduct.image} alt="product image"/>
          <h4>{oneProduct.name}</h4>
          <p>Price: {oneProduct.price}€</p>
          <button>Add to fav or cart?</button>
        </div>
      })}
      </div>
    </div>
  )
}

export default DogsPage
