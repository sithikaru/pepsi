import {  BsInstagram, BsThreads, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#0025FF] h-[290px] p-3 flex flex-row font-ULTRA font-extrabold w-full gap-12 text-[12px]">
      <div className="h-24 flex flex-col my-auto ml-12">
        <img src="Pepsi Logo.png" alt="logo" className="h-full hover:animate-logo" />
      </div>
      <div className="flex flex-col my-auto ml-12">
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          CONTACT US
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          TERMS AND CONDITIONS
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          PRIVACY POLICY
        </p>
      </div>
      <div className="flex flex-col my-auto ml-12">
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
            COPYRIGHT
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          PRODUCT FACTS
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          STORE LOCATOR
        </p>
      </div>
      <div className="flex flex-col my-auto ml-12">
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          SERVE PEPSI
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">
          ABOUT OUR ADS
        </p>
        <p className="my-auto text-white  uppercase flex flex-row hover:opacity-60 transition-[200ms] cursor-pointer">CAREERS</p>
      </div>
      <div className="flex flex-col my-auto ml-12">
        <div className="flex flex-row gap-4 my-auto">
            <BsInstagram className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
            <BsTwitterX className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
            <FaSquareFacebook className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
            <BsYoutube className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
            <IoLogoTiktok className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
            <BsThreads className="text-white cursor-pointer h-9 w-9 hover:opacity-60 transition-[200ms]"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
