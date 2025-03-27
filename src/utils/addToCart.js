import axios from "axios";

export const addToCart = (product) => {
  // 1. Fetch the cart from the backend
  axios
    .get(`${import.meta.env.VITE_APP_URL}/cart`)
    .then((response) => {
      const cartItems = response.data;
      
      // 2. Check if there's a product in the cart with the same id
      const existingProduct = cartItems.find(item => item.id === product.id);
      
      if (existingProduct) {
        // 3. If product exists, update its quantity
        const updatedQuantity = existingProduct.quantity ? existingProduct.quantity + 1 : 2;
        
        axios
          .patch(`${import.meta.env.VITE_APP_URL}/cart/${existingProduct.id}`, { 
            quantity: updatedQuantity 
          })
          .then((response) => {
            console.log("Product quantity updated in cart", response.data);
          })
          .catch((error) => console.log(error));
      } else {
        // 4. If product doesn't exist, add it to cart with quantity 1
        const productWithQuantity = {
          ...product,
          quantity: 1
        };
        
        axios
          .post(`${import.meta.env.VITE_APP_URL}/cart/`, productWithQuantity)
          .then((response) => {
            console.log("New product added to cart", response.data);
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => {
      console.log("Error fetching cart:", error);
    });
};



