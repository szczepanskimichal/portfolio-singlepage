import React from "react";
import { MdComputer, MdOutlinePiano } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaGuitar, FaPaintBrush, FaRunning } from "react-icons/fa";
import HobbyCard from "../components/HobbyCard";
import { useTranslation } from "react-i18next";
const Hobbys = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center sm:h-[100vh] py-10 image" id="Hobbys">
      <div className="flex flex-col mt-10 gap-y-[40px] justify-center items-center content">
        <h1 className="text-5xl text-light mt-10 font-bold whitespace-nowrap">
          {t("my_hobbys")}
        </h1>
        <div className="flex flex-col gap-y-5 sm:grid grid-cols-3 gap-10">
          <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
          <HobbyCard Icon={MdComputer} image="./computer.jpeg" index={2} />
          <HobbyCard Icon={FaGuitar} image="./guitar.jpeg" index={3} />
          <HobbyCard Icon={FaPaintBrush} image="./painting.jpeg" index={4} />
          <HobbyCard Icon={MdOutlinePiano} image="./piano.jpeg" index={5} />
          <HobbyCard Icon={FaRunning} image="./running.webp" index={6} />
        </div>
      </div>
    </div>
  );
};

export default Hobbys;
