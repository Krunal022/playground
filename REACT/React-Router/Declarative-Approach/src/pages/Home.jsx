import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);
  console.log("Products->", productsData);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      // console.log(res.data.products);
      setProductsData(res.data.products);
    } catch (error) {
      console.log("FetchProductAPI err: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-black  grid grid-cols-1 sm:grid-cols-4 gap-2">
      {productsData.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default Home;
