import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Have a project in mind or need help with digital solutions?
          Our team is ready to assist you.
        </p>

      </section>


      {/* CONTACT SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-8">
            Feel free to reach out to us for any inquiries,
            collaborations, or project discussions.
          </p>

          <div className="space-y-4 text-gray-700">

            <p>
              📍 Address: 123 Tech Street, New York, USA
            </p>

            <p>
              📞 Phone: +1 234 567 890
            </p>

            <p>
              📧 Email: info@nexvora.com
            </p>

          </div>

        </div>


        {/* CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* MAP */}
      <section className="w-full h-[400px]">

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </section>

    </div>
  );
};

export default Contact;