import React from "react";
import { useParams } from "react-router-dom";

const servicesData = {
  "web-development": {
    title: "Web Development",
    desc: "We build fast, scalable and modern websites using the latest technologies to help businesses grow online.",
    features: [
      "Responsive Website Development",
      "E-commerce Development",
      "Custom Web Applications",
      "API Integrations",
      "Performance Optimization"
    ],
    tech: ["React", "Node.js", "MongoDB", "Next.js"]
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    desc: "We create powerful and scalable mobile applications for Android and iOS platforms.",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross Platform Apps",
      "App UI/UX Design",
      "App Maintenance"
    ],
    tech: ["React Native", "Flutter", "Firebase"]
  },

  "ui-ux-design": {
    title: "UI / UX Design",
    desc: "Our designers create modern, user-friendly interfaces that enhance user engagement.",
    features: [
      "Wireframing",
      "User Research",
      "Prototype Design",
      "Mobile UI Design",
      "Web UI Design"
    ],
    tech: ["Figma", "Adobe XD", "Photoshop"]
  }
};

const ServiceDetails = () => {

  const { slug } = useParams();

  const service = servicesData[slug];

  if (!service) {
    return <div className="text-center py-20 text-xl">Service not found</div>;
  }

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {service.title}
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          {service.desc}
        </p>
      </section>


      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6"
            >
              ✔ {feature}
            </div>
          ))}

        </div>

      </section>


      {/* TECHNOLOGIES */}
      <section className="bg-gray-100 py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-gray-700">

          {service.tech.map((t, index) => (
            <span key={index} className="bg-white px-4 py-2 rounded shadow">
              {t}
            </span>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Start Your Project Today
        </h2>

        <p className="text-blue-100 mb-6">
          Let’s discuss your project and build something amazing together.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default ServiceDetails;