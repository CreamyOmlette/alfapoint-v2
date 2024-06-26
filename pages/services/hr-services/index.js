import Image from "next/image";
import SliderButtons from "@/components/slider-nav-button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconSlider } from "@/components/icon-slider";
import { FAQ } from "@/components/faq";
import { PopupModal } from "react-calendly";
import { useEffect, useState } from "react";
export default function DedicatedTeams() {
  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const faq = {
    "dedicated-teams": [
      [
        "How long does it take to get started?",
        "We will extend your software engineering team within days, not months. Our team is going to present you with a pool of engineers that are just the right fit for your project.",
      ],
      [
        "What type of technical expertise do you offer?",
        "We specialize in mobile, web, and embedded software development. Our expertise extends to DevOps and QA, ensuring seamless integration, efficient deployment, and thorough testing of our software solutions. With our diverse capabilities, we deliver high-quality, end-to-end software products across multiple platforms.",
      ],
      [
        "How can Alfapoint be sure that it's the developer my company needs?",
        "At Alfapoint, we ensure we find the right software engineer for your company by understanding your specific needs and carefully matching their skills and experience to your requirements.",
      ],
      [
        "Does Alfapoint take care of leading the project?",
        "In the dedicated team model, you retain project leadership. Our remote engineers seamlessly integrate into your internal team, while you have complete control over managing their daily activities and tasks, treating them as your own employees.",
      ],
      [
        "What language do the software engineers speak?",
        "Our software engineers are fluent in English, with a minimum B1 proficiency level. This enables smooth communication and collaboration within our international team as they seamlessly integrate into your project.",
      ],
    ],
  };
  return (
    <main>
      {loaded && (
        <PopupModal
          url="https://calendly.com/d-lipceanu/30min"
          rootElement={document.getElementById("__next")}
          onModalClose={() => setOpen(false)}
          open={isOpen}
        ></PopupModal>
      )}
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="px-[25px] md:px-[50px] bg-regal-blue h-[100vh] relative">
            <div className="absolute bottom-[100px] left-[25px] pr-[25px]">
              <div className="pb-[15px] flex gap-[13px] flex-wrap">
                <h4 className="pl-[17.14px] bg-[url('/services/arrow.svg')] bg-no-repeat bg-left bg-center">
                  Services
                </h4>
                <h4 className="pl-[17.14px] bg-[url('/services/arrow.svg')] bg-no-repeat bg-left bg-center">
                  HR Services
                </h4>
              </div>
              <h1 className="pb-[25px] leading-[50px]">
                Scale your business by securing top talent
              </h1>
              <button
                className="bg-white rounded pl-[25px] pr-[25px] leading-[40px] text-black"
                onClick={() => setOpen(true)}
              >
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
          </div>
          <section className="px-[25px] py-[50px] md:px-[50px] text-black">
            <h2 className="pb-[25px]">
            What are the benefits of dedicated teams model?
            </h2>
            <ul className="flex flex-col gap-[25px] leading-[24px] pb-[50px] [&>li]:min-h-[39px] [&>li]:flex [&>li]:items-center">
              <li className="pl-[50px] bg-[url('/services/💎.svg')] bg-no-repeat bg-left bg-center">
                Reducing time and financial expenses by up to 25% on recruitment
                and staff maintenance.
              </li>
              <li className="pl-[50px] bg-[url('/services/🔥.svg')] bg-no-repeat bg-left bg-center">
                Access to top-notch resources worldwide.
              </li>
              <li className="pl-[50px] bg-[url('/services/✨.svg')] bg-no-repeat bg-left bg-center">
                Immediate access to experts, saving months of in-house search.
              </li>
              <li className="pl-[50px] bg-[url('/services/🚀.svg')] bg-no-repeat bg-left bg-center">
                Quickly expand teams at any project phase.
              </li>
            </ul>
            <div className="relative">
              <div className="h-full w-[163px] rounded-[4px] bg-regal-blue left-[5px] absolute z-[-1]"></div>
              <button
                className="leading-[40px] rounded-[4px] pl-[25px] pr-[25px] bg-lime-green"
                onClick={() => setOpen(true)}
              >
                <h5 className="inline-block">GET IN TOUCH</h5>
                <Image
                  height={12}
                  width={15}
                  alt=""
                  src="/button-arrow.svg"
                  className="inline-block ml-[6px]"
                ></Image>
              </button>
            </div>
          </section>
        </div>
        <div className="max-md:hidden relative col-span-2">
          <div className="h-[130px] bg-regal-blue"></div>
          <div className="sticky top-0 overflow-hidden">
            <div className="relative">
              <video autoPlay muted loop playsInline className="h-[100vh] object-cover">
                <source src="/services/videos/0.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 h-full w-full z-10 video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-lime-green px-[25px] py-[50px] md:px-[50px] text-black text-center">
        <h2>
          Let us provide you the best team to deliver quality results just on
          time
        </h2>
      </section>
      <section className="px-[25px] py-[50px] md:px-[50px]">
        <h1 className="pb-[25px] text-[#161616]">
          How fast do we assemble teams?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[50px] gap-[25px]">
          <div className="p-[25px] lg:p-[50px] bg-regal-blue sm:flex sm:items-center">
            <div>
              <h2 className="pb-[25px]">Mid-Senior developers</h2>
              <Image
                height={184}
                width={295}
                alt=""
                src="/services/calendar-1.svg"
                className="max-md:mb-[25px]"
              ></Image>
            </div>
            <div className="flex-1 pl-[25px]">
              <h4 className="text-center pb-[10px]">up to</h4>
              <div className="flex justify-center items-center gap-[8px]">
                <h1 className="text-[64px] leading-[50px]">10</h1>
                <h4>
                  working
                  <br />
                  days
                </h4>
              </div>
            </div>
          </div>
          <div className="p-[25px] lg:p-[50px] bg-regal-blue sm:flex sm:items-center">
            <div>
              <h2 className="leading-[32px] mb-[25px] pr-[39px] bg-[url('/services/diamond.svg')] bg-no-repeat bg-right bg-center inline-block">
                Rare specialists
              </h2>
              <Image
                height={184}
                width={295}
                alt=""
                src="/services/calendar-2.svg"
                className="max-md:mb-[25px]"
              ></Image>
            </div>
            <div className="flex-1 pl-[25px]">
              <h4 className="text-center pb-[10px]">up to</h4>
              <div className="flex justify-center items-center gap-[8px]">
                <h1 className="text-[64px] leading-[50px]">20</h1>
                <h4>
                  working
                  <br />
                  days
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[25px] pb-[50px] md:px-[50px]">
        <h1 className="pb-[25px] text-[#161616]">
          Assemble a team that delivers
        </h1>
        <Swiper
          className="relative text-black"
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            690: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <SliderButtons
            next="right-[0px] top-[0px]"
            prev="right-[60px] top-[0px]"
            hoverColor="group-hover:bg-black"
            borderHoverColor="hover:border-black"
            bgHoverColor="hover:bg-white"
          ></SliderButtons>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/software-engineers.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">Software engineers</h2>
                <p className="pb-[15px]">
                  Web (front-end and back-end development)
                </p>
                <p>Mobile (iOS, Android, cross-platform)</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/qa-engineers.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">QA Engineers</h2>
                <p className="pb-[15px]">Manual QA</p>
                <p className="pb-[15px]">Automated testing</p>
                <p className="pb-[15px]">Mobile and web testing</p>
                <p className="pb-[15px]">Cross-platform testing</p>
                <p>Security and compliance Quality assurance</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/management-team.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">Management team</h2>
                <p className="pb-[15px]">Tech leads</p>
                <p className="pb-[15px]">Solution architects</p>
                <p className="pb-[15px]">Product owners</p>
                <p>Project managers</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/ui-ux-designers.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">UI/UX Designers</h2>
                <p className="pb-[15px]">Graphic design</p>
                <p>Web, mobile and desktop design and prototyping</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/infrastructure.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">Infrastructure</h2>
                <p className="pb-[15px]">Data Center Engineers</p>
                <p className="pb-[15px]">DevOps Engineers</p>
                <p className="pb-[15px]">Database Engineers</p>
                <p className="pb-[15px]">Cloud Engineers</p>
                <p>Systems Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-[75px] h-full">
              <div className="p-[25px] border-[1px] border-[#CCD6E5] h-full">
                <Image
                  src="/services/data-science-1.svg"
                  height={50}
                  width={50}
                  alt=""
                  className="pb-[15px]"
                ></Image>
                <h2 className="mb-[25px]">Data science</h2>
                <p className="pb-[15px]">Machine Learning Engineers</p>
                <p className="pb-[15px]">Data Engineers</p>
                <p className="pb-[15px]">AI Engineers</p>
                <p>NLP Engineers</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <IconSlider></IconSlider>
      <section className="py-[50px] px-[25px] lg:px-[50px] text-black bg-grey-3">
        <h1 className="pb-[100px]">What is the process?</h1>
        <div className="flex flex-col items-center gap-[25px] md:flex-row md:gap-[12.5px] justify-between">
          <div>
            <Image
              width={297}
              height={129}
              alt=""
              src="/services/dedicated-teams/Step-1.svg"
              className="md:h-[53]"
            ></Image>
          </div>
          <div>
            <Image
              width={15}
              height={12}
              alt=""
              src="/services/process/arrow.svg"
              className="md:rotate-[-90deg]"
            ></Image>
          </div>
          <div>
            <Image
              width={298}
              height={127}
              alt=""
              src="/services/dedicated-teams/Step-2.svg"
            ></Image>
          </div>
          <div>
            <Image
              width={15}
              height={12}
              alt=""
              src="/services/process/arrow.svg"
              className="md:rotate-[-90deg]"
            ></Image>
          </div>
          <div>
            <Image
              width={297}
              height={129}
              alt=""
              src="/services/dedicated-teams/Step-3.svg"
            ></Image>
          </div>
          <div>
            <Image
              width={15}
              height={12}
              alt=""
              src="/services/process/arrow.svg"
              className="md:rotate-[-90deg]"
            ></Image>
          </div>
          <div>
            <Image
              width={297}
              height={129}
              alt=""
              src="/services/dedicated-teams/Step-4.svg"
            ></Image>
          </div>
        </div>
      </section>
      <section className="bg-grey-3 px-[25px] md:px-[50px] text-[#161616] py-[50px] border-t-[2px] border-white">
        <FAQ hidePagination={true} faq={faq}></FAQ>
      </section>
    </main>
  );
}
