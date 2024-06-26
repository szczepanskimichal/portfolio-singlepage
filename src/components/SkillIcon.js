import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motions";

const SkillIcon = ({ Icon, color, index, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.button
      variants={fadeIn("up", "spring", 0, 0.3 * index)}
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-white border-4 border-secondary hover:border-primary p-3 hover:bg-[#cbdbcc] duration-200 drop-shadow-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon className={`w-10 h-10 ${color}`} />
    </motion.button>
  );
};

export default SkillIcon;
