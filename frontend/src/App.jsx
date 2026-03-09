import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/layout/ScrollToTop";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Products from "./pages/Products";
import SolutionDetail from "./pages/SolutionDetail";
import SolutionsPage from "./pages/SolutionsPage";
import { Toaster } from "react-hot-toast";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";


function App() {
  return (
    <>
     <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
      }}
    />
    <Router>


      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/case-studies" element={<CaseStudies />} />

        <Route path="/solutions" element={<SolutionsPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/:slug" element={<BlogDetail />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />

      </Routes>

      <Footer />

    </Router>
    </>
  );
}

export default App;