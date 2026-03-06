const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Digital Solutions for Modern Businesses
          </h1>

          <p className="mt-4 text-gray-300">
            We build scalable web, mobile and cloud solutions
            that help businesses grow faster.
          </p>

          <button className="mt-6 bg-orange-500 px-6 py-3 rounded">
            Get Started
          </button>
        </div>

        <div>
          <img src="/images/hero.png" alt="hero" />
        </div>

      </div>

    </section>
  );
};

export default Hero;