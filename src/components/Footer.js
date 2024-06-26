import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-secondary h-[150px] flex flex-col justify-center items-center gap-y-5 text-light px-3">
      <div className="flex gap-x-5">
        <FaFacebookSquare className="w-10 h-10 transition cursor-pointer hover:text-primary hover:scale-110" />
        <FaInstagram className="w-10 h-10 transition cursor-pointer hover:text-primary hover:scale-110" />
        <FaSquareXTwitter className="w-10 h-10 transition cursor-pointer hover:text-primary hover:scale-110" />
        <FaYoutube className="w-10 h-10 transition cursor-pointer hover:text-primary hover:scale-110" />
      </div>
      <div className="text-center">
        Designed and developed by Michał Szczepański, 2024
      </div>
    </div>
  );
};

export default Footer;
