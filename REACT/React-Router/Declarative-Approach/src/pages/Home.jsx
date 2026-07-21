import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, setProducts } = useContext(MyStore);
  console.log("Products->", products);

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    // console.log(res.data.products);
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-black  grid grid-cols-1 sm:grid-cols-4 gap-2">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Home;
