import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, A11y, Grid, Autoplay } from "swiper";
import styles from "./style.module.scss";
import "swiper/scss";
import "swiper/css/free-mode";
import "swiper/scss/grid";

export function IconSlider() {
  const technologies = [
    "angular",
    "react",
    "kubernetes",
    "aws",
    "java",
    "laravel",
    "symfony",
    "golang",
    "php",
    "bitbucket",
    "vue",
    "digitalOcean",
  ];
  return (
    <div
      className={styles["slider-wrapper"] + " pb-[50px] px-[25px] md:px-[50px]"}
    >
      <Swiper
        modules={[A11y, Navigation, Grid, Autoplay, FreeMode]}
        spaceBetween={5}
        slidesPerView={3}
        grid={{ rows: 1 }}
        className={styles["icon-slider"]}
        autoplay={{ delay: 100 }}
        speed={3000}
        loop={true}
        freeMode={true}
        breakpoints={{
          200: {
            grid: { rows: 1 },
            slidesPerView: 3,
          },
          420: {
            grid: { rows: 1 },
            slidesPerView: 5,
          },
          600: {
            grid: { rows: 1 },
            slidesPerView: 7,
          },
          950: {
            grid: { rows: 1 },
            slidesPerView: 12,
          },
        }}
      >
        {technologies.map((element) => {
          return (
            <SwiperSlide key={element} className={styles["icon-slide"]}>
              <div className={styles["slide-wrapper"]}>
                <div
                  className={`${styles["icon"]} ${styles[`icon-${element}`]}`}
                ></div>
                <div className={styles["slide-title"]}>
                  {element[0].toUpperCase() + element.slice(1)}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
