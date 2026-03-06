import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./components/home/Solutions";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/case-studies" element={<CaseStudies />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;