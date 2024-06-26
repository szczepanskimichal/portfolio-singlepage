import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motions";

const HobbyCard = ({ Icon, image, index }) => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.05 * index, 0.4 * index)}
      initial="hidden"
      whileInView="show"
      className="w-[20rem] bg-light rounded-xl border-2 border-primary p-2 relative overflow-hidden group cursor-pointer"
    >
      <img
        className="w-full h-full rounded-lg transition-opacity delay-150 duration-300 group-hover:opacity-50"
        src={image}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity delay-150 duration-300 group-hover:opacity-100">
        <Icon className="text-white w-[100px] h-[100px]" />
      </div>
    </motion.div>
  );
};

export default HobbyCard;
