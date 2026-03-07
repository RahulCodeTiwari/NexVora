import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "We build fast, scalable, and modern websites using the latest technologies for businesses of all sizes.",
    icon: "💻",
    slug: "web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Create powerful Android and iOS apps that deliver seamless user experiences.",
    icon: "📱",
    slug: "mobile-app-development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Design beautiful and user-friendly interfaces that improve engagement and conversions.",
    icon: "🎨",
    slug: "ui-ux-design",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    desc: "Deploy and manage scalable applications with secure cloud infrastructure.",
    icon: "☁️",
    slug: "cloud-solutions",
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    desc: "Leverage AI to automate processes and gain valuable business insights.",
    icon: "🤖",
    slug: "ai-machine-learning",
  },
  {
    id: 6,
    title: "Digital Marketing",
    desc: "Grow your online presence with SEO, social media marketing, and paid advertising.",
    icon: "📈",
    slug: "digital-marketing",
  },
  {
  id: 7,
  title: "E-commerce Development",
  desc: "Create scalable online stores with payment integration, inventory management, and optimized shopping experiences.",
  icon: "🛒",
  slug: "ecommerce-development",
},
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Services
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          We provide innovative technology services that help businesses
          scale faster and stay ahead in the digital era.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-gray-100 py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Technologies We Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {[
            "React",
            "Node.js",
            "MongoDB",
            "Next.js",
            "Docker",
            "AWS",
            "Python",
            "Flutter",
          ].map((tech, i) => (
            <span
              key={i}
              className="bg-white px-6 py-3 rounded-lg shadow text-gray-700 font-semibold hover:shadow-md transition"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="text-blue-100 mb-8">
          Let's build innovative digital solutions together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default Services;