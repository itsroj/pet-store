import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export const EditProduct = ({editId, setShowEditForm}) => {

    const [name, setName] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");

    //with the update, the first thing is to fetch all the data for that project
    const nav = useNavigate();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/products/${editId}`)
        .then(({data}) => {
            console.log("here is the data for the update:", data);
            setName(data.name);
            setAnimalType(data.animal_type);
            setCategory(data.category);
            setPrice(data.price);
            setDescription(data.description);
            setStock(data.stock);
            setImage(data.image);
        })
        .catch((err) => console.log(err));
    }, [editId]);

    async function handleUpdateProduct(event) {
        //first stop the form from refreshing the page
        event.preventDefault();
        const updateProduct = {
            name,
            image,
            category,
            description,
            price,
            animal_type: animalType,
            stock,
        };
        //second we make a fetch call to update the server
        axios
            .put(`${import.meta.env.VITE_APP_URL}/products/${productId}`, updateProduct)
            .then((res) => {
                console.log("successfully updated", res.data);
                // nav("/");
              })
              .catch((err) => console.log(err));
    }

  return (
    <form className="UpdateProductForm" onSubmit={handleUpdateProduct}>
      <h3>Update New Product</h3>
      <h6 onClick={()=>setShowEditForm(false)}>x</h6>
      <label>
        Product Name: 
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
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
        />
     </label>      
      <label>
        Image: 
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
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
        />
     </label>

      <label>
        Description: 
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      </label>
      <button className = "submitButton" type="submit">Update Product</button>
    </form>
  )
}


