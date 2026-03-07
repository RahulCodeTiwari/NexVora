import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const services = {
  "web-development": {
    title: "Website Development",
    intro:
      "We create modern, responsive and high-performance websites that help businesses grow online.",
    features: [
      "Custom Website Development",
      "Responsive Mobile Friendly Design",
      "E-commerce Development",
      "Admin Dashboard & CMS",
      "API Integration",
      "Website Maintenance & Support",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Next.js", "AWS"],
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    intro:
      "We build high-performance mobile applications for Android and iOS platforms.",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross Platform Apps",
      "App UI/UX Design",
      "API Integration",
      "App Maintenance",
    ],
    technologies: ["Flutter", "React Native", "Firebase", "Node.js"],
  },

  "ui-ux-design": {
    title: "UI / UX Design",
    intro:
      "We design user-friendly and visually appealing interfaces that improve user experience.",
    features: [
      "Website UI Design",
      "Mobile App UI Design",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    technologies: ["Figma", "Adobe XD", "Photoshop"],
  },

  "cloud-solutions": {
  title: "Cloud Solutions",
  intro:
    "We provide secure and scalable cloud infrastructure solutions that help businesses deploy, manage, and scale their applications efficiently.",

  features: [
    "Cloud Infrastructure Setup",
    "Application Deployment",
    "Server Management",
    "Cloud Migration",
    "Backup & Disaster Recovery",
    "Security & Monitoring"
  ],

  technologies: [
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "Nginx"
  ]
},

"ai-machine-learning": {
  title: "AI & Machine Learning",
  intro:
    "We build intelligent systems using artificial intelligence and machine learning that help businesses automate operations and gain data-driven insights.",

  features: [
    "AI Chatbot Development",
    "Machine Learning Models",
    "Data Analysis & Prediction",
    "Business Automation",
    "Recommendation Systems",
    "Natural Language Processing"
  ],

  technologies: [
    "Python",
    "TensorFlow",
    "OpenAI",
    "LangChain",
    "Pandas"
  ]
},

"digital-marketing": {
  title: "Digital Marketing",
  intro:
    "Our digital marketing strategies help businesses grow their online presence, attract more customers, and increase conversions.",

  features: [
    "Search Engine Optimization (SEO)",
    "Google Ads Campaigns",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Conversion Optimization"
  ],

  technologies: [
    "Google Analytics",
    "Google Ads",
    "Meta Ads",
    "SEMrush",
    "Ahrefs"
  ]
},

"ecommerce-development": {
  title: "E-commerce Development",
  intro:
    "Our e-commerce development services help businesses build powerful online stores with secure payments, seamless shopping experiences, and scalable platforms to grow sales.",

  features: [
    "Custom E-commerce Website Development",
    "Shopping Cart & Checkout System",
    "Secure Payment Gateway Integration",
    "Product & Inventory Management",
    "Order Tracking System",
    "Mobile-Friendly Online Store"
  ],

  technologies: [
    "Shopify",
    "WooCommerce",
    "Magento",
    "React",
    "Node.js"
  ]
},
};

const process = [
  {
    title: "Discovery",
    desc: "Understanding your business goals and project requirements.",
  },
  {
    title: "Design",
    desc: "Creating wireframes and modern UI designs.",
  },
  {
    title: "Development",
    desc: "Building scalable and secure applications.",
  },
  {
    title: "Testing",
    desc: "Quality assurance across devices and browsers.",
  },
  {
    title: "Launch",
    desc: "Deploying the product and providing support.",
  },
];

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services[slug];

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <button
          onClick={() => navigate("/services")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          {service.intro}
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Development Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {process.map((step, i) => (
            <div key={i} className="text-center">
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {service.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 px-6 py-2 rounded-lg font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
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

export default ServiceDetails;