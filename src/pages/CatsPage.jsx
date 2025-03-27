import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Pets.css";
import { addToCart } from "../utils/addToCart";
import { ToastContainer, toast } from 'react-toastify';

const CatsPage = () => {
  const [catProducts, setCatProducts] = useState([]);
  const [filter, setFilter] = useState("");
  //here we need get all of the projects from our server
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products`)
      .then((res) => {
        // console.log(res.data);
        const filteredData = res.data.filter((oneProduct) => {
          if (oneProduct.animal_type === "cats") {
            return true;
          }
        });
        setCatProducts(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  const notify = () => toast.success("Added to Cart");

  return (
    <div>
      <h3>Cat Products</h3>
      <div className="categoryButtonContainer">
        <button
          onClick={() => {
            setFilter("Food & Snacks");
          }}
        >
          Food & Snacks
        </button>
        <button
          onClick={() => {
            setFilter("Toys & Enrichment");
          }}
        >
          Toys & Enrichment
        </button>
        <button
          onClick={() => {
            setFilter("Grooming & Hygiene");
          }}
        >
          Grooming & Hygiene
        </button>
        <button
          onClick={() => {
            setFilter("Healthcare");
          }}
        >
          Healthcare
        </button>
        <button
          onClick={() => {
            setFilter("Accessories & Furniture");
          }}
        >
          Accessories & Furniture
        </button>
        <button
          onClick={() => {
            setFilter("");
          }}
        >
          All Products
        </button>
      </div>
      <div className="productContainer">
        {catProducts
          .filter((oneProduct) => {
            if (oneProduct.category.includes(filter)) {
              return true;
            }
          })
          .map((oneProduct) => {
            return (
              <div key={oneProduct.id} className="productCard">
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

export default CatsPage;
