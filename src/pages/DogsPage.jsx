import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/addToCart";
import "./Pets.css";
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

const DogsPage = () => {
  const [dogProducts, setDogProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // here we need to get all of the products from our server
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products`)
      .then((res) => {
        // Filter dog products
        const filteredData = res.data.filter((oneProduct) => {
          if (oneProduct.animal_type === "dogs") {
            return true;
          }
        });
        setDogProducts(filteredData);
        setLoading(false); // Set loading to false when the data is loaded
      })
      .catch((err) => console.log(err));
  }, []);

  const notify = () => toast.success("Added to Cart");

  return (
    <div>
      <h3>Dog Products</h3>
      {loading ? ( 
        <Spinner /> 
      ) : (
        <>
          <div className="categoryButtonContainer">
            <button onClick={() => setFilter("Food & Snacks")}>
              Food & Snacks
            </button>
            <button onClick={() => setFilter("Toys & Enrichment")}>
              Toys & Enrichment
            </button>
            <button onClick={() => setFilter("Grooming & Hygiene")}>
              Grooming & Hygiene
            </button>
            <button onClick={() => setFilter("Healthcare")}>
              Healthcare
            </button>
            <button onClick={() => setFilter("Accessories & Furniture")}>
              Accessories & Furniture
            </button>
            <button onClick={() => setFilter("")}>
              All Products
            </button>
          </div>
          <div className="productContainer">
            {dogProducts
              .filter((oneProduct) => oneProduct.category.includes(filter)) 
              .map((oneProduct) => {
                return (
                  <div key={oneProduct.id} className="productCard">
                    <Link to={`/pets/${oneProduct.id}`}>
                      <img src={oneProduct.image} alt="product image" />
                    </Link>
                    <h4>{oneProduct.name}</h4>
                    <p>Price: {oneProduct.price}€</p>
                    <button onClick={() => {
                      notify();
                      addToCart(oneProduct);
                    }}>Add to Cart</button>
                  </div>
                );
              })}
          </div>
        </>
      )}
      <ToastContainer 
        theme="light"
        toastStyle={{ background: 'rgba(53, 35, 14, 0.94)', color: '#fff' }}
        className="rainbow-progress-bar"
      />
    </div>
  );
};

export default DogsPage;
