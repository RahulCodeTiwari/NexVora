
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef();


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "App Development", path: "/services/mobile-app-development" },
    { name: "UI UX Design", path: "/services/ui-ux-design" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "AI & ML", path: "/services/ai-machine-learning" },
    { name: "E-commerce Development", path: "/services/ecommerce-development" },
  ];

   // outside click close
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);


  return (

   <nav
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#0B1F3A] shadow-md py-2"
      : "bg-[#0B1F3A]/90 backdrop-blur-lg py-4"
  }`}
>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-orange-500 tracking-wide"
        >
          NexVora
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}

          <div className="relative" ref={dropdownRef}>

      {/* Button */}
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="text-white hover:text-orange-500"
      >
        Services ▾
      </button>

      {/* Dropdown */}

      {servicesOpen && (

        <div className="absolute left-0 top-10 w-100 bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4">

          {services.map((service, i) => (
            <Link
              key={i}
              to={service.path}
              onClick={() => setServicesOpen(false)}
              className="p-3 rounded-lg hover:bg-gray-50 hover:text-orange-500 transition"
            >
              {service.name}
            </Link>
          ))}

        </div>

      )}

    </div>

          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            }
          >
            Solutions
          </NavLink>

          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            }
          >
            Case Studies
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* CTA */}

        <Link
          to="/contact"
          className="hidden md:block bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Get Quote
        </Link>

        {/* Mobile Button */}

       <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl text-white bg-[#0B1F3A] p-2 rounded-md hover:bg-[#132d55] transition"
>
  {menuOpen ? "✕" : "☰"}
</button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Services
          </NavLink>

          <NavLink
            to="/solutions"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Solutions
          </NavLink>

          <NavLink
            to="/case-studies"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Case Studies
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 border-b"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3"
          >
            Contact
          </NavLink>

        </div>

      )}

    </nav>

  );
};

export default Navbar;