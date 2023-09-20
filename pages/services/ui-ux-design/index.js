import Image from "next/image";
import { FAQ } from "@/components/faq";
import { PopupModal } from "react-calendly";
import { useEffect, useState } from "react";
export default function UiUxDesign() {
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
                  UI/UX Design
                </h4>
              </div>
              <h1 className="pb-[25px] leading-[50px]">
                Create designs and interfaces that users love
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
              Custom design, that will produce instant results
            </h2>
            <p className="pb-[50px]">
              We craft solutions that engage target audiences and reflect your
              brand. Every detail — from user flow to layout, color scheme to
              fonts — match their needs and your vision.
            </p>
            <h2 className="pb-[25px]">What is our approach?</h2>
            <ul className="flex flex-col gap-[15px] leading-[39px] pb-[50px]">
              <li className="pl-[50px] bg-[url('/services/🤿.svg')] bg-no-repeat bg-left bg-center">
                We do a deep dive to understand what key features will resonate.
              </li>
              <li className="pl-[50px] bg-[url('/services/🏆.svg')] bg-no-repeat bg-left bg-center">
                We compile an overview of competitors’ and industry leaders’
                products to zero in on what works, what doesn’t.
              </li>
              <li className="pl-[50px] bg-[url('/services/🧪.svg')] bg-no-repeat bg-left bg-center">
                We test our design strategy to predict and mitigate operational
                risks before they can materialize.
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
              <video autoPlay muted loop className="h-[100vh] object-cover">
                <source src="/services/videos/2.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 h-full w-full z-10 video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-[50px] px-[25px] lg:px-[50] text-black bg-grey-3">
        <h1 className="pb-[100px]">What is the process?</h1>
        <div className="flex flex-col items-center gap-[25px] md:flex-row md:gap-[12.5px] justify-between">
          <div>
            <Image
              width={228}
              height={129}
              alt=""
              src="/services/ui-ux-design/Step-1.svg"
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
              width={228}
              height={129}
              alt=""
              src="/services/ui-ux-design/Step-2.svg"
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
              width={228}
              height={129}
              alt=""
              src="/services/ui-ux-design/Step-3.svg"
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
              width={228}
              height={129}
              alt=""
              src="/services/ui-ux-design/Step-4.svg"
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
              width={228}
              height={129}
              alt=""
              src="/services/ui-ux-design/Step-5.svg"
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
