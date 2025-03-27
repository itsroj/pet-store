import axios from "axios";


export const addToCart = (product) => {
 
   
    
    //second step is to send a request to the json server to delete one product
    axios
      .post(`${import.meta.env.VITE_APP_URL}/cart/`, product)
      .then((response) => {
        console.log("product added to cart... nice work", response.data);
      })
      .catch((error) => console.log(error));
  

}



