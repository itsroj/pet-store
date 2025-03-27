import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartPage.css";


const CartPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/cart`)
      .then((response) => {
        // Add quantity field if it doesn't exist
        const productsWithQuantity = response.data.map(product => ({
          ...product,
          quantity: product.quantity || 1
        }));
        setAllProducts(productsWithQuantity);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleRemove(productId) {
    // Remove from UI
    const filteredProducts = allProducts.filter(
      (oneProduct) => productId !== oneProduct.id
    );
    setAllProducts(filteredProducts);

    // Remove from backend
    axios
      .delete(`${import.meta.env.VITE_APP_URL}/cart/${productId}`)
      .then((response) => {
        console.log("product removed from cart", response.data);
      })
      .catch((error) => console.log(error));
  }

  function handleQuantityChange(productId, newQuantity) {
    // Don't allow quantities below 1
    if (newQuantity < 1) return;
    
    // Update the UI first
    const updatedProducts = allProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    
    setAllProducts(updatedProducts);
    
    // Update the backend
    const productToUpdate = updatedProducts.find(p => p.id === productId);
    axios
      .put(`${import.meta.env.VITE_APP_URL}/cart/${productId}`, productToUpdate)
      .then(response => {
        console.log("Updated quantity:", response.data);
      })
      .catch(error => console.log(error));
  }

  // Calculate cart total
  const cartTotal = allProducts.reduce(
    (total, product) => total + product.price * (product.quantity || 1), 
    0
  );

  const notify = () => toast("Added to Cart");

  return (
    <div className="cartContainer">
      <h2>Your Cart</h2>
      
      {allProducts.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping!</Link></p>
      ) : (
        <>
          <div className="cartItems">
            {allProducts.map((oneProduct) => (
              <div key={oneProduct.id} className="cartItem">
                <div className="cartItemImage">
                  <Link to={`/pets/${oneProduct.id}`}>
                    <img src={oneProduct.image} alt="product image" />
                  </Link>
                </div>
                <div className="cartItemDetails">
                  <h4>{oneProduct.name}</h4>
                  <p>Price: {oneProduct.price}€</p>
                  
                  <div className="quantityControl">
                    <button 
                      onClick={() => handleQuantityChange(oneProduct.id, (oneProduct.quantity || 1) - 1)}
                      className="quantityBtn"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    
                    <span className="quantityDisplay">{oneProduct.quantity || 1}</span>
                    
                    <button 
                      onClick={() => handleQuantityChange(oneProduct.id, (oneProduct.quantity || 1) + 1)}
                      className="quantityBtn"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    
                    <button 
                      onClick={() => handleRemove(oneProduct.id)}
                      className="removeBtn"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  
                  <p className="itemTotal">
                    Item total: {(oneProduct.price * (oneProduct.quantity || 1)).toFixed(2)}€
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cartSummary">
            <h3>Cart Summary</h3>
            <div className="cartTotal">
              <span>Total:</span>
              <span>{cartTotal.toFixed(2)}€</span>
            </div>
            <button className="checkoutBtn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
