import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white text-center overflow-hidden">

      {/* Glow effect */}
      <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full -top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -bottom-10 -right-10"></div>

      <div className="relative max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Start Your Next Project?
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Let’s build something amazing together. Our team helps businesses
          create powerful digital solutions that drive growth and success.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg font-semibold shadow-lg"
          >
            Get Free Consultation
          </Link>

          <Link
            to="/services"
            className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-3 rounded-lg font-semibold"
          >
            View Services
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;