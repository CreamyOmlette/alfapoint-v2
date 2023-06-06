import { TechStack } from "@/components/tech-stack";
import Image from "next/image";
import { FAQ } from "@/components/faq";
import "swiper/css";
import styles from "./style.module.css";

export default function CustomSoftwareDevelopment() {
  return (
    <main>
      <div className="md:flex">
        <div>
          <div className="px-[25px] md:px-[50px] bg-regal-blue h-[100vh] relative">
            <div className="absolute bottom-[100px] left-[25px] pr-[25px]">
              <div className="pb-[15px] flex gap-[13px] flex-wrap">
                <h4 className="pl-[17.14px] bg-[url('/services/arrow.svg')] bg-no-repeat bg-left bg-center">
                  Services
                </h4>
                <h4 className="pl-[17.14px] bg-[url('/services/arrow.svg')] bg-no-repeat bg-left bg-center">
                  Custom software development
                </h4>
              </div>
              <h1 className="pb-[25px] leading-[50px]">
                Software development with a team that understands your business
              </h1>
              <button className="bg-white rounded pl-[25px] pr-[45px] leading-[40px] text-black">
                BOOK A CALL
              </button>
            </div>
          </div>
          <section className="px-[25px] py-[50px] md:px-[50px] text-black">
            <h2 className="pb-[25px]">Our approach</h2>
            <p className="pb-[50px]">
              At Alfapoint we’re focused on your business objectives. We care
              about what we do and about the people we work for. Each specific
              business case is unique for us. What is more important - we dive
              deep into each one of them to be able to solve our Client’s
              problems and achieve their goals.
            </p>
            <h2 className="pb-[25px]">This means:</h2>
            <ul className="flex flex-col gap-[15px] leading-[39px] pb-[50px]">
              <li className="pl-[50px] bg-[url('/services/👋.svg')] bg-no-repeat bg-left bg-center">
                We ask essential questions
              </li>
              <li className="pl-[50px] bg-[url('/services/📌.svg')] bg-no-repeat bg-left bg-center">
                We provide you not only with web development but also with
                technical and business advice
              </li>
              <li className="pl-[50px] bg-[url('/services/💼.svg')] bg-no-repeat bg-left bg-center">
                We’re commited to understand the project that we are working on
              </li>
              <li className="pl-[50px] bg-[url('/services/🔍.svg')] bg-no-repeat bg-left bg-center">
                We will provide you with surprising and sometimes controversial
                insights
              </li>
            </ul>
            <div className="relative">
              <div className="h-full w-[163px] rounded-[4px] bg-regal-blue left-[5px] absolute z-[-1]"></div>
              <button className="leading-[40px] rounded-[4px] pl-[25px] pr-[45px] bg-lime-green">
                GET IN TOUCH
              </button>
            </div>
          </section>
        </div>
        <div className="w-[100vw] max-md:hidden relative">
          <div className="h-[130px] bg-regal-blue"></div>
          <div className="sticky top-0 overflow-hidden">
            <div className="relative">
              <video
                autoPlay
                muted
                loop
                className="h-[100vh] w-[50vw] object-cover"
              >
                <source src="/services/0.mp4" type="video/mp4" />
              </video>
              <div
                className={`absolute top-0 h-full w-full z-10 ${styles["video-overlay"]}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-lime-green px-[25px] py-[50px] md:px-[50px] text-black text-center">
        <h2>
          We will make sure that your next unicorn is scalable and is simply
          brilliant to use
        </h2>
      </section>
      <section className="px-[25px] py-[50px] md:px-[50px] text-black">
        <h1 className="pb-[50px]">What can we do</h1>
        <div className="flex flex-col md:grid md:grid-cols-5 gap-[50px]">
          <div className="md:col-span-3 md:order-2">
            <h2 className="pb-[15px]">Quality assurance</h2>
            <div className="text-[#3D8CFF] leading-[23px] flex gap-[15px] pb-[25px]">
              <h6 className="px-[15px] border-[#3D8CFF] rounded-[50px] border-[1px]">
                Manual
              </h6>
              <h6 className="px-[15px] border-[#3D8CFF] rounded-[50px] border-[1px]">
                Automated
              </h6>
            </div>
            <p className="pb-[23px]">
              Our quality assurance specialists bring peace of mind when it
              comes to launching bug free product to your users.
            </p>
            <p>
              With the consistent, quick releases of new versions, the
              importance of streamlined quality assurance processes is the key
              to not letting bugs interrupt your product from bringing value to
              users.
            </p>
          </div>
          <ul className="flex flex-col gap-[2px] md:col-span-2 md:order-1">
            <li className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100">
              <Image
                height={12}
                width={15}
                alt=""
                src="/services/right-service-arrow.svg"
                className="absolute left-[25px] top-[36.5px] opacity-[0%] group-hover:opacity-[100%] transition-all ease-in-out duration-300"
              ></Image>
              <h4 className="group-hover:-translate-x-[-25px] transition-transform ease-in-out duration-100">
                Web development
              </h4>
              <div className="w-[35px] h-[35px] icon-web bg-black group-hover:bg-white ease-in-out duration-100"></div>
            </li>
            <li className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100">
              <Image
                height={12}
                width={15}
                alt=""
                src="/services/right-service-arrow.svg"
                className="absolute left-[25px] top-[36.5px] opacity-[0%] group-hover:opacity-[100%] transition-all ease-in-out duration-300"
              ></Image>
              <h4 className="group-hover:-translate-x-[-25px] transition-transform ease-in-out duration-100">
                Mobile development
              </h4>
              <div className="w-[35px] h-[35px] icon-mobile bg-black group-hover:bg-white ease-in-out duration-100"></div>
            </li>
            <li className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100">
              <Image
                height={12}
                width={15}
                alt=""
                src="/services/right-service-arrow.svg"
                className="absolute left-[25px] top-[36.5px] opacity-[0%] group-hover:opacity-[100%] transition-all ease-in-out duration-300"
              ></Image>
              <h4 className="group-hover:-translate-x-[-25px] transition-transform ease-in-out duration-100">
                Quality assurance and testing
              </h4>
              <div className="w-[35px] h-[35px] icon-qa bg-black group-hover:bg-white ease-in-out duration-100"></div>
            </li>
            <li className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100">
              <Image
                height={12}
                width={15}
                alt=""
                src="/services/right-service-arrow.svg"
                className="absolute left-[25px] top-[36.5px] opacity-[0%] group-hover:opacity-[100%] transition-all ease-in-out duration-300"
              ></Image>
              <h4 className="group-hover:-translate-x-[-25px] transition-transform ease-in-out duration-100">
                DevOps
              </h4>
              <div className="w-[35px] h-[35px] icon-devops bg-black group-hover:bg-white ease-in-out duration-100"></div>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[50px] px-[25px] lg:px-[50] bg-regal-blue md:grid md:grid-cols-6 md:gap-[50px] md:pt-[100px] md:px-[50px]">
        <TechStack></TechStack>
      </section>
      <section className="py-[50px] px-[25px] lg:px-[50px] text-black md:grid md:grid-cols-2 md:gap-[50px]">
        <div>
          <h1 className="pb-[25px]">Teams composition</h1>
          <p className="pb-[25px]">
            Teams working on your projects might have a different composition,
            depending on the project’s particular needs. What they have in
            common is that all of them are run by a senior project manager – you
            don’t have to coordinate work for our developers or designers
            (unless you want to).
          </p>
          <h4 className="p-[25px] bg-lime-green mb-[50px]">
            This standard team uses UI/UX designers, testers and other
            specialist from Alfapoint as a service - they are joining the team
            for particular tasks and supporting your project. This way, you only
            pay for people whose work you use at any stage of development.
          </h4>
        </div>
        <div>
          <h2 className="pb-[25px]">A standard team consists of:</h2>
          <ul className="flex flex-col gap-[15px]">
            <li className="flex flex-start items-center gap-[15px]">
              <Image
                height={80}
                width={80}
                alt=""
                src="/services/analyst.svg"
              ></Image>
              <p>Business Analyst</p>
            </li>
            <li className="flex flex-start items-center gap-[15px]">
              <Image
                height={80}
                width={80}
                alt=""
                src="/services/pm.svg"
              ></Image>
              <p>Project manager</p>
            </li>
            <li className="flex flex-start items-center gap-[15px]">
              <Image
                height={80}
                width={80}
                alt=""
                src="/services/qa-engineer.svg"
              ></Image>
              <p>QA Engineer</p>
            </li>
            <li className="flex flex-start items-center gap-[15px]">
              <Image
                height={80}
                width={80}
                alt=""
                src="/services/front-end.svg"
              ></Image>
              <p>One OR two Front-end developers</p>
            </li>
            <li className="flex flex-start items-center gap-[15px]">
              <Image
                height={80}
                width={80}
                alt=""
                src="/services/back-end.svg"
              ></Image>
              <p>One OR two Back-end developers</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[50px] px-[25px] lg:px-[50] text-black bg-grey-3">
        <h1 className="pb-[100px]">What is the process?</h1>
        <div className="flex flex-col items-center gap-[25px] md:flex-row md:gap-[12.5px] justify-between">
          <div>
            <Image
              width={182}
              height={106}
              alt=""
              src="/services/process/product-backlog.svg"
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
              width={182}
              height={157}
              alt=""
              src="/services/process/sprint-planning.svg"
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
              width={182}
              height={107}
              alt=""
              src="/services/process/sprint-backlog.svg"
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
              width={250}
              height={250}
              alt=""
              src="/services/process/process.svg"
              className="md:hidden"
            ></Image>
            <Image
              width={250}
              height={250}
              alt=""
              src="/services/process/process-md.svg"
              className="max-md:hidden"
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
          <div className="flex flex-col gap-[25px]">
            <Image
              width={182}
              height={113}
              alt=""
              src="/services/process/sprint-review.svg"
            ></Image>
            <Image
              width={182}
              height={113}
              alt=""
              src="/services/process/sprint-retrospective.svg"
            ></Image>
            <Image
              width={182}
              height={113}
              alt=""
              src="/services/process/finished-work.svg"
            ></Image>
          </div>
        </div>
      </section>
      <section className="bg-grey-3 px-[25px] md:px-[50px] text-[#161616] pb-[50px] border-t-[2px] border-white">
        <FAQ></FAQ>
      </section>
    </main>
  );
}