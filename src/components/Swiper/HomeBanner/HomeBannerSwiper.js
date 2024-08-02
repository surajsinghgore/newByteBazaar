"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Autoplay styles

import { SwiperData } from "@/data/HomeSwiperData";
import HomeSwiperCard from "@/components/HomeBanner/HomeSwiperCard";

export default function HomeBannerSwiper() {
  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {SwiperData.map((item) => (
        <SwiperSlide key={item.id}>
          <HomeSwiperCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
