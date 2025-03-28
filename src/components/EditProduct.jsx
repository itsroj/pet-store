import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

export const EditProduct = ({ editId, setShowEditForm, onUpdateSuccess }) => {
  const [name, setName] = useState("");
  const [animalType, setAnimalType] = useState("Dogs");
  const [category, setCategory] = useState("Food & Snacks");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  // const notifyUpdate = () => toast.success("Product Updated");

  //with the update, the first thing is to fetch all the data for that project
  //const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products/${editId}`)
      .then(({ data }) => {
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
      .patch(
        `${import.meta.env.VITE_APP_URL}/products/${editId}`,
        updateProduct
      )
      .then((res) => {
        console.log("successfully updated", res.data, updateProduct);
        
        // inform parent here:
        onUpdateSuccess(res.data);
        // notifyUpdate();
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  }



  return (
    <form className="addProductForm" onSubmit={handleUpdateProduct}>
      <h3>Update New Product</h3>
      <h6 className="closeButton" onClick={() => setShowEditForm(false)}>x</h6>
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
          max={100.00}
          step="0.01"
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
        <select
          name="Animal type"
          onChange={(event) => setAnimalType(event.target.value)}
          required
        >
          <option value="">none</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="small pets">Small Pets</option>
          <option value="birds">Birds</option>
          <option value="fish">Fish</option>
        </select>
      </label>

      <label>
        Category:
        <select
          name="Category"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">none</option>
          <option value="Food & Snacks">Food & Snacks</option>
          <option value="Grooming & Hygiene">Grooming & Hygiene</option>
          <option value="Accessories & Furniture">
            Accessories & Furniture
          </option>
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
      <button className="submitButton" type="submit" onClick={()=>{
                       }}>
        Update Product
      </button>
      {/* <ToastContainer 
              theme="light"
              toastStyle={{ background: 'rgba(53, 35, 14, 0.94)', color: '#fff' }}
              className="rainbow-progress-bar"
            /> */}
    </form>
  );
};
