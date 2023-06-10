import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const scrollval = window.pageYOffset > 1 ? true : false;
    setScroll(scrollval);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (burgerMenuActive) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "visible";
  }, [burgerMenuActive]);

  return (
    <nav>
      <div
        className={
          (scroll
            ? "bg-white h-[75px] pt-[22px] pb-[9px] fixed "
            : "py-[50px] absolute ") +
          "flex justify-between max-md:px-[25px] px-[50px] left-0 top-0 w-[100vw] z-50 items-center transition-all duration-150 ease-out"
        }
      >
        <Link href="/home">
          <div
            className={
              (scroll ? "bg-regal-blue " : "bg-white ") +
              "w-[129.17px] h-[30px] logo-mask transition-all duration-150 ease-out"
            }
          ></div>
        </Link>

        <ul
          className={
            (scroll ? "text-[#4B4B4B] " : "") +
            "flex justify-around space-x-[40px] items-center max-md:hidden transition-all duration-150 ease-out"
          }
        >
          <li className="group relative">
            <Link href="/home">home</Link>
            <div
              className={
                (scroll
                  ? "bg-[#4B4B4B] bottom-[-10px] "
                  : "bg-white bottom-[-15px] ") +
                "transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)]"
              }
            ></div>
          </li>
          <li className="group relative">
            <Link href="/home">about us</Link>
            <div
              className={
                (scroll
                  ? "bg-[#4B4B4B] bottom-[-10px] "
                  : "bg-white bottom-[-15px] ") +
                "transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)]"
              }
            ></div>
          </li>
          <li className="group relative">
            <Link href="/careers">careers</Link>
            <div
              className={
                (scroll
                  ? "bg-[#4B4B4B] bottom-[-10px] "
                  : "bg-white bottom-[-15px] ") +
                "transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute left-[calc(50%-12.5px)]"
              }
            ></div>
          </li>
          <li className="group relative cursor-pointer">
            <h4>services</h4>
            <ul
              className={
                (scroll ? "top-[44px]" : "top-[37.4px]") +
                " absolute left-[calc(50%-87.5px)] w-[175px] opacity-[0%] group-hover:opacity-[100%] transition-opacity duration-100 ease-in-out"
              }
            >
              <li className="text-[#171717] py-[13px] px-[15px] border-b-[1px] border-b-regal-blue bg-white hover:bg-regal-blue hover:text-white transition-colors duration-150 ease-in-out">
                <Link href="/services/custom-software-development">
                  <h5>Custom software development</h5>
                </Link>
              </li>
              <li className="text-[#171717] py-[13px] px-[15px] border-b-[1px] border-b-regal-blue bg-white hover:bg-regal-blue hover:text-white transition-colors duration-150 ease-in-out">
                <Link href="/services/dedicated-teams">
                  <h5>Dedicated teams</h5>
                </Link>
              </li>
              <li className="text-[#171717] py-[13px] px-[15px] border-b-[1px] border-b-regal-blue bg-white hover:bg-regal-blue hover:text-white transition-colors duration-150 ease-in-out">
                <Link href="/services/ui-ux-design">
                  <h5>UI/UX Design</h5>
                </Link>
              </li>
              <li className="text-[#171717] py-[13px] px-[15px] border-b-[1px] border-b-regal-blue bg-white hover:bg-regal-blue hover:text-white transition-colors duration-150 ease-in-out">
                <Link href="/data-science">
                  <h5>Data science</h5>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              className={
                (scroll ? "bg-regal-blue text-white" : "bg-white") +
                " text-regal-blue leading-[40px] pl-[24px] pr-[24px] rounded inline-flex items-center"
              }
            >
              <h5 className="inline-block">Let’s work together</h5>
              <div
                className={
                  (scroll ? "bg-white" : "bg-regal-blue") +
                  " btn-arrow h-[11.58px] w-[15px] ml-[6px] bg-black inline-block"
                }
              ></div>
            </button>
          </li>
        </ul>
        <div
          className={
            (scroll ? "bg-regal-blue" : "bg-white") +
            " burger-menu h-[22px] w-[25px] md:hidden"
          }
          onClick={() => setBurgerMenuActive(!burgerMenuActive)}
        ></div>
      </div>

      <div
        className={
          (scroll ? "p-[25px] " : "p-[25px] pt-[50px] ") +
          (burgerMenuActive ? "translate-x-[0vw] " : "translate-x-[100vw] ") +
          "md:hidden fixed transition-all duration-300 ease-in-out w-[100vw] h-[100vh] bg-regal-blue z-[60] flex flex-col"
        }
      >
        <div className="flex justify-between">
          <Image width={129.17} height={30} alt="" src="/logo.svg" />
          <Image
            height={22}
            width={25}
            alt=""
            src="/burger-menu.svg"
            className="md:hidden h-[22px]"
            onClick={() => setBurgerMenuActive(!burgerMenuActive)}
          ></Image>
        </div>
        <ul className="flex flex-col justify-center flex-1">
          <li className="py-[25px] border-t-[1px] border-white">
            <Link
              href="/home"
              onClick={() => setBurgerMenuActive(!burgerMenuActive)}
            >
              <h2>Home</h2>
            </Link>
          </li>
          <li className="py-[25px] border-t-[1px] border-white">
            <Link
              href="/home"
              onClick={() => setBurgerMenuActive(!burgerMenuActive)}
            >
              <h2>About us</h2>
            </Link>
          </li>
          <li className="py-[25px] border-t-[1px] border-white">
            <Link
              href="/home"
              onClick={() => setBurgerMenuActive(!burgerMenuActive)}
            >
              <h2>Careers</h2>
            </Link>
          </li>
          <li
            className="py-[25px] border-t-[1px] border-b-[1px] border-white"
            onClick={() => setActive(!active)}
          >
            <div>
              <div className="flex justify-between">
                <h2>Services</h2>
                <Image
                  height={11.58}
                  width={14.76}
                  alt=""
                  src="/burger-menu-arrow.svg"
                  className={
                    (active ? "rotate-180" : "") +
                    " transition-all duration-150 ease-in-out"
                  }
                ></Image>
              </div>
              <ul
                className={
                  (active
                    ? "pt-[25px] max-h-[500px] "
                    : "pt-[0px] max-h-[0px] ") +
                  "leading-[18px] flex flex-col gap-[18px] overflow-hidden transition-all duration-300 ease-in-out"
                }
              >
                <li>
                  <Link
                    href="/services/custom-software-development"
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                  >
                    <h3>Custom software development</h3>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/dedicated-teams"
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                  >
                    <h3>Dedicated teams</h3>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                  >
                    <h3>UI/UX Design</h3>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/data-science"
                    onClick={() => setBurgerMenuActive(!burgerMenuActive)}
                  >
                    <h3>Data science</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <button className="text-regal-blue leading-[40px] bg-white pl-[24px] pr-[24px] rounded">
          <h5 className="inline-block">Let’s work together</h5>
          <Image
            height={12}
            width={15}
            alt=""
            src="/nav-arrow.svg"
            className="inline-block ml-[6px] h-[11.58px]"
          ></Image>
        </button>
      </div>
    </nav>
  );
}
