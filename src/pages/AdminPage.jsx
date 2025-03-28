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
  const [loading, setLoading] = useState(true);

  //here we need get all of the products from our server
  useEffect(() => {
    fetchProducts();
  }, []);

  // function to load all the products
  const fetchProducts = () => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_URL}/products`)
      .then((response) => {
        setAllProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setLoading(false);
      });
  };

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

  // this function updates the product in the local list and ensures immediate updating in the UI
  const handleUpdateSuccess = (updatedProduct) => {
    // Update the product in the products state list
    setAllProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // function for opening the editing form
  const handleEdit = (productId) => {
    setEditId(productId);
    setShowEditForm(true);
  };

  return (
    <div className="adminContainer">
      <h3>Admin Dashboard</h3>
      
      <button
        type="button"
        className="addProductBtn"
        onClick={() => setShowForm(true)}
      >
        Add Product
      </button>{" "}
      {/* if you click the button it changes the state*/}
      {showEditForm ? (
        <EditProduct 
          editId={editId} 
          setShowEditForm={setShowEditForm} 
          onUpdateSuccess={handleUpdateSuccess} // this prop is important
        />
      ) : null}
      {showForm ? (
        <AddProduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          setShowForm={setShowForm}
        />
      ) : null}{" "}
      {/* if thats true it shows the form // sending props here! bcs we want the product at the top and dont load the page again. this was added for the props: allProducts = {allProducts} setAllProducts={setAllProducts}, and then go to AdminPage  */}
      <div className="adminProductList">
        <h3>All Products</h3>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="productContainer">
            {allProducts.map((oneProduct) => {
              return (
                <div key={oneProduct.id} className="productCard adminProductCard">
                  <Link to={`/pets/${oneProduct.id}`}>
                    <img src={oneProduct.image} alt="product image" />
                  </Link>
                  <h4>{oneProduct.name}</h4>
                  <p>Category: {oneProduct.category}</p>
                  <p>Animal Type: {oneProduct.animal_type}</p>
                  <p>Price: {oneProduct.price}€</p>
                  <p>Stock: {oneProduct.stock}</p>
                  <p>Description: {oneProduct.description}</p>
                  <div className="adminButtons">
                    <button
                      type="button"
                      className="updateProductBtn"
                      onClick={() => handleEdit(oneProduct.id)}
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
                </div>
              );
            })}
          </div>
        )}
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
