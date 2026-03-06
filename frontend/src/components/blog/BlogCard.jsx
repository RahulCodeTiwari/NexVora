import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      {/* IMAGE */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        {/* CATEGORY */}
        <span className="text-sm text-blue-600 font-semibold">
          {blog.category}
        </span>

        {/* TITLE */}
        <h3 className="text-xl font-bold mt-2 mb-3">
          {blog.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-4">
          {blog.desc}
        </p>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-sm text-gray-500">

          <span>{blog.date}</span>

          <Link
            to={`/blog/${blog.slug}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default BlogCard;