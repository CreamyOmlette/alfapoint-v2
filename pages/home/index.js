import Image from "next/image";
import styles from "./home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import SliderButtons from "@/components/slider-nav-button";
import "swiper/css";
import { IconSlider } from "@/components/icon-slider";
import { FAQ } from "@/components/faq";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  const swiper = useSwiper();

  return (
    <main>
      <section className="h-[100vh] relative">
        <div
          className={`bg-[url('/home/jumbotron.png')] w-[100%] h-[100%] absolute z-0 bg-no-repeat bg-cover`}
        />
        <div
          className={`w-[100%] h-[100%] absolute z-10 jumbotron ${styles.jumbotron}`}
        />
        <div className="md:hidden absolute bottom-[100px] left-[25px] pr-[25px] z-10">
          <h1 className="pb-[25px]">
            Cost-efficient solutions for tech companies worldwide
          </h1>
          <h3 className="pb-[25px]">
            Startups of all sizes and fast-growing tech companies rely on
            Alfapoint as their software engineering partner. We provide them
            dedicated teams and deliver scalable products that users love.
          </h3>
          <button className="bg-white rounded pl-[25px] pr-[25px] leading-[40px] text-black">
            <h5 className="inline-block">BOOK A CALL</h5>
            <Image
              height={12}
              width={15}
              alt=""
              src="/button-arrow.svg"
              className="inline-block ml-[6px] h-[11.58px]"
            ></Image>
          </button>
        </div>
        <div className="max-md:hidden absolute bottom-[100px] left-[50px] pr-[50px] top-[20%] z-10 flex justify-between items-center gap-[50px]">
          <div className="max-w-[650px]">
            <h1 className="pb-[25px]">
              Cost-efficient solutions for tech companies worldwide
            </h1>
            <button className="bg-white rounded pl-[25px] pr-[25px] leading-[40px] text-black">
              <h5 className="inline-block">BOOK A CALL</h5>
              <Image
                height={12}
                width={15}
                alt=""
                src="/button-arrow.svg"
                className="inline-block ml-[6px] h-[11.58px]"
              ></Image>
            </button>
          </div>

          <h3 className="pb-[25px] max-w-[650px]">
            Startups of all sizes and fast-growing tech companies rely on
            Alfapoint as their software engineering partner. We provide them
            dedicated teams and deliver scalable products that users love.
          </h3>
        </div>
        <div className="max-md:hidden absolute bottom-[50px] flex w-[100%] justify-center gap-[50px] lg:gap-[100px] z-10">
          <Image width={253.3} height={50} alt="" src="/home/eu.svg"></Image>
          <Image width={70} height={50} alt="" src="/home/shell.svg"></Image>
          <Image width={59.69} height={50} alt="" src="/home/bp.svg"></Image>
          <Image width={130.01} height={50} alt="" src="/home/abb.svg"></Image>
          <Image width={113.65} height={50} alt="" src="/home/ksb.svg"></Image>
        </div>
      </section>
      <section className="bg-grey-1 py-[50px] px-[25px] md:px-[50px] text-[#161616] md:gap-[50px] md:grid md:grid-cols-2">
        <div>
          <h1 className="pb-[15px] lg:pt-[70px]">Alfapoint in short</h1>
          <h4 className="pb-[24px]">
            We are an international software development company that supports
            all types of organizations in digital and technical transformation.
          </h4>
          <h4 className="pb-[50px]">
            Since 2016, we have been working with businesses looking to turn
            their ideas into next-gen digital products. As custom software
            advocates, we deliver intuitive, scalable, and cost-effective
            solutions to startups and big companies alike.
          </h4>
          <div className="flex text-center gap-[20px] md:gap-[50px] pb-[50px]">
            <div>
              <h1 className="text-[42px]">50+</h1>
              <h5>software experts</h5>
            </div>
            <div>
              <h1 className="text-[42px]">7</h1>
              <h5>years on the market</h5>
            </div>
            <div>
              <h1 className="text-[42px]">30+</h1>
              <h5>projects delivered</h5>
            </div>
          </div>
          <button className="text-white rounded bg-regal-blue pl-[25px] pr-[25px] leading-[40px] mb-[50px]">
            <h5 className="inline-block">GET IN TOUCH</h5>
            <Image
              height={12}
              width={15}
              alt=""
              src="/button-arrow-white.svg"
              className="inline-block ml-[6px]"
            ></Image>
          </button>
        </div>
        <div>
          <h1 className="pb-[30px] md:hidden">Our approach</h1>
          <div className="py-[50px] px-[25px] bg-white mb-[25px]">
            <Image
              height={55}
              width={55}
              alt=""
              src="/home/transparency.svg"
              className="pb-[25px]"
            ></Image>
            <h2 className="pb-[10px]">Transparency in processes</h2>
            <p>
              Our processes are fully transparent and Client has access to all
              aspects of the product development at any stage.
            </p>
          </div>
          <div className="py-[50px] px-[25px] bg-white mb-[25px]">
            <Image
              height={55}
              width={55}
              alt=""
              src="/home/customer-satisfaction.svg"
              className="pb-[25px]"
            ></Image>
            <h2 className="pb-[10px]">Customer satisfaction</h2>
            <p>
              Our company has a proven 90% Client retention rate after the first
              project.
            </p>
          </div>
          <div className="py-[50px] px-[25px] bg-white">
            <Image
              height={55}
              width={55}
              alt=""
              src="/home/flexibility.svg"
              className="pb-[25px]"
            ></Image>
            <h2 className="pb-[10px]">Flexibility</h2>
            <p>
              We know that things change quickly so only several weeks of notice
              is necessary to cancel or change a Contract.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[50px] px-[25px] md:px-[50px] text-black">
        <h1 className="text-[#161616] pb-[50px] md:pb-[100px]">
          Services we offer
        </h1>
        <div className="flex flex-col gap-[50px] lg:gap-[25px] md:grid md:grid-cols-2 md-grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <div className="group relative cursor-pointer">
            <div className="p-[30px] h-full border-[1px] border-[#CCD6E5] md:group-hover:border-regal-blue  md:group-hover:-translate-y-[25px] transition-all duration-300 ease-in-out">
              <Image
                height={70}
                width={70}
                alt=""
                src="/home/custom-software.svg"
                className="pb-[25px]"
              ></Image>
              <h2 className="pb-[25px]">Custom Software development</h2>
              <p>
                We work with startups, SMEs & world leading enterprises to build
                customized software solutions
              </p>
            </div>
            <h6 className="bg-regal-blue h-[25px] leading-[25px] absolute bottom-0 w-full text-center text-white opacity-[0%] group-hover:opacity-[100%] transition-all duration-100 ease-in-out">
              EXPLORE
            </h6>
          </div>
          <div className="group relative cursor-pointer">
            <div className="p-[30px] h-full border-[1px] border-[#CCD6E5] md:group-hover:border-regal-blue  md:group-hover:-translate-y-[25px] transition-all duration-300 ease-in-out">
              <Image
                height={70}
                width={70}
                alt=""
                src="/home/dedicated-teams.svg"
                className="pb-[25px]"
              ></Image>
              <h2 className="pb-[25px]">Dedicated teams</h2>
              <p>
                We grow your team using our development resources and recruiting
                capabilities
              </p>
            </div>
            <h6 className="bg-regal-blue h-[25px] leading-[25px] absolute bottom-0 w-full text-center text-white opacity-[0%] group-hover:opacity-[100%] transition-all duration-100 ease-in-out">
              EXPLORE
            </h6>
          </div>

          <div className="group relative cursor-pointer">
            <div className="p-[30px] h-full border-[1px] border-[#CCD6E5] md:group-hover:border-regal-blue  md:group-hover:-translate-y-[25px] transition-all duration-300 ease-in-out">
              <Image
                height={70}
                width={70}
                alt=""
                src="/home/ui:ux.svg"
                className="pb-[25px]"
              ></Image>
              <h2 className="pb-[25px]">UI/UX Design</h2>
              <p>
                Our team of experienced product designers & developers help you
                build successful digital products
              </p>
            </div>
            <h6 className="bg-regal-blue h-[25px] leading-[25px] absolute bottom-0 w-full text-center text-white opacity-[0%] group-hover:opacity-[100%] transition-all duration-100 ease-in-out">
              EXPLORE
            </h6>
          </div>
          <div className="group relative cursor-pointer">
            <div className="p-[30px] h-full border-[1px] border-[#CCD6E5] md:group-hover:border-regal-blue  md:group-hover:-translate-y-[25px] transition-all duration-300 ease-in-out">
              <Image
                height={70}
                width={70}
                alt=""
                src="/home/data-science.svg"
                className="pb-[25px]"
              ></Image>
              <h2 className="pb-[25px]">Data science</h2>
              <p>
                We help organizations adopt data driven insights and automated
                reporting for faster decision making
              </p>
            </div>
            <h6 className="bg-regal-blue h-[25px] leading-[25px] absolute bottom-0 w-full text-center text-white opacity-[0%] group-hover:opacity-[100%] transition-all duration-100 ease-in-out">
              EXPLORE
            </h6>
          </div>
        </div>
      </section>
      <section className="py-[50px] px-[25px] md:px-[50px] bg-regal-blue">
        <h1 className="pb-[50px]">How do we work?</h1>
        <div className="text-black flex flex-col gap-[25px] md:grid md:grid-cols-2 md:grid-rows-1">
          <div className="p-[25px] lg:pr-[175px] bg-white">
            <Image
              height={100}
              width={100}
              alt=""
              src="/home/dedicated-teams-model.svg"
              className="pb-[25px]"
            ></Image>
            <h2 className="pb-[25px]">Dedicated teams model</h2>
            <p>
              Whether you’re a fast-growing startup or multinational enterprise,
              our dedicated engineering teams are hand-picked to help you start
              and scale product development quickly.
            </p>
          </div>
          <div className="p-[25px] md:p-[50px] lg:pr-[175px] bg-white">
            <Image
              height={100}
              width={100}
              alt=""
              src="/home/project-based-engagement.svg"
              className="pb-[25px]"
            ></Image>
            <h2 className="pb-[25px]">Project-based engagement</h2>
            <p>
              Our team takes care of everything, leaving you to focus on your
              company’s growth. Not only can we develop your project from
              scratch, but we excel at business analysis, technical
              documentation, prototyping, design, software development, and
              quality assurance — all while optimizing the cost, timeframe, and
              scope of the work
            </p>
          </div>
        </div>
      </section>
      <section className="py-[50px] px-[25px] md:px-[50px] bg-grey-2">
        <h1 className="pb-[25px] text-[#161616]">Meet our people</h1>
        <p className="pb-[25px] text-black">
          We build extremely close relationships within our team, in order to
          create a true sense of caring, family and teamwork between many
          different groups and nationalities.
        </p>
        <p className="text-black pb-[50px]">
          When we recruit talent, we’re looking for curious, intelligent,
          problem-solvers. By adding thoughtful, original ideas, our engineers
          and designers take pride in their creations and naturally produce
          their best work.
        </p>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className="relative"
          breakpoints={{
            690: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          <SliderButtons
            next="right-[25px] top-[255px]"
            prev="left-[25px] top-[255px]"
            hoverColor="group-hover:bg-regal-blue"
            borderHoverColor="hover:border-white"
            bgHoverColor="hover:bg-white"
          ></SliderButtons>
          <SwiperSlide>
            <div className="h-[560px] bg-[url('/home/vlad.png')] bg-no-repeat relative bg-cover">
              <div className="absolute left-[25px] bottom-[25px]">
                <h2>Vladislav Matvei</h2>
                <small>CTO</small>
              </div>
              <a className="absolute right-[25px] bottom-[25px] cursor-pointer">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src="/home/linkedin-link.svg"
                ></Image>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[560px] bg-[url('/home/dima.png')] bg-no-repeat relative bg-cover">
              <div className="absolute left-[25px] bottom-[25px]">
                <h2>Dumitru Lipceanu</h2>
                <small>CEO</small>
              </div>
            </div>
            <a className="absolute right-[25px] bottom-[25px] cursor-pointer">
              <Image
                height={50}
                width={50}
                alt=""
                src="/home/linkedin-link.svg"
              ></Image>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[560px] bg-[url('/home/vlad.png')] bg-no-repeat relative bg-cover">
              <div className="absolute left-[25px] bottom-[25px]">
                <h2>Vladislav Matvei</h2>
                <small>CTO</small>
              </div>
              <a className="absolute right-[25px] bottom-[25px] cursor-pointer">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src="/home/linkedin-link.svg"
                ></Image>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[50px] px-[25px] text-[#161616] md:px-[50px]">
        <h1 className="pb-[50px]">Benefits of working with us</h1>
        <div className="flex flex-col gap-[25px] min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <div>
            <div className="h-[100px] w-[100px] rounded-full bg-[#ccd6e581] bg-[url('/home/collab.svg')] bg-no-repeat bg-center mb-[15px]"></div>
            <h2 className="pb-[15px]">Direct collaboration</h2>
            <p>
              Build your own development team in partnership with us, with
              access to our pool of solution architects, senior software
              developers and other exceptional personnel that will report
              directly to you and work alongside your base team.
            </p>
          </div>
          <div>
            <div className="h-[100px] w-[100px] rounded-full bg-[#ccd6e581] bg-[url('/home/reporting.svg')] bg-no-repeat bg-center mb-[15px]"></div>
            <h2 className="pb-[15px]">Transparent reporting</h2>
            <p>
              Keep your expectations managed with regular, clear progress
              reports, screenshots, and videos related to your project’s
              milestones from our team straight to yours.
            </p>
          </div>
          <div>
            <div className="h-[100px] w-[100px] rounded-full bg-[#ccd6e581] bg-[url('/home/best.svg')] bg-no-repeat bg-center mb-[15px]"></div>
            <h2 className="pb-[15px]">Only the best</h2>
            <p>
              We are a tech-oriented company with a rigorous selection process.
              Our partners and clients have access to the top 2% of talent that
              passes our in-depth application process.
            </p>
          </div>
          <div>
            <div className="h-[100px] w-[100px] rounded-full bg-[#ccd6e581] bg-[url('/home/solutions.svg')] bg-no-repeat bg-center mb-[15px]"></div>
            <h2 className="pb-[15px]">Customer-tailored solutions</h2>
            <p>
              Our team is well trained in working remotely, especially as an
              original team’s extension. Our priority when designing and
              implementing the business processes is transparency.
            </p>
          </div>
        </div>
      </section>
      <IconSlider></IconSlider>
      <section className="py-[50px] md:pb-0 px-[25px] md:px-[25px] lg:px-[50] md:mx-[50px] bg-regal-blue md:grid md:grid-cols-6 md:gap-[50px] md:pt-[100px]">
        <TechStack></TechStack>
      </section>
      <section className="bg-grey-3 px-[25px] md:px-[50px] text-[#161616] pb-[50px]">
        <div className="bg-regal-blue w-full h-[50px] max-md:hidden"></div>
        <FAQ></FAQ>
      </section>
    </main>
  );
}
