import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderItem from "./components/SliderItem";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/4.png";

function FirstSection() {
  return (
    <div className="bg-[#f2f1f6] flex w-full justify-center">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
      >
        {/* <SwiperSlide>
          <SliderItem text="Procurando por um diferencial? Aqui você acha brindes personalizados que fazem a diferença!" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem text="Diversas opções de brindes para sua logo brilhar!" />
        </SwiperSlide> */}
        <SwiperSlide>
          <SliderItem image={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem image={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem image={Image4} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <SliderItem text="Faça sua marca ser memorável, personalize!" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default FirstSection;
