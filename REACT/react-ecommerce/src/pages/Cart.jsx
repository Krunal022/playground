import React from "react";
import CartCard from "../components/CartCard";

const Cart = ({ cartItem }) => {
  console.log("CartItems:", cartItem);
  return (
    <div className="text-white p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {cartItem.map((elem) => {
        return <CartCard product={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Cart;
