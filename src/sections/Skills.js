import React, { useState } from "react";
import {
  FaHtml5,
  FaJs,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiElectron,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiInsomnia,
  SiJira,
  SiLinux, // Zastępuje SiBash
  SiTestinglibrary,
} from "react-icons/si";
import SkillIcon from "../components/SkillIcon";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const [color, setColor] = useState("");

  const handleSkillHover = (skillName, color) => {
    setHoveredSkill(skillName);
    setColor(color);
  };

  const handleSkillLeave = () => {
    setHoveredSkill("");
  };
  const { t } = useTranslation();

  return (
    <div className="flex justify-center py-5 h-screen mt-10" id="Skills">
      <div className="flex flex-col gap-y-[70px] justify-center items-center">
        <div className="relative flex justify-center items-center">
          <h1
            className="absolute text-5xl font-bold whitespace-nowrap transition-opacity delay-300 duration-300 ease-in-out opacity-100"
            style={{ opacity: hoveredSkill ? 0 : 1 }}
          >
            {t("my_skillset")}
          </h1>
          <h1
            className={`absolute text-5xl font-bold whitespace-nowrap transition-opacity delay-300 duration-300 ease-in-out opacity-0 text-${color}-500`}
            style={{ opacity: hoveredSkill ? 1 : 0 }}
          >
            {hoveredSkill}
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-7 justify-between gap-3 sm:gap-5">
          <SkillIcon
            Icon={FaHtml5}
            onMouseEnter={() => handleSkillHover("HTML", "red")}
            onMouseLeave={handleSkillLeave}
            color="text-red-500"
            index={1}
          />
          <SkillIcon
            Icon={SiTailwindcss}
            onMouseEnter={() => handleSkillHover("Tailwind CSS", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={2}
          />
          <SkillIcon
            Icon={FaJs}
            onMouseEnter={() => handleSkillHover("JavaScript", "yellow")}
            onMouseLeave={handleSkillLeave}
            color="text-yellow-500"
            index={3}
          />
          <SkillIcon
            Icon={FaCss3}
            onMouseEnter={() => handleSkillHover("CSS", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={4}
          />
          <SkillIcon
            Icon={FaNodeJs}
            onMouseEnter={() => handleSkillHover("Node JS", "green")}
            onMouseLeave={handleSkillLeave}
            color="text-green-500"
            index={5}
          />
          <SkillIcon
            Icon={FaReact}
            onMouseEnter={() => handleSkillHover("React JS", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={6}
          />
          <SkillIcon
            Icon={SiRedux}
            onMouseEnter={() => handleSkillHover("Redux JS", "purple")}
            onMouseLeave={handleSkillLeave}
            color="text-purple-500"
            index={7}
          />
          <SkillIcon
            Icon={SiTypescript}
            onMouseEnter={() => handleSkillHover("TypeScript", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={8}
          />
          <SkillIcon
            Icon={SiNextdotjs}
            onMouseEnter={() => handleSkillHover("Next.js", "black")}
            onMouseLeave={handleSkillLeave}
            color="text-black-500"
            index={9}
          />
          <SkillIcon
            Icon={SiElectron}
            onMouseEnter={() => handleSkillHover("Electron", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={10}
          />
          <SkillIcon
            Icon={SiBootstrap}
            onMouseEnter={() => handleSkillHover("Bootstrap", "purple")}
            onMouseLeave={handleSkillLeave}
            color="text-purple-500"
            index={11}
          />
          <SkillIcon
            Icon={SiExpress}
            onMouseEnter={() => handleSkillHover("Express", "black")}
            onMouseLeave={handleSkillLeave}
            color="text-black-500"
            index={12}
          />
          <SkillIcon
            Icon={SiMongodb}
            onMouseEnter={() => handleSkillHover("MongoDB", "green")}
            onMouseLeave={handleSkillLeave}
            color="text-green-500"
            index={13}
          />
          <SkillIcon
            Icon={SiPostgresql}
            onMouseEnter={() => handleSkillHover("PostgreSQL", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={14}
          />
          <SkillIcon
            Icon={SiPostman}
            onMouseEnter={() => handleSkillHover("Postman", "orange")}
            onMouseLeave={handleSkillLeave}
            color="text-orange-500"
            index={15}
          />
          <SkillIcon
            Icon={SiInsomnia}
            onMouseEnter={() => handleSkillHover("Insomnia", "purple")}
            onMouseLeave={handleSkillLeave}
            color="text-purple-500"
            index={16}
          />
          <SkillIcon
            Icon={FaGitAlt}
            onMouseEnter={() => handleSkillHover("Git", "orange")}
            onMouseLeave={handleSkillLeave}
            color="text-orange-500"
            index={17}
          />
          <SkillIcon
            Icon={SiLinux} // Zastąpione SiBash
            onMouseEnter={() => handleSkillHover("Linux", "black")}
            onMouseLeave={handleSkillLeave}
            color="text-black-500"
            index={18}
          />
          <SkillIcon
            Icon={SiTestinglibrary}
            onMouseEnter={() => handleSkillHover("Unit Testing", "red")}
            onMouseLeave={handleSkillLeave}
            color="text-red-500"
            index={19}
          />
          <SkillIcon
            Icon={FaDocker}
            onMouseEnter={() => handleSkillHover("Docker", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={20}
          />
          <SkillIcon
            Icon={SiJira}
            onMouseEnter={() => handleSkillHover("JIRA", "blue")}
            onMouseLeave={handleSkillLeave}
            color="text-blue-500"
            index={21}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
