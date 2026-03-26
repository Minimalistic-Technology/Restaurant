"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Autoplay aur EffectFade hata diya
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    role: "Traveler",
    text: "This platform made my trip planning so much easier! Highly recommended.",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHwwfDB8fHwy",
  },
  {
    name: "Jane Smith",
    role: "Blogger",
    text: "I loved how smooth the booking process was. Everything worked flawlessly.",
    img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGV8ZW58MHwwfDB8fHwy",
  },
  {
    name: "Alex Lee",
    role: "Photographer",
    text: "The curated travel packages are a lifesaver. Saved me hours of research.",
    img: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHwwfDB8fHwy",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-zinc-900 text-white"> 
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination]} // Sirf Navigation aur Pagination rakha hai
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={false} // Loop bhi band kar diya taaki confusion na ho
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-8 text-center max-w-lg mx-auto text-black">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover border-2 border-orange-500"
                  />
                </div>
                <p className="italic mb-4">&quot;{review.text}&quot;</p>
                <h4 className="text-orange-600 text-lg font-semibold">{review.name}</h4>
                <span className="text-gray-600">{review.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}