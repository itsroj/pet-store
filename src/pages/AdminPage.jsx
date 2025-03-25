import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "../components/EditProduct";
import "../components/AddProduct";
import { AddProduct } from '../components/AddProduct';

const AdminPage = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
   //here we need get all of the products from our server
   useEffect(() => {
    axios
      .get("http://localhost:5005/products")
      .then((response) => {
        console.log (response.data);
        setAllProducts(response.data)
      
   }).catch((err) => console.log(err));
    }, []);

    function handleDelete(productId) { 
      //first remove from the frontend
      const filteredProducts = allProducts.filter(
        (oneProduct) => productId !== oneProduct.id
      );
      console.log("delete clicked", productId, filteredProducts);
      setAllProducts(filteredProducts);
      
      //second step is to send a request to the json server to delete one product
      axios
        .delete(`http://localhost:5005/products/${productId}`)
        .then((response) => {
          console.log("product deleted... nice work", response.data);
        })
        .catch((error) => console.log(error));
    }

  return (
    <div>

      <button type="button" onClick={()=> setShowForm(!showForm)}>Add Product</button> {/* if you click the button it changes the state*/ }
      {showForm? <AddProduct />:null}      {/* if thats true it shows the form */}
      <div className="productContainer">
        {allProducts.map((oneProduct) => {
          return (
            <div key={oneProduct.id} className="productCard">
              <Link to={`/pets/${oneProduct.id}`}>
                <img src={oneProduct.image} alt="product image"/>
              </Link>
              <h4>{oneProduct.name}</h4>
              <p>Category: {oneProduct.category}</p>
              <p>Animal Type: {oneProduct.animal_type}</p>
              <p>Price: {oneProduct.price}€</p>
              <p>Stock: {oneProduct.stock}</p>
              <p>Description: {oneProduct.description}</p>
              <button>Edit</button>
              <button
                onClick={() => {
                  handleDelete(oneProduct.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AdminPage
