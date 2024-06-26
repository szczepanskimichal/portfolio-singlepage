import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motions";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ index, text, name, image, position }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      variants={slideIn("left", "spring", 0, 0.05 * index)}
      initial="hidden"
      whileInView="show"
      className="w-[18rem] h-[22rem] bg-white rounded-2xl border-2 border-primary p-2 drop-shadow-2xl flex flex-col items-center justify-between px-5 transition duration-300 delay-150 cursor-pointer relative pt-[3rem] pb-10"
    >
      <div className="rounded-full border-2 border-primary h-[80px] w-[80px] overflow-hidden drop-shadow-xl absolute top-[-40px] hover:scale-105 transition delay-150 duration-300">
        <img
          className="w-full h-full object-cover"
          src="./football.webp"
          alt=""
        />
      </div>
      <div>
        <h1 className="font-semibold text-lg text-center">Jon Doe</h1>
        <p className="text-slate-700">Software Developer</p>
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit
        fugiat obcaecati doloremque amet repellendus fugit expedita libero
        molestias nam!
      </p>
      <FaQuoteRight className="w-[20px] h-[20px] text-black" />
    </motion.div>
  );
};

export default TestimonialCard;
