import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getProductsData } from "../api/ProductAPI";

const ProductsPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const gettingData = async () => {
    const res = await getProductsData();
    setProductData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    gettingData();
  }, []);

  if (isLoading) {
    return (
      <DotLottieReact
        className="bg-black min-h-screen flex items-center justify-center"
        src="https://lottie.host/461b93da-8154-4899-b0f9-32d7cb237790/ia3dSixZOj.lottie"
        loop
        autoplay
      />
    );
  }

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
