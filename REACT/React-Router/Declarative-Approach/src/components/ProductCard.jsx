import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-90 bg-white rounded-3xl p-4 shadow-xl hover:scale-99 transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full bg-gray-200 h-64 object-contain rounded-2xl"
        />

        <span className="absolute top-3 left-3 bg-gray-400 backdrop-blur px-3 py-1 text-xs rounded-full">
          Best Seller
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-xl font-bold line-clamp-1">{product.title}</h2>

        <p className="text-sm text-gray-500 capitalize mt-1">
          {product.category}
        </p>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-gray-500 text-sm">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
