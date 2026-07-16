import { Minus, Plus, Trash2 } from "lucide-react";

const CartCard = ({ product }) => {
  return (
    <div className="flex items-center gap-5 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>

        <p className="text-gray-500 text-sm capitalize">{product.category}</p>

        <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 border rounded-xl px-3 py-2">
        <button
          onClick={() => onDecrease(product.id)}
          className="text-red-500 cursor-pointer"
        >
          <Minus size={18} />
        </button>

        <span className="font-semibold text-black text-2xl">
          {product.quantity}1
        </span>

        <button
          onClick={() => onIncrease(product.id)}
          className="text-green-500 cursor-pointer"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Total Price */}
      <div className="w-28 text-right">
        <p className="text-lg font-bold text-gray-900">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 cursor-pointer hover:bg-red-50 p-2 rounded-lg transition"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartCard;
