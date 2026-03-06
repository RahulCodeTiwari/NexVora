import React from "react";
import { useNavigate } from "react-router-dom";
import burnerImg from "../assets/images/burner.png";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    client: "Retail Brand",
    desc: "Built a scalable e-commerce platform with advanced product search, payment integration, and high performance.",
    tech: ["React", "Node.js", "MongoDB"],
    result: "Increased online sales by 60%",
    image: burnerImg,
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "Hospital Network",
    desc: "Developed a secure system for patient records, appointments, and medical staff management.",
    tech: ["Next.js", "Express", "PostgreSQL"],
    result: "Reduced administrative workload by 40%",
    image: burnerImg,
    slug: "healthcare-management",
  },
  {
    id: 3,
    title: "Mobile Banking Application",
    client: "FinTech Startup",
    desc: "Created a secure mobile banking app with real-time transactions and biometric authentication.",
    tech: ["React Native", "Node.js", "Firebase"],
    result: "100K+ downloads within 3 months",
    image: burnerImg,
    slug: "mobile-banking-app",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Case Studies
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Explore how we help businesses solve real-world problems with innovative digital solutions.
        </p>
      </section>

      {/* CASE STUDIES LIST */}
      <section className="py-16 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {caseStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => navigate(`/case-studies/${study.slug}`)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            >

              <img
                src={study.image}
                alt={study.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">
                  {study.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  Client: {study.client}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {study.desc}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* RESULT */}
                <p className="text-green-600 text-sm font-semibold mb-4">
                  Result: {study.result}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/case-studies/${study.slug}`);
                  }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Case Study →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Have a Project in Mind?
        </h2>

        <p className="text-blue-100 mb-6">
          Let’s build something amazing together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Your Project
        </button>
      </section>

    </div>
  );
};

export default CaseStudies;