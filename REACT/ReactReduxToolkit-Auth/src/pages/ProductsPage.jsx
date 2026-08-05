import React from "react";
import ProductCard from "../components/ProductCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getProductsData } from "../api/ProductAPI";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsData,
    staleTime: 20000,
  });

  if (isPending) {
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
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
