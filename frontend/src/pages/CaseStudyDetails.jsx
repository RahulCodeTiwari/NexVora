import { useParams, useNavigate } from "react-router-dom";
import burnerImg from "../assets/images/burner.png";

const caseStudies = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform Development",
    client: "Retail Brand",
    desc: "Built a scalable e-commerce platform with advanced product search, payment integration, and high performance.",
    tech: ["React", "Node.js", "MongoDB"],
    result: "Increased online sales by 60%",
    image: burnerImg,
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management System",
    client: "Hospital Network",
    desc: "Developed a secure system for patient records, appointments, and medical staff management.",
    tech: ["Next.js", "Express", "PostgreSQL"],
    result: "Reduced administrative workload by 40%",
    image: burnerImg,
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking Application",
    client: "FinTech Startup",
    desc: "Created a secure mobile banking app with real-time transactions and biometric authentication.",
    tech: ["React Native", "Node.js", "Firebase"],
    result: "100K+ downloads within 3 months",
    image: burnerImg,
  },
];

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {study.title}
        </h1>

        <p className="text-gray-300">
          Client: {study.client}
        </p>
      </section>

      {/* IMAGE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <img
          src={study.image}
          alt={study.title}
          className="w-full rounded-xl shadow-lg"
        />
      </section>

      {/* DETAILS */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-bold mb-4">
          Project Overview
        </h2>

        <p className="text-gray-600 mb-8">
          {study.desc}
        </p>

        {/* TECH STACK */}
        <h3 className="text-xl font-bold mb-3">
          Technologies Used
        </h3>

        <div className="flex flex-wrap gap-3 mb-8">
          {study.tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* RESULT */}
        <h3 className="text-xl font-bold mb-3">
          Result
        </h3>

        <p className="text-green-600 font-semibold mb-10">
          {study.result}
        </p>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/case-studies")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Case Studies
        </button>

      </section>

    </div>
  );
};

export default CaseStudyDetails;