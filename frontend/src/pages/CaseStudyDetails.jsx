import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import burnerImg from "../assets/images/burner.png";

const caseStudiesData = {
  "ecommerce-platform": {
    title: "E-Commerce Platform Development",
    client: "Retail Brand",
    desc: "Built a scalable e-commerce platform with advanced product search, payment integration, and high performance.",
    tech: ["React", "Node.js", "MongoDB"],
    result: "Increased online sales by 60%",
    image: burnerImg,
    challenge:
      "The client needed a high-performance online store capable of handling large product catalogs, fast search, and secure payments.",
    solution:
      "We built a scalable MERN stack e-commerce platform with advanced search, optimized APIs, secure payments, and responsive UI.",
  },

  "healthcare-management": {
    title: "Healthcare Management System",
    client: "Hospital Network",
    desc: "Developed a secure system for patient records, appointments, and medical staff management.",
    tech: ["Next.js", "Express", "PostgreSQL"],
    result: "Reduced administrative workload by 40%",
    image: burnerImg,
    challenge:
      "Hospitals needed a centralized system to manage patient records, doctor schedules, and appointments securely.",
    solution:
      "We created a secure healthcare platform with role-based access, patient management, appointment booking, and reporting dashboards.",
  },

  "mobile-banking-app": {
    title: "Mobile Banking Application",
    client: "FinTech Startup",
    desc: "Created a secure mobile banking app with real-time transactions and biometric authentication.",
    tech: ["React Native", "Node.js", "Firebase"],
    result: "100K+ downloads within 3 months",
    image: burnerImg,
    challenge:
      "The fintech startup required a secure mobile app capable of real-time transactions and strong authentication.",
    solution:
      "We developed a mobile banking app with biometric login, real-time payment APIs, encrypted data storage, and scalable backend.",
  },
};

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const study = caseStudiesData[slug];

  if (!study) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
        <button
          onClick={() => navigate("/case-studies")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        >
          Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">{study.title}</h1>

        <p className="text-gray-300">
          Client: {study.client}
        </p>
      </section>

      {/* IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Project Overview
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {study.desc}
        </p>
      </section>

      {/* CHALLENGE */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            The Challenge
          </h2>

          <p className="text-gray-600">
            {study.challenge}
          </p>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Our Solution
          </h2>

          <p className="text-gray-600">
            {study.solution}
          </p>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-gray-100 py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Technologies Used
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {study.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-white px-4 py-2 rounded shadow text-gray-700 font-semibold"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* RESULT */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Result
        </h2>

        <p className="text-green-600 text-xl font-semibold">
          {study.result}
        </p>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Want Similar Results?
        </h2>

        <p className="text-blue-100 mb-8">
          Let’s discuss how we can help build your next successful project.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Your Project
        </button>

      </section>

    </div>
  );
};

export default CaseStudyDetails;