import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Product = ({ products, setProducts, setCartItem, cartItem }) => {
  console.log("Products:", products);
  console.log("ProductPage rendering");
  const getProductAPI = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(() => [...response.data.products]);
    } catch (error) {
      console.log("API err: ", error);
      alert("API error!");
    }
  };

  useEffect(() => {
    getProductAPI();
  }, []);

  return (
    <div className="text-white p-2 px-0.5 grid grid-cols-2 gap-2 sm:grid-cols-5">
      {products.map((elem) => {
        return (
          <ProductCard
            key={elem.id}
            product={elem}
            setCartItem={setCartItem}
            cartItem={cartItem}
          />
        );
      })}
    </div>
  );
};

export default Product;
