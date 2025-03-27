import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Bestsellers.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/addToCart";
import { ToastContainer, toast } from 'react-toastify';

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products`)
      .then((response) => {
        const topTen = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          const randomProduct = response.data[randomIndex];
          topTen.push(randomProduct);
          response.data.splice(randomIndex, 1); // it wont get double chosen
        }
        setBestsellers(topTen);
      })
      .catch((err) => console.log(err));
  }, []);

  const notify = () => toast.success("Added to Cart");

  return (
    <div id="bestellerContainer">
      <h3>shop our bestsellers</h3>
      <div className="productContainer">
        {bestsellers.map((oneProduct) => {
          return (
            <div
              key={oneProduct.id}
              className="productCard"
              id="bestsellerCard"
            >
              <Link to={`/pets/${oneProduct.id}`}>
                <img src={oneProduct.image} alt="product image" />
              </Link>
              <h4>{oneProduct.name}</h4>
              <p>Price: {oneProduct.price}€</p>
              <button onClick={()=>{
                notify();
                addToCart(oneProduct)}}>Add to Cart</button>
            </div>
          );
        })}
      </div>
      <ToastContainer 
        theme="light"
        toastStyle={{ background: 'rgba(53, 35, 14, 0.94)', color: '#fff' }}
        className="rainbow-progress-bar"
      />
    </div>
  );
};

export default Bestsellers;
