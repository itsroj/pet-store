import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./DetailsPage.css"

const DetailsPage = () => {

  const [products, setProducts] = useState({});
  const { productId } = useParams();

  //this is how we ask for data from the context
  //we destructure the key name from 'useContext'

  useEffect(() => {
    fetch(`http://localhost:5005/products/${productId}`)
    .then((response) => {
      return response.json();
    })
  .then((data)=> {
    setProducts(data);
  })
  .catch((error) => console.log(error));

  }, [productId]);

  return (
    <div className="oneProductPage">
      <h2>{products.name}'s Details</h2>
      <img src={products.image} alt={products.name} />
      <p>Price: {products.price}€</p>
      <p>Category: {products.category}</p>
      <p>Stock: {products.stock}</p>
      <p>Description: {products.description}</p>
     
    </div>
  )
}

export default DetailsPage
