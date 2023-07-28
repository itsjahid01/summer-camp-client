import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/bnner3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        autoplay={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px]"
      >
        <SwiperSlide>
          <div className="flex items-center bg-[#5FA1CE] rounded">
            <div className="w-[40%] flex-col justify-center p-8">
              <h2 className="text-4xl font-bold  mb-3">
                Welcome to WorldSpeak
              </h2>
              <p className="mb-3">
                Skills for your present (and your future). <br /> Get started
                with us.
              </p>
              <button className="btn bg-[#1A1C38] text-white hover:text-black">
                Learn More
              </button>
            </div>
            <div className="w-[60%]">
              <img src={banner1} className="rounded w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} className="rounded w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} className="rounded w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
