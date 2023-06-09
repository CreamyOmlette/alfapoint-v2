import React from "react";
import { useSwiper } from "swiper/react";

export default function SliderButtons(props) {
  const swiper = useSwiper();
  return (
    <>
      <div
        className={
          props.next +
          " absolute rounded-full h-[50px] w-[50px] border-[#CCD6E5] border-[1px] z-10 rotate-180 flex justify-center items-center group transition-all duration-150 ease-in-out cursor-pointer " +
          props.bgHoverColor +
          " " +
          props.borderHoverColor
        }
        onClick={() => swiper.slideNext()}
      >
        <div
          className={
            "icon-arrow bg-[#CCD6E5] h-[14px] w-[9px] " + props.hoverColor
          }
        ></div>
      </div>
      <div
        className={
          props.prev +
          " absolute rounded-full h-[50px] w-[50px] border-[#CCD6E5] border-[1px] z-10 flex justify-center items-center group transition-all duration-150 ease-in-out cursor-pointer " +
          props.bgHoverColor +
          " " +
          props.borderHoverColor
        }
        onClick={() => swiper.slidePrev()}
      >
        <div
          className={
            "icon-arrow bg-[#CCD6E5] h-[14px] w-[9px] " + props.hoverColor
          }
        ></div>
      </div>
    </>
  );
}
