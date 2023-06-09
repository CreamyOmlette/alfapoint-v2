import { SwiperSlide, Swiper } from "swiper/react";
import SliderButtons from "../slider-nav-button";
import Image from "next/image";

export function TechStack() {
  return (
    <>
      <div className="pb-[60px] md:col-span-2 md:pb-0">
        <h1 className="pb-[25px]">Technologies we work with</h1>
        <p className="pb-[24px] opacity-[70%]">
          We are a full-stack development company. We deliver projects for the
          web, iOS, Android, the IoT and other platforms using the most
          effective frameworks and proven approaches.
        </p>
        <p className="opacity-[70%]">
          If you&apos;re looking for some information, but can&apos;t find it
          here, please contact us.
        </p>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        className="relative md:hidden"
        breakpoints={{
          550: {
            slidesPerView: 4,
          },
        }}
      >
        <SliderButtons
          next="right-0 top-0"
          prev="right-[75px] top-0"
          hoverColor="group-hover:bg-regal-blue"
          borderHoverColor="hover:border-white"
          bgHoverColor="hover:bg-white"
        ></SliderButtons>
        <SwiperSlide className="pt-[75px]">
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/front-end.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Frontend</b>
          </h4>
          <ul className="leading-[32px]">
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Ember.js</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="pt-[75px]">
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/back-end.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Backend</b>
          </h4>
          <ul className="leading-[32px]">
            <li>Python</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Ruby</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Golang</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="pt-[75px]">
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/databases.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Databases</b>
          </h4>
          <ul className="leading-[32px]">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>CouchDB</li>
            <li>Neo4j</li>
            <li>ArangoDB</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="pt-[75px]">
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/infrastructure.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Infrastructure</b>
          </h4>
          <ul className="leading-[32px]">
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Docker</li>
            <li>K8s</li>
            <li>Travis</li>
            <li>Jenkins</li>
            <li>Kubernetes</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="pt-[75px]">
          <Image
            height={50}
            width={27.5}
            alt=""
            src="/home/mobile.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>iOS & Android</b>
          </h4>
          <ul className="leading-[32px]">
            <li>Swift</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>K8s</li>
            <li>React Native</li>
            <li>Reactotron</li>
            <li>Flutter</li>
          </ul>
        </SwiperSlide>
      </Swiper>
      <div className="max-md:hidden col-span-4 flex justify-between gap-[25px] pt-[70px]">
        <div>
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/front-end.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Frontend</b>
          </h4>
          <ul className="leading-[32px]">
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Ember.js</li>
          </ul>
        </div>
        <div>
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/back-end.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Backend</b>
          </h4>
          <ul className="leading-[32px]">
            <li>Python</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Ruby</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Golang</li>
          </ul>
        </div>
        <div>
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/databases.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Databases</b>
          </h4>
          <ul className="leading-[32px]">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>CouchDB</li>
            <li>Neo4j</li>
            <li>ArangoDB</li>
          </ul>
        </div>
        <div>
          <Image
            height={50}
            width={50}
            alt=""
            src="/home/infrastructure.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>Infrastructure</b>
          </h4>
          <ul className="leading-[32px]">
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Docker</li>
            <li>K8s</li>
            <li>Travis</li>
            <li>Jenkins</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        <div>
          <Image
            height={50}
            width={27.5}
            alt=""
            src="/home/mobile.svg"
            className="pb-[15px]"
          ></Image>
          <h4 className="leading-[32px]">
            <b>iOS & Android</b>
          </h4>
          <ul className="leading-[32px]">
            <li>Swift</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>K8s</li>
            <li>React Native</li>
            <li>Reactotron</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
    </>
  );
}
