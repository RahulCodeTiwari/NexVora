import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Ecommerce Platform Development",
    desc: "Built a scalable ecommerce platform with modern UI and payment integration.",
    image: "/images/case1.jpg",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    desc: "Developed a patient management mobile app with real-time data sync.",
    image: "/images/case2.jpg",
    slug: "healthcare-app",
  },
  {
    id: 3,
    title: "Cloud Migration Project",
    desc: "Migrated enterprise infrastructure to secure cloud environment.",
    image: "/images/case3.jpg",
    slug: "cloud-migration",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gray-50">

      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Case Studies
        </h2>

        <p className="text-gray-500 mt-3">
          Explore how we helped businesses achieve success
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {caseStudies.map((caseItem) => (
          <div
            key={caseItem.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {caseItem.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {caseItem.desc}
              </p>

              <button
                onClick={() => navigate(`/case-study/${caseItem.slug}`)}
                className="mt-4 text-orange-500 font-semibold hover:underline"
              >
                View Case Study →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CaseStudies;