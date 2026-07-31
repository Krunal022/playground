import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
      {/* Image */}
      <div className="h-56 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Category */}
      <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
        {product.category}
      </span>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 line-clamp-3">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating.rate}
        </span>
        <span className="text-sm text-gray-500">
          ({product.rating.count} reviews)
        </span>
      </div>

      {/* Price & Button */}
      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-bold text-purple-700">${product.price}</p>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
