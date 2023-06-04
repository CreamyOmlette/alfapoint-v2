import React from "react";
import { useSwiper } from "swiper/react";

export default function SliderButtons(props) {
  const swiper = useSwiper();
  return (
    <>
      <div
        className={
          props.next +
          " absolute rounded-full h-[50px] w-[50px] border-white border-[1px] z-10 bg-[url('../public/home/slider-arrow.svg')] bg-no-repeat bg-center rotate-180"
        }
        onClick={() => swiper.slideNext()}
      ></div>
      <div
        className={
          props.prev +
          " absolute rounded-full h-[50px] w-[50px] border-white border-[1px] z-10 bg-[url('../public/home/slider-arrow.svg')] bg-no-repeat bg-center"
        }
        onClick={() => swiper.slidePrev()}
      ></div>
    </>
  );
}
