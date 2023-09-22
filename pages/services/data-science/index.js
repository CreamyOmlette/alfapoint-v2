import Image from "next/image";
import { PopupModal } from "react-calendly";
import { useEffect, useState } from "react";
export default function DataScience() {
  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
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
                  Data science & Big data
                </h4>
              </div>
              <h1 className="pb-[25px] leading-[50px]">
                Unleash the full potential of the data & analytics
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
              Data science & Big data consulting services
            </h2>
            <p className="pb-[50px]">
              As a competitive advantage, data is key to differentiating your
              company from the rest of the pack. Our big data consulting and
              engineering services can help your company improve
              decision-making, accelerate innovation, enhance the customer
              experience, and drive operational efficiency.
            </p>
            <h2 className="pb-[25px]">What is our approach?</h2>
            <ul className="flex flex-col gap-[15px] leading-[39px] pb-[50px]">
              <li className="pl-[50px] bg-[url('/services/data-science/🧨.svg')] bg-no-repeat bg-left bg-center">
                We develop a comprehensive strategy that encompasses the entire
                data analytics process, including data collection,
                pre-processing, modeling, evaluation, and deployment.
              </li>
              <li className="pl-[50px] bg-[url('/services/data-science/🏆.svg')] bg-no-repeat bg-left bg-center">
                Best tools and techniques are selected to carry out the data
                analysis, as well as the organizational and business
                requirements that need to be met.
              </li>
              <li className="pl-[50px] bg-[url('/services/data-science/💗.svg')] bg-no-repeat bg-left bg-center">
                Projects are approached with an iterative process, where results
                are constantly evaluated and refined.
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
                <source src="/services/0.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 h-full w-full z-10 video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
