import { Link } from "react-router-dom";
import burnerImg from "../../assets/images/burner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Web Development",
    desc: "Modern, scalable and high performance websites for businesses.",
    image: burnerImg,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "Powerful Android and iOS applications with seamless experience.",
    image: burnerImg,
    link: "/services/mobile-app-development",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure cloud infrastructure to deploy and scale applications.",
    image: burnerImg,
    link: "/services/cloud-solutions",
  },
  {
    title: "AI & Machine Learning",
    desc: "AI-powered systems that automate processes and drive insights.",
    image: burnerImg,
    link: "/services/ai-machine-learning",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your online presence with SEO and marketing strategies.",
    image: burnerImg,
    link: "/services/digital-marketing",
  },
];

const Hero = () => {
  return (
<section className="bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-900 text-white py-20">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>

            <div className="py-24 px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

              {/* TEXT */}
              <div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-4 text-gray-300">
                  {slide.desc}
                </p>

                <Link to={slide.link}>
                  <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                    Explore Service
                  </button>
                </Link>

              </div>

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[350px] object-contain"
                />
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;


// │
// ├── backend
// │
// │   ├── config
// │   │   └── db.js
// │   │
// │   ├── controllers
// │   │   ├── authController.js
// │   │   ├── serviceController.js
// │   │   └── contactController.js
// │   │
// │   ├── models
// │   │   ├── User.js
// │   │   ├── Service.js
// │   │   └── Contact.js
// │   │
// │   ├── routes
// │   │   ├── authRoutes.js
// │   │   ├── serviceRoutes.js
// │   │   └── contactRoutes.js
// │   │
// │   ├── middleware
// │   │   ├── authMiddleware.js
// │   │   └── errorMiddleware.js
// │   │
// │   ├── utils
// │   │   └── sendEmail.js
// │   │
// │   ├── uploads
// │   │
// │   ├── server.js
// │   ├── package.json
// │   └── .env
// │
// │
// ├── frontend
// │
// │   ├── public
// │   │   └── images
// │   │
// │   ├── src
// │   │
// │   │   ├── assets
// │   │   │   └── logo.png
// │   │   │
// │   │   ├── components
// │   │   │   ├── layout
// │   │   │   │   ├── Navbar.jsx
// │   │   │   │   └── Footer.jsx
// │   │   │   │
// │   │   │   ├── ui
// │   │   │   │   ├── Button.jsx
// │   │   │   │   └── Loader.jsx
// │   │   │   │
// │   │   │   └── cards
// │   │   │       └── ServiceCard.jsx
// │   │   │
// │   │   ├── pages
// │   │   │   ├── Home.jsx
// │   │   │   ├── Services.jsx
// │   │   │   ├── About.jsx
// │   │   │   ├── Contact.jsx
// │   │   │   └── NotFound.jsx
// │   │   │
// │   │   ├── api
// │   │   │   └── axios.js
// │   │   │
// │   │   ├── hooks
// │   │   │   └── useFetch.js
// │   │   │
// │   │   ├── context
// │   │   │   └── AuthContext.jsx
// │   │   │
// │   │   ├── utils
// │   │   │   └── helpers.js
// │   │   │
// │   │   ├── App.jsx
// │   │   ├── main.jsx
// │   │   └── index.css
// │   │
// │   ├── package.json
// │   └── vite.config.js
// │
// │
// └── README.md