import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const AdminPage = () => {

  const [allProducts, setAllProducts] = useState([]);
  
   //here we need get all of the projects from our server
   useEffect(() => {
    axios
      .get("http://localhost:5005/products")
      .then((response) => {
        console.log (response.data);
        setAllProducts(response.data)
      
   }).catch((err) => console.log(err));
    }, []);


  return (
    <div>
      <button>add product</button>
      <div className="productContainer">
        {allProducts.map((oneProduct) => {
          return (
          <div key={oneProduct.id} className="productCard">
            <Link to ={`/pets/${oneProduct.id}`}>
              <img src={oneProduct.image} alt="product image"/>
            </Link>
            <h4>{oneProduct.name}</h4>
            <p>Category: {oneProduct.category}</p>
            <p>Animal Type: {oneProduct.animal_type}</p>
            <p>Price: {oneProduct.price}€</p>
            <p>Stock: {oneProduct.stock}</p>
            <p>Description: {oneProduct.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>)
      })}
    </div>
    </div>
  )
}

export default AdminPage
