import React from "react";
// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    name: "James, Stratford, Ontario.",
    review:
      "I used Diamond Steel Roofing products to accent my bump outs on my mansard roof. I love the look of the product and the supportive people manufacturing and selling it! I look forward to using their product on my next projects.",
  },
  {
    name: "Donald, Ripley, Ontario.",
    review:
      "Originally I chose a Diamond Steel roof for it's longevity hoping that it would last my lifetime and maybe save the next generation from having to put a new roof on for a while. However after seeing the finished roof I was amazed at how good it made the old house look and many others have commented on this as well. The installer Tom Symes and his crew were also excellent to work with.  Thanks again.",
  },
  {
    name: "Denise, Stratford, Ontario",
    review:
      "We love our roof that you installed last Fall and have received many compliments! We highly recommend Diamond Steel Roofing! Thank you!",
  },
];

const Reviews = () => {
  return (
    <>
      <div className="bg-gray-200 mb-6">
        <h5 className="text-4xl text-center pb-20">Testimonials</h5>
        <Swiper
          className=""
          spaceBetween={35}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index} className="p-24 w-[50%] bg-gray-500">
                <div className=""></div>
                <h5 className="w-[80%] block m-3 font-bold text-white">
                  {name}
                </h5>
                <small className="w-[80%] h-[50%] block m-3  text-base text-white">
                  {review}
                </small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
