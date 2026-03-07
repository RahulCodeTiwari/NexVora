import React from "react";
import BlogCard from "../components/blog/BlogCard";
import burnerImg from "../../assets/images/burner.png";

const blogs = [
  {
    id: 1,
    title: "Top Web Development Trends in 2026",
    desc: "Discover the latest technologies and frameworks shaping the future of web development.",
    image: {burnerImg},
    category: "Web Development",
    date: "Jan 12, 2026",
    slug: "web-development-trends-2026",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Mobile App",
    desc: "Mobile apps are becoming essential for business growth and customer engagement.",
    image: {burnerImg},
    category: "Mobile Development",
    date: "Feb 05, 2026",
    slug: "business-mobile-app",
  },
  {
    id: 3,
    title: "How AI is Transforming Modern Businesses",
    desc: "Artificial Intelligence is revolutionizing industries with automation and smart insights.",
    image: {burnerImg},
    category: "Artificial Intelligence",
    date: "Feb 20, 2026",
    slug: "ai-transforming-business",
  },
  {
    id: 4,
    title: "UI/UX Design Principles for Better Products",
    desc: "Learn how good design improves user experience and boosts conversions.",
    image: {burnerImg},
    category: "UI/UX Design",
    date: "Mar 01, 2026",
    slug: "ui-ux-design-principles",
  },
];

const Blog = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Blog
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Insights, tutorials, and industry updates from our technology experts.
        </p>
      </section>


      {/* BLOG LIST */}
      <section className="py-16 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Want More Tech Insights?
        </h2>

        <p className="text-blue-100 mb-6">
          Stay updated with the latest trends in technology and digital solutions.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Subscribe Now
        </button>

      </section>

    </div>
  );
};

export default Blog;





// import { useEffect, useState } from "react";
// import api from "../api/axios";  // correct path lagao
// import { Link } from "react-router-dom";
// import { setSEO } from "../utils/seo";


// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//       api.get("/blog").then((res) => {
//           setBlogs(Array.isArray(res.data) ? res.data : []);
//         })
//         .catch((err) => {
//           console.error("Blog fetch error:", err);
//         });
//     }, []);

//     useEffect(() => {
//       setSEO({
//         title: "Creature Industry – Blog on Food Processing, Packaging",
//         description:
//           "Stay updated with insights, how-to guides, and industry news about packaging machinery and the food processing sector — from Creature Industry.",
//         canonical: `${window.location.origin}/blog/`,
//       });
//     }, []);

//    return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">
//         Blogs: {blogs.length}
//       </h1>

//       <div className="grid gap-6">
//         {blogs.map((blog) => {
//           const firstSection = blog.sections?.[0];

//           return (
//             <Link
//               key={blog._id}
//               to={`/${blog.slug}`}
//               className="border rounded p-4 hover:shadow transition"
//             >
//               <h2 className="font-bold text-2xl mb-2">
//                 {blog.title}
//               </h2>

//               {blog.featuredImage && (
//                 <img
//                   src={blog.featuredImage}
//                   alt={blog.title}
//                   className="mb-6 w-full h-auto rounded"
//                 />
//               )}

//               {firstSection?.description && (
//                 <div
//                   className="text-sm text-gray-600 line-clamp-3"
//                   dangerouslySetInnerHTML={{
//                     __html: firstSection.description,
//                   }}
//                 />
//               )}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Blog;
