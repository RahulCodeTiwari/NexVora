import React from "react";
import ProductCard from "../components/products/ProductCard";

const products = [
  {
    id: 1,
    name: "CRM Management System",
    desc: "A powerful CRM solution to manage leads, customers, sales pipelines, and analytics efficiently.",
    image: "/products/crm.jpg",
    slug: "crm-management-system",
    features: ["Lead Management", "Sales Tracking", "Analytics Dashboard"],
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    desc: "Complete e-commerce solution with product management, payment integration, and order tracking.",
    image: "/products/ecommerce.jpg",
    slug: "ecommerce-platform",
    features: ["Product Catalog", "Secure Payments", "Order Management"],
  },
  {
    id: 3,
    name: "Inventory Management System",
    desc: "Track stock, suppliers, and product movement with real-time reporting and automation.",
    image: "/products/inventory.jpg",
    slug: "inventory-management",
    features: ["Stock Tracking", "Supplier Management", "Reports"],
  },
  {
    id: 4,
    name: "HR Management Software",
    desc: "Manage employee records, attendance, payroll, and performance in one platform.",
    image: "/products/hr.jpg",
    slug: "hr-management-software",
    features: ["Employee Records", "Attendance", "Payroll System"],
  },
];

const Products = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Products
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Explore our innovative software products designed to help businesses
          improve efficiency and accelerate growth.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Need a Custom Software Solution?
        </h2>

        <p className="text-blue-100 mb-6">
          Our team can build tailored software products for your business needs.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Our Team
        </button>

      </section>

    </div>
  );
};

export default Products;