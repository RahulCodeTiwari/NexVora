import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    desc: "Modern scalable web applications",
    slug: "web-development",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications",
    slug: "mobile-app-development",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure cloud infrastructure",
    slug: "cloud-solutions",
  },
  {
    title: "UI/UX Design",
    desc: "User focused design solutions",
    slug: "ui-ux-design",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {services.map((s, i) => (
          <div
            key={i}
            onClick={() => navigate(`/services/${s.slug}`)}
            className="border p-6 rounded-lg hover:shadow-lg cursor-pointer transition"
          >
            <h3 className="font-semibold text-xl">{s.title}</h3>

            <p className="text-gray-500 mt-2">{s.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ServicesSection;