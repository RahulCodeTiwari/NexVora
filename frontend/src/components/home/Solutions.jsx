import { useNavigate } from "react-router-dom";

const solutions = [
  {
    id: 1,
    title: "Enterprise Software",
    desc: "Custom enterprise applications designed for scalability and performance.",
    icon: "/images/solution1.png",
    slug: "enterprise-software",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    desc: "Secure and scalable cloud architecture for modern businesses.",
    icon: "/images/solution2.png",
    slug: "cloud-infrastructure",
  },
  {
    id: 3,
    title: "AI & Data Analytics",
    desc: "Transform your data into actionable insights with AI-powered solutions.",
    icon: "/images/solution3.png",
    slug: "ai-data-analytics",
  },
  {
    id: 4,
    title: "Mobile Applications",
    desc: "Build high-performance mobile apps for Android and iOS platforms.",
    icon: "/images/solution4.png",
    slug: "mobile-apps",
  },
];

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Solutions
        </h2>

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
              className="h-12 mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold">
              {solution.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {solution.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Solutions;