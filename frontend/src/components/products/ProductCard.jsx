import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-2">
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-4">
          {product.desc}
        </p>

        {/* FEATURES */}
        <ul className="text-sm text-gray-700 mb-4 space-y-1">
          {product.features?.slice(0, 3).map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>

        {/* BUTTON */}
        <Link
          to={`/products/${product.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;