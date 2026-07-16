import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="min-h-screen bg-black p-5">
      <Navbar setIsCartOpen={setIsCartOpen} />

      {isCartOpen ? (
        <Cart products={products} cartItem={cartItem} />
      ) : (
        <Product
          products={products}
          setProducts={setProducts}
          setCartItem={setCartItem}
          cartItem={cartItem}
        />
      )}
    </div>
  );
};

export default App;
