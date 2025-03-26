import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const CartPage = () => {

  useEffect(() => {
    axios
      .get("http://localhost:5005/cart")
      .then((response) => {
        console.log (response.data);
        setAllProducts(response.data)
      
   }).catch((err) => console.log(err));
    }, []);

    // function handleAddToCart(productId) { 
    //   //first remove from the frontend
    //   const filteredProducts = allProducts.filter(
    //     (oneProduct) => productId !== oneProduct.id
    //   );
    //   setAllProducts(filteredProducts);
      
    //   //second step is to send a request to the json server to delete one product
    //   axios
    //     .post(`http://localhost:5005/cart/${productId}`)
    //     .then((response) => {
    //       console.log("product added to cart... nice work", response.data);
    //     })
    //     .catch((error) => console.log(error));
    // }

  return (
    <div>
      cart
    </div>
  )
}

export default CartPage
