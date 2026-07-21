import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import React from "react";
import { Route, Routes } from "react-router";
import NestedAbout from "../pages/NestedAbout";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="nested" element={<NestedAbout />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
