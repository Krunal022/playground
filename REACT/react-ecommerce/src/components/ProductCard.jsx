import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, setCartItem }) => {
  const addToCart = () => {
    setCartItem((prev) => [...prev, product]);
    alert("Product added into Cart! 🎉")
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-0.5">
      {/* Image */}
      <div className="relative bg-gray-100 overflow-hidden ">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-72 object-contain group-hover:scale-110 transition duration-500"
        />

        {/* Category */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1 rounded-full capitalize shadow">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating + Stock */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="font-medium text-gray-700">{product.rating}</span>
          </div>

          <span
            className={`font-medium ${
              product.stock > 0 ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">₹{product.price}</h3>

          <button
            onClick={addToCart}
            className="cursor-pointer flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
