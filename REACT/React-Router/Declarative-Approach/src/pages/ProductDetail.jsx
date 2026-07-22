import axios from "axios";
import { UndoDot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchSingleProduct = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("ProductDetail err: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-90 rounded-2xl py-10 px-5 animate-pulse">
        <div className="max-w-6xl mx-auto flex justify-end p-2">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
        </div>

        <div className="max-w-6xl mx-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-10 p-8">
          {/* Image Skeleton */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md h-112.5 rounded-xl bg-gray-300"></div>
          </div>

          {/* Details Skeleton */}
          <div className="space-y-5">
            <div className="h-6 w-24 rounded-full bg-gray-300"></div>

            <div className="h-10 w-3/4 rounded bg-gray-300"></div>

            <div className="h-5 w-40 rounded bg-gray-300"></div>

            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-300"></div>
              <div className="h-4 w-5/6 rounded bg-gray-300"></div>
              <div className="h-4 w-2/3 rounded bg-gray-300"></div>
            </div>

            <div className="flex gap-6">
              <div className="h-5 w-20 rounded bg-gray-300"></div>
              <div className="h-5 w-24 rounded bg-gray-300"></div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-28 rounded bg-gray-300"></div>
              <div className="h-8 w-24 rounded-full bg-gray-300"></div>
            </div>

            <div className="h-5 w-40 rounded bg-gray-300"></div>

            <div className="h-12 w-40 rounded-xl bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

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
