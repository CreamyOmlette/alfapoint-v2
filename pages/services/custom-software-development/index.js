import { TechStack } from "@/components/tech-stack";
import Image from "next/image";
import { FAQ } from "@/components/faq";
import "swiper/css";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useEffect } from "react";

export default function CustomSoftwareDevelopment() {
  const [activeService, setActiveService] = useState(2);
  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const services = [
    {
      header: "Web development",
      tags: ["UI/UX", "CMS", "Backend", "Frontend", "Javascript"],
      paragraphs: [
        "Harness the power of the internet with our cutting-edge web development services. We craft user-friendly and visually appealing websites that not only captivate your audience but also align with your business objectives.",
        "From responsive design to e-commerce platforms, we create digital landscapes that leave a lasting impression.",
      ],
    },
    {
      header: "Mobile development",
      tags: ["iOS", "Android", "Cross-platform", "Testing", "Analytics"],
      paragraphs: [
        "In the age of mobile connectivity, mobile development services ensure that you're not just a click away, but a tap away from your audience.",
        "Our experts specialize in crafting engaging and functional mobile applications for various platforms. Whether it's iOS, Android, or cross-platform solutions, we bring your app ideas to life.",
      ],
    },
    {
      header: "Quality assurance",
      tags: ["Manual", "Automated"],
      paragraphs: [
        "Our quality assurance specialists bring peace of mind when it comes to launching bug free product to your users.",
        "With the consistent, quick releases of new versions, the importance of streamlined quality assurance processes is the key to not letting bugs interrupt your product from bringing value to users.",
      ],
    },
    {
      header: "DevOps",
      tags: [
        "CI/CD",
        "Automation",
        "Containerization",
        "Orchestration",
        "Cloud",
        "Bare metal",
      ],
      paragraphs: [
        "Streamline your development process with our DevOps services. We integrate development and operations, ensuring faster releases, reduced errors, and efficient collaboration.",
        "Our team thrives on challenges and is dedicated to bringing your vision to life. Let's work together to transform your ideas into impactful digital solutions. Reach out to us to get started on your project. Your success is our priority.",
      ],
    },
  ];
  const faq = {
    "project-based": [
      [
        "How does the project engagement process work?",
        "The project engagement process involves initial discussions to understand your requirements, followed by project scoping, development, and delivery phases.",
      ],
      [
        "What is the typical duration of a software development project?",
        "The duration of a software development project varies based on its complexity and scope. While smaller projects may take a few months to complete, larger and more complex projects can span several years. At our company, we prioritize long-term or mid-term engagements, allowing us to collaborate closely with our clients, establish clear project timelines, and deliver high-quality software solutions within agreed timeframes.",
      ],
      [
        "How do you ensure project requirements are understood and met?",
        "We carefully discuss and document your project requirements, taking into account multiple rounds of discussions to understand specific information and priorities. This allows us to deliver a tailored solution that precisely aligns with your needs.",
      ],
      [
        "What is the project development methodology followed by your company?",
        "Our company follows agile development methodologies, enabling iterative and collaborative development, regular feedback, and efficient project management.",
      ],
      [
        "Can I provide feedback and be involved throughout the project?",
        "We encourage your active involvement throughout the project, providing regular updates, seeking feedback, and incorporating your suggestions to ensure project success.",
      ],
      [
        "How do you handle changes or updates during the project?",
        "We handle changes or updates through a change management process, assessing their impact, discussing options, and implementing approved modifications to keep the project on track.",
      ],
      [
        "What is the estimated timeline for delivering the final product?",
        "The estimated timeline for delivering the final product depends on project complexity, size, and specific requirements, and we provide a projected timeline during the scoping phase.",
      ],
      [
        "How do you ensure the confidentiality and security of our project?",
        "We prioritize the confidentiality and security of your project, implementing strict measures to protect sensitive information and using secure infrastructure throughout the development process.",
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
                  Custom software development
                </h4>
              </div>
              <h1 className="pb-[25px] leading-[50px]">
                Software development with a team that understands your business
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
              <video autoPlay muted playsInline loop className="h-[100vh] object-cover">
                <source src="/services/videos/1.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 h-full w-full z-10 video-overlay"></div>
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
            <h2 className="pb-[15px]">{services[activeService].header}</h2>
            <div className="text-[#3D8CFF] leading-[23px] flex gap-[15px] pb-[25px]">
              {services[activeService].tags.map((t, i) => (
                <h6
                  key={"tag-" + i}
                  className="px-[15px] border-[#3D8CFF] rounded-[50px] border-[1px]"
                >
                  {t}
                </h6>
              ))}
            </div>
            {services[activeService].paragraphs.map((p, i) => (
              <p key={"paragraph-" + i} className={i == 0 ? "pb-[23px]" : ""}>
                {p}
              </p>
            ))}
          </div>
          <ul className="flex flex-col gap-[2px] md:col-span-2 md:order-1">
            <li
              onClick={() => setActiveService(0)}
              className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100"
            >
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
            <li
              onClick={() => setActiveService(1)}
              className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100"
            >
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
            <li
              onClick={() => setActiveService(2)}
              className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100"
            >
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
            <li
              onClick={() => setActiveService(3)}
              className="group py-[25px] pl-[25px] pr-[20px] bg-grey-1 hover:bg-regal-blue hover:text-white flex justify-between leading-[35px] relative transition-all ease-in-out duration-100"
            >
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
      <section className="bg-grey-3 px-[25px] md:px-[50px] text-[#161616] pb-[50px] border-t-[2px] border-white md:pt-[100px]">
        <FAQ hidePagination={true} faq={faq}></FAQ>
      </section>
    </main>
  );
}
