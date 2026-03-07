import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "John Smith",
    company: "Retail Brand",
    text: "Amazing development team. Delivered our project on time with excellent quality.",
  },
  {
    name: "Sarah Johnson",
    company: "Healthcare Group",
    text: "Highly professional team. Our platform performance improved significantly.",
  },
  {
    name: "Michael Brown",
    company: "FinTech Startup",
    text: "Great communication and outstanding technical expertise.",
  },
  {
    name: "David Lee",
    company: "E-commerce Company",
    text: "They helped us scale our business with a powerful digital platform.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Clients Say
        </h2>

        <p className="text-gray-400 mt-3">
          Trusted by businesses worldwide
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>

              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full">

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  “{t.text}”
                </p>

                {/* Client */}
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold">
                    {t.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {t.company}
                  </p>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;