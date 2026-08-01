import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("err in User API - ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <DotLottieReact
        src="https://lottie.host/a8ee67bb-2630-4987-b662-b0f9333c0fb8/ZXMo77axXK.json"
        loop
        autoplay
      />
    );
  }

  return (
    <div>
      <h1>
        Fetched product data using Axios and rendered it dynamically in the UI.
      </h1>
      <div className="grid grid-cols-4 gap-3  mt-5">
        {productsData.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
