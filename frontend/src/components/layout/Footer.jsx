import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

      
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            NexVora
          </h2>

          <p className="mt-4 text-sm">
            We deliver modern web, mobile and cloud solutions
            to help businesses grow faster and smarter.
          </p>
        </div>

        <div>
          <button className="bg-orange-500 px-6 py-2 rounded-xl text-lg font-bold">contactUs</button>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link to="/solutions" className="hover:text-white">
                Solutions
              </Link>
            </li>

            <li>
              <Link to="/case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Solutions</li>
            <li>UI / UX Design</li>
            <li>Digital Transformation</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p className="text-sm">
            Lucknow, Uttar Pradesh
          </p>

          <p className="text-sm mt-2">
            info@nexvora.com
          </p>

          <p className="text-sm mt-2">
            +91 7706987149
          </p>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">

        <p>
          © {new Date().getFullYear()} NexVora. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;