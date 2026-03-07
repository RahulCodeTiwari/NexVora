import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setSEO } from "../utils/seo";

const solutionsData = {
  "enterprise-software": {
    title: "Enterprise Software Solutions",
    intro:
      "Custom enterprise software solutions designed to streamline operations, improve productivity, and scale with your business.",

    features: [
      "Custom ERP Development",
      "CRM Software Solutions",
      "Business Process Automation",
      "Integration with Existing Systems",
      "Secure Data Management",
      "Enterprise Dashboard & Analytics",
    ],

    benefits: [
      "Improve operational efficiency",
      "Automate business processes",
      "Centralized data management",
      "Scalable enterprise architecture",
    ],
  },

  "cloud-infrastructure": {
    title: "Cloud Infrastructure Solutions",
    intro:
      "Build secure and scalable cloud infrastructure to power your applications and digital services.",

    features: [
      "Cloud Server Setup",
      "Application Deployment",
      "Cloud Security Implementation",
      "Auto Scaling Infrastructure",
      "Backup & Disaster Recovery",
      "Performance Monitoring",
    ],

    benefits: [
      "High availability infrastructure",
      "Reduced operational cost",
      "Secure cloud environments",
      "Easy scalability",
    ],
  },

  "ai-data-analytics": {
    title: "AI & Data Analytics Solutions",
    intro:
      "Turn your data into valuable insights with artificial intelligence and advanced analytics.",

    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Business Intelligence Dashboards",
      "AI Automation Tools",
      "Data Visualization",
      "Big Data Processing",
    ],

    benefits: [
      "Better business decisions",
      "Automation of repetitive tasks",
      "Improved customer insights",
      "Data-driven strategies",
    ],
  },

  "mobile-apps": {
    title: "Mobile Application Solutions",
    intro:
      "Build modern mobile applications with seamless performance and engaging user experience.",

    features: [
      "Android App Development",
      "iOS App Development",
      "Cross Platform Apps",
      "Mobile UI/UX Design",
      "App Testing & Optimization",
      "App Store Deployment",
    ],

    benefits: [
      "Reach mobile-first customers",
      "Improve customer engagement",
      "High performance mobile apps",
      "Scalable mobile architecture",
    ],
  },
};

const processSteps = [
  {
    title: "Consultation",
    desc: "Understanding your business requirements and technical needs.",
  },
  {
    title: "Planning",
    desc: "Creating a structured roadmap for the solution implementation.",
  },
  {
    title: "Development",
    desc: "Building scalable and secure systems using modern technologies.",
  },
  {
    title: "Testing",
    desc: "Quality assurance to ensure performance and reliability.",
  },
  {
    title: "Deployment",
    desc: "Launching the solution and providing ongoing support.",
  },
];

const SolutionsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const solution = solutionsData[slug];


  if (!solution) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Solution Not Found</h2>
        <button
          onClick={() => navigate("/solutions")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        >
          Back to Solutions
        </button>
      </div>
    );
  }

   useEffect(() => {
      setSEO({
        title: "Best Food Processing Machine Manufacturer in India",
        description:
          "Top food processing machine manufacturer in India offering reliable, high-quality, and customized industrial solutions for every production need.",
        canonical: `${window.location.origin}`,
      });
    }, []);

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">{solution.title}</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          {solution.intro}
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solution.features.map((feature, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {solution.benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Our Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, i) => (
            <div key={i}>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Solution?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default SolutionsDetails;