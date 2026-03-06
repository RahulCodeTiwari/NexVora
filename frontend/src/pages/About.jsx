import React from "react";

const About = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About NexVora
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          We are a technology-driven company delivering innovative digital
          solutions to help businesses grow, scale and succeed in the modern
          world.
        </p>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/about-company.jpg"
          alt="company"
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            NexVora is a full-service IT company focused on delivering powerful
            digital solutions including web development, mobile apps, UI/UX
            design, and enterprise software solutions.
          </p>

          <p className="text-gray-600 mb-4">
            Our team of experienced developers, designers, and strategists work
            together to build scalable products that help businesses transform
            digitally.
          </p>

          <p className="text-gray-600">
            We combine technology, creativity, and strategy to create solutions
            that drive measurable results.
          </p>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower businesses through innovative
              technology solutions that improve efficiency, productivity, and
              customer experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a global technology partner helping organizations
              transform digitally and achieve sustainable growth.
            </p>
          </div>

        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">150+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">80+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Let's Build Something Great Together
        </h2>

        <p className="mb-6 text-blue-100">
          Have an idea or project in mind? Our team is ready to help you bring
          it to life.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default About;