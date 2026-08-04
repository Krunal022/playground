import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [productData, setProductData] = useState([]);
  console.log(productData);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setProductData(res.data.products);
    } catch (error) {
      console.log("Err in FetchingProduct API:", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
