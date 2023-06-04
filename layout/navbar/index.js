import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-100 py-[50px] max-md:px-[25px] px-[50px] absolute left-0 top-0 w-[100%] z-50">
      <Image width={129.17} height={30} alt="" src="logo.svg" />
      <ul className="flex justify-around space-x-[40px] items-center max-md:hidden">
        <li>
          <Link href="/home">home</Link>
        </li>
        <li>
          <Link href="/about">about us</Link>
        </li>
        <li>
          <Link href="/careers">careers</Link>
        </li>
        <li>
          <Link href="/services">services</Link>
        </li>
        <li>
          <button className="text-regal-blue leading-[40px] bg-white pl-[24px] pr-[45px] rounded">
            Let’s work together
          </button>
        </li>
      </ul>
    </nav>
  );
}
