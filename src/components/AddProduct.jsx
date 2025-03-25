import React from 'react'
import axios from "axios";
import { useState } from "react";

// insert the props from AdminPage here in () to connect files > see file AdminPage Button "Add Product" to see props. Then add them here. also add in axios .then this: setAllProducts([res.data, ...allProducts]) 
export const AddProduct = ({allProducts, setAllProducts}) => {

    const [name, setName] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    
      
    // function handleImageChange(event) {
    //   setImage(event.target.value);
    // }

    function handleCreateProduct(event) {
      //first thing you must always do when submitting a form is stop the page from reloading
      event.preventDefault();
      const theNewProduct = {
        name,
        image,
        category,
        description,
        price,
        animal_type: animalType,
        stock,
      };
  
      axios
        .post("http://localhost:5005/products", theNewProduct)
        .then((res) => {
          console.log("a new product", res.data);
          setAllProducts([res.data, ...allProducts]) // this is putting the new product on the top of the list
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setName("");
          setImage("");
          setAnimalType("");
          setCategory("");
          setPrice("");
          setDescription("");
          setStock("");
        });
  
    }
  return (
    <form className="addProductForm" onSubmit={handleCreateProduct}>
      <h3>Add New Product</h3>
      <label>
        Product Name: 
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      </label>
      <label>
        Price: 
        <input
            type="number"
            placeholder="Price (€)"
            minLength={1}
            maxLength={7}
            min={0.00}
            max={100.000}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
        />
     </label>      
      <label>
        Image: 
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      </label>

      <label>
        Animal Type: 
        <select name="Animal type" onChange={(event) => setAnimalType(event.target.value)} required>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Small Pets">Small Pets</option>
            <option value="Birds">Birds</option>
            <option value="Fish">Fish</option>
        </select>
      </label>

      <label>
        Category: 
        <select name="Category" onChange={(event) => setCategory(event.target.value)}>
            <option value="Food & Snacks">Food & Snacks</option>
            <option value="Grooming & Hygiene">Grooming & Hygiene</option>
            <option value="Accessories & Furniture">Accessories & Furniture</option>
            <option value="Toys & Enrichment">Toys & Enrichment</option>
            <option value="Healthcare">Healthcare</option>
        </select>
      </label>

      <label>
        Stock: 
        <input
            type="number"
            placeholder="Stock"
            minLength={1}
            maxLength={4}
            min={1}
            max={9999}
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            required
        />
     </label>

      <label>
        Description: 
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      </label>

      <button className = "submitButton" type="submit">Add Product</button>
    </form>
  )
}