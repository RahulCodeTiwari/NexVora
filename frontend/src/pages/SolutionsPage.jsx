import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import burnerImg from "../assets/images/burner.png";
import { setSEO } from "../utils/seo";

// Solutions Data
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

const SolutionsPage = () => {
  const navigate = useNavigate();

   useEffect(() => {
        setSEO({
          title: "Best Food Processing Machine Manufacturer in India",
          description:
            "Top food processing machine manufacturer in India offering reliable, high-quality, and customized industrial solutions for every production need.",
          canonical: `${window.location.origin}`,
        });
      }, []);

  return (
    <div className="w-full py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Our Solutions</h1>
        <p className="text-gray-500 mt-3">
          Technology solutions tailored for modern businesses
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/solutions/${solution.slug}`)}
          >
            <img
              src={solution.icon}
              alt={solution.title}
              className="h-12 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold">{solution.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{solution.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;