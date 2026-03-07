import { useNavigate } from "react-router-dom";

import burnerImg from "../../assets/images/burner.png";


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

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-6">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Our Solutions
    </h2>

    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
      Powerful technology solutions designed to help modern businesses
      scale faster, innovate smarter, and stay ahead of the competition.
    </p>
  </div>

  {/* Solutions Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

    {solutions.map((solution) => (
      <div
        key={solution.id}
        onClick={() => navigate(`/solutions/${solution.slug}`)}
        className="group bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
      >

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 transition">
            <img
              src={solution.icon}
              alt={solution.title}
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          {solution.desc}
        </p>

        {/* Hover Link */}
        <span className="block mt-4 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
          Explore Solution →
        </span>

      </div>
    ))}

  </div>

</section>
  );
};

export default Solutions;