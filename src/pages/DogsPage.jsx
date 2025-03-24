import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const DogsPage = () => {
  const [dogProducts, setDogProducts] = useState([]);
   //here we need get all of the projects from our server
   useEffect(() => {
    axios
      .get("http://localhost:5005/products")
      .then((res) => {
        console.log(res.data);
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
        There is the dogs products
      <button>snacks</button>
      <div>
      {dogProducts.map((oneProduct) => {
        return <div key={oneProduct.id}>
          <h3>{oneProduct.name}</h3>
        </div>
      })}
      </div>
    </div>
  )
}

export default DogsPage
