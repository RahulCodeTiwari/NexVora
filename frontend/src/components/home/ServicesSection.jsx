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
   <section className="py-24 bg-gray-50 px-6">
  
  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold">
      Our Services
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      We deliver modern digital solutions that help businesses grow,
      innovate, and stay ahead in the competitive market.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

    {services.map((s, i) => (
      <div
        key={i}
        onClick={() => navigate(`/services/${s.slug}`)}
        className="group bg-white border border-gray-200 rounded-2xl p-8 cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >

        {/* Icon */}
        <div className="text-4xl mb-5 group-hover:scale-110 transition">
          {s.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {s.desc}
        </p>

        {/* Learn More */}
        <span className="text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
          Learn More →
        </span>

      </div>
    ))}

  </div>

</section>
  );
};

export default ServicesSection;