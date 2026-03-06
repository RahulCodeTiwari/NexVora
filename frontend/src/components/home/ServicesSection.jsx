const services = [
  {
    title: "Web Development",
    desc: "Modern scalable web applications",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure cloud infrastructure",
  },
  {
    title: "UI/UX Design",
    desc: "User focused design solutions",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {services.map((s, i) => (
          <div
            key={i}
            className="border p-6 rounded-lg hover:shadow-lg"
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