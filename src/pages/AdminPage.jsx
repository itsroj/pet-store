import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/EditProduct";
import "../components/AddProduct";
import { AddProduct } from "../components/AddProduct";
import "./AdminPage.css";
import { EditProduct } from "../components/EditProduct";
import { ToastContainer, toast } from 'react-toastify';


const AdminPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState(null);

  //here we need get all of the products from our server
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products`)
      .then((response) => {
        console.log(response.data);
        setAllProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(productId) {
    //first remove from the frontend
    const filteredProducts = allProducts.filter(
      (oneProduct) => productId !== oneProduct.id
    );
    console.log("delete clicked", productId, filteredProducts);
    setAllProducts(filteredProducts);

    //second step is to send a request to the json server to delete one product
    axios
      .delete(`${import.meta.env.VITE_APP_URL}/products/${productId}`)
      .then((response) => {
        console.log("product deleted... nice work", response.data);
      })
      .catch((error) => console.log(error));
  }

  const notifyDelete = () => toast.success("Product Deleted");

  return (
    <div>
      <button
        type="button"
        className="addProductBtn"
        onClick={() => setShowForm(true)}
      >
        Add Product
      </button>{" "}
      {/* if you click the button it changes the state*/}
      {showEditForm ? (
        <EditProduct editId={editId} setShowEditForm={setShowEditForm} />
      ) : null}
      {showForm ? (
        <AddProduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          setShowForm={setShowForm}
        />
      ) : null}{" "}
      {/* if thats true it shows the form // sending props here! bcs we want the product at the top and dont load the page again. this was added for the props: allProducts = {allProducts} setAllProducts={setAllProducts}, and then go to AdminPage  */}
      <div className="productContainer">
        {allProducts.map((oneProduct) => {
          return (
            <div key={oneProduct.id} className="productCard">
              <Link to={`/pets/${oneProduct.id}`}>
                <img src={oneProduct.image} alt="product image" />
              </Link>
              <h4>{oneProduct.name}</h4>
              <p>Category: {oneProduct.category}</p>
              <p>Animal Type: {oneProduct.animal_type}</p>
              <p>Price: {oneProduct.price}€</p>
              <p>Stock: {oneProduct.stock}</p>
              <p>Description: {oneProduct.description}</p>
              <button
                type="button"
                className="updateProductBtn"
                onClick={() => {
                  setEditId(oneProduct.id);
                  setShowEditForm(true);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  notifyDelete();
                  handleDelete(oneProduct.id);
                }}
              >
                Delete
              </button>
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

export default AdminPage;
