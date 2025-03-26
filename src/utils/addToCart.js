


export const addToCart = (allProducts,itemId) => {

console.log("item :",item);
console.log("itemId:",itemId)
 
   
   
    
    //second step is to send a request to the json server to delete one product
    axios
      .post(`http://localhost:5005/cart/${productId}`)
      .then((response) => {
        console.log("product added to cart... nice work", response.data);
      })
      .catch((error) => console.log(error));
  

}



