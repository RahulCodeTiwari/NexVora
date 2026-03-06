import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          TechSolutions
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">

          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link to="/services" className="hover:text-orange-500">
            Services
          </Link>

          <Link to="/solutions" className="hover:text-orange-500">
            Solutions
          </Link>

          <Link to="/case-studies" className="hover:text-orange-500">
            Case Studies
          </Link>

          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>

          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <Link
            to="/"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/solutions"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </Link>

          <Link
            to="/case-studies"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>

          <Link
            to="/about"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block px-6 py-3"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;