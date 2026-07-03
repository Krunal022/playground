import React from "react";

const ProductCard = ({ prod }) => {
  //   console.log(prod.id);
  return (
    <div className="card" key={prod.id}>
      <div className="img">
        <img src={prod.image} alt="" />
      </div>
      <div className="card-text">
        <h3>{prod.title.substring(0,19)}..</h3>
        <p>{prod.description.substring(0,50)}...</p>
        <div className="lower">
          <h4 className="price">₹{prod.price}</h4>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
