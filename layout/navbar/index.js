import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-100 py-[50px] max-md:px-[25px] px-[50px] absolute left-0 top-0 w-[100%] z-50">
      <Image width={129.17} height={30} alt="" src="/logo.svg" />
      <ul className="flex justify-around space-x-[40px] items-center max-md:hidden">
        <li className="group relative">
          <Link href="/home">home</Link>
          <div className="transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)] bg-white"></div>
        </li>
        <li className="group relative">
          <Link href="/about">about us</Link>
          <div className="transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)] bg-white"></div>
        </li>
        <li className="group relative">
          <Link href="/careers">careers</Link>
          <div className="transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)] bg-white"></div>
        </li>
        <li className="group relative">
          <Link href="/services">services</Link>
          <div className="transition-all ease-in-out duration-200 group-hover:min-w-[25px] min-w-[0px] h-[2px] absolute bottom-[-15px] left-[calc(50%-12.5px)] bg-white"></div>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
}
