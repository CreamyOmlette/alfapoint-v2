import React from "react";
import { useSwiper } from "swiper/react";

export default function SliderButtons(props) {
  const swiper = useSwiper();
  return (
    <>
      <div
        className={
          props.next +
          " absolute rounded-full h-[50px] w-[50px] border-white border-[1px] z-10 rotate-180 flex justify-center items-center hover:bg-white group transition-all duration-150 ease-in-out cursor-pointer"
        }
        onClick={() => swiper.slideNext()}
      >
        <div className="icon-arrow bg-white h-[14px] w-[9px] group-hover:bg-regal-blue"></div>
      </div>
      <div
        className={
          props.prev +
          " absolute rounded-full h-[50px] w-[50px] border-white border-[1px] z-10 flex justify-center items-center hover:bg-white group transition-all duration-150 ease-in-out cursor-pointer"
        }
        onClick={() => swiper.slidePrev()}
      >
        <div className="icon-arrow bg-white h-[14px] w-[9px] group-hover:bg-regal-blue"></div>
      </div>
    </>
  );
}
