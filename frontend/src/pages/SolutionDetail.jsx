import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import burnerImg from "../assets/images/burner.png";

const solutions = [
  {
    id: 1,
    title: "Enterprise Software",
    desc: "Custom enterprise applications designed for scalability and performance.",
    icon: burnerImg,
    slug: "enterprise-software",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    desc: "Secure and scalable cloud architecture for modern businesses.",
    icon: burnerImg,
    slug: "cloud-infrastructure",
  },
  {
    id: 3,
    title: "AI & Data Analytics",
    desc: "Transform your data into actionable insights with AI-powered solutions.",
    icon: burnerImg,
    slug: "ai-data-analytics",
  },
  {
    id: 4,
    title: "Mobile Applications",
    desc: "Build high-performance mobile apps for Android and iOS platforms.",
    icon: burnerImg,
    slug: "mobile-apps",
  },
];

const SolutionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Solution Not Found</h2>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{solution.title}</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">{solution.desc}</p>
        <button
          onClick={() => navigate("/solutions")}
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to Solutions
        </button>
      </section>

      {/* Icon / Image */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <img
          src={solution.icon}
          alt={solution.title}
          className="mx-auto h-32 object-contain mb-6"
        />
      </section>

      {/* Features / Details */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-4">Why Choose This Solution?</h2>
        <p className="text-gray-600 mb-6">
          {solution.desc} Our solution is designed to meet the unique needs of modern businesses, ensuring scalability, performance, and efficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-gray-600 text-sm">Easily adapt to growing business demands.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">High Performance</h3>
            <p className="text-gray-600 text-sm">Optimized for speed and reliability.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm">Protect your business data with enterprise-level security.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-600 text-sm">Seamlessly connect with your existing systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;