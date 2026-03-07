import burnerImg from "../../assets/images/burner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  burnerImg,
  burnerImg,
  burnerImg,
  burnerImg,
  burnerImg,
  burnerImg,
];

const Clients = () => {
  return (
    <section className="py-20 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Clients
        </h2>

        <p className="text-gray-500 mt-3">
          Trusted by innovative companies worldwide
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-6">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >

          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex justify-center items-center">

                <img
                  src={client}
                  alt="client"
                  className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                />

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Clients;