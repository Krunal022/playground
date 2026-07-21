import axios from "axios";
import { UndoDot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const navigate = useNavigate();

  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("ProductDetail err: ", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div className="min-h-90 rounded-2xl text-black py-10 px-5">
      <h1
        onClick={() => navigate(-1)}
        className="max-w-6xl mx-auto text-white flex justify-end p-2 cursor-pointer"
      >
        <UndoDot />
      </h1>
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-10 p-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={singleProduct.thumbnail}
            alt={singleProduct.title}
            className="w-full max-w-md object-contain rounded-xl border border-gray-300"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {singleProduct.category}
          </span>

          <h1 className="text-4xl font-bold">{singleProduct.title}</h1>

          <p className="text-gray-500">
            Brand: <span className="font-semibold">{singleProduct.brand}</span>
          </p>

          <p className="text-gray-600 leading-7">{singleProduct.description}</p>

          <div className="flex gap-6 text-lg">
            <p>
              ⭐ <span className="font-semibold">{singleProduct.rating}</span>
            </p>

            <p>
              📦 <span className="font-semibold">{singleProduct.stock}</span> in
              stock
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <h2 className="text-4xl font-bold text-black">
              ${singleProduct.price}
            </h2>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
              {singleProduct.discountPercentage}% OFF
            </span>
          </div>

          <p
            className={`font-semibold ${
              singleProduct.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {singleProduct.availabilityStatus}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
