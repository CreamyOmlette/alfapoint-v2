import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between pt-[60px] pb-[90px] gap-y-[50px] gap-x-[25px] max-sm:flex-col-reverse max-md:px-[25px] px-[50px] bg-[#1b1b1b]">
      <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
        <Image alt="" width={80} height={56.88} src="/footer-logo.svg"></Image>
        <small className="text-[#8E8E8E]">
          © 2023, Alfapoint. <br></br>
          All rights Reserved
        </small>
      </div>
      <div>
        <h4 className="pb-[20px]">Services</h4>
        <ul className="text-[#8E8E8E] leading-[24px] cursor-pointer">
          <li className="hover:text-white transition-colors ease-out duration-200">
            <Link href="/services/custom-software-development">
              <small>Custom software development</small>
            </Link>
          </li>
          <li className="hover:text-white transition-colors ease-out duration-200">
            <Link href="/services/dedicated-teams">
              <small>Dedicated teams</small>
            </Link>
          </li>
          <li className="hover:text-white transition-colors ease-out duration-200">
            <Link href="/services/ui-ux-design">
              <small>UI/UX Design</small>
            </Link>
          </li>
          <li className="hover:text-white transition-colors ease-out duration-200">
            <Link href="/services/data-science">
              <small>Data science</small>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="pb-[20px]">Locations</h4>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
          <li>
            <div className="pl-[55px] bg-footer-arrow bg-no-repeat bg-left bg-center">
              <p className="text-[#8E8E8E]">Republic of Moldova</p>
              <p>Chisinau</p>
            </div>
          </li>
          <li>
            <div className="pl-[55px] bg-footer-arrow bg-no-repeat bg-left bg-center">
              <p className="text-[#8E8E8E]">Romania</p>
              <p>Bucharest</p>
            </div>
          </li>
          <li>
            <div className="pl-[55px] bg-footer-arrow bg-no-repeat bg-left bg-center">
              <p className="text-[#8E8E8E]">Saudi Arabia</p>
              <p>Riyadh</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <h4 className="pb-[35px]">Contact us</h4>
        <h4 className="pb-[25px] text-[#8E8E8E]">info@alfa-point.com</h4>
        <h4>+41 22 568 01 59</h4>
      </div>
    </footer>
  );
}
