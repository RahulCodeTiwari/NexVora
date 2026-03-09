import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

    {/* Company Info */}
    <div>
      <h2 className="text-2xl font-bold text-white">NexVora</h2>

      <p className="mt-4 text-sm leading-relaxed">
        We deliver modern web, mobile and cloud solutions
        to help businesses grow faster and smarter.
      </p>

      <Link to="/contact">
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-lg text-white text-sm font-semibold">
          Contact Us
        </button>
      </Link>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">
        Quick Links
      </h3>

      <ul className="space-y-3 text-sm">
        <li>
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>
        </li>

        <li>
          <Link to="/solutions" className="hover:text-white transition">
            Solutions
          </Link>
        </li>

        <li>
          <Link to="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">
        Services
      </h3>

      <ul className="space-y-3 text-sm">
        <li className="hover:text-white transition">Web Development</li>
        <li className="hover:text-white transition">Mobile App Development</li>
        <li className="hover:text-white transition">Cloud Solutions</li>
        <li className="hover:text-white transition">UI / UX Design</li>
        <li className="hover:text-white transition">Digital Transformation</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">
        Contact
      </h3>

      <p className="text-sm">Lucknow, Uttar Pradesh</p>

      <p className="text-sm mt-3 hover:text-white transition">
        info@nexvora.com
      </p>

      <p className="text-sm mt-3 hover:text-white transition">
        +91 7706987149
      </p>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
    <p>
      © {new Date().getFullYear()} NexVora. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;