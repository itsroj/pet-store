import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const EditProduct = () => {

    const [name, setName] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");

    //with the update, the first thing is to fetch all the data for that project
    const { productId } = useParams();
    const nav = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5005/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
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
    }, [productId]);

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
            .put(`http://localhost:5005/products/${productId}`, updateProduct)
            .then((res) => {
                console.log("successfully updated", res.data);
                // nav("/");
              })
              .catch((err) => console.log(err));
    }

  return (
    <div>
      
    </div>
  )
}


