import React from "react";
import { ShoppingCart, Star, Package } from "lucide-react";

const ProductCard = ({ product }) => {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="group w-full max-w-sm rounded-3xl bg-[#111111] border border-orange-500/20 overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative bg-[#1a1a1a] p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
          -{product.discountPercentage.toFixed(0)}%
        </span>

        {/* Stock Badge */}
        <span className="absolute right-4 top-4 rounded-full bg-green-500/20 border border-green-500 px-3 py-1 text-xs font-semibold text-green-400">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        {/* Brand & Category */}
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="rounded-full bg-orange-500/10 px-2 py-1 font-medium text-orange-400">
            {product.brand}
          </span>
          <span className="text-gray-400 capitalize">{product.category}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 text-orange-400">
            <Star size={16} fill="currentColor" />
            <span className="font-semibold">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-500 hover:underline cursor-pointer">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Stock Info */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
          <Package size={16} />
          <span>{product.stock} in stock</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-orange-400">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </p>
          </div>

          <div className=" flex gap-2 text-right text-xs text-gray-400">
            <p>Min: {product.minimumOrderQuantity}</p>
            <span>( {product.weight}g )</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 active:scale-[0.98] cursor-pointer">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
