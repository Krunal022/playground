import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("err in User API - ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Fetched product data using Axios and rendered it dynamically in the UI.</h1>
      <div className="grid grid-cols-4 gap-3  mt-5">
        {productsData.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
