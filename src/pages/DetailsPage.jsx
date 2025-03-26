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
      <img src={products.image} alt={products.name} />
      <div className="productDetails">
        <h3>{products.name}</h3>
        <p className="price">{products.price}€</p>
        <p className="category">Category: {products.category}</p>
        <p className="stock">Stock: {products.stock}</p>
        <p>Description: {products.description}</p>
        <div className="actionButtons">
          <button>Add to Cart</button>
          <button>Add to Favorites</button>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
