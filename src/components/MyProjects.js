import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../utils/motions";
import { useTranslation } from "react-i18next";

const projects = [
  {
    href: "https://flowers-shop.p.goit.global/index.html",
    imgSrc: "../anemone.png",
    title: "Anemone",
    description:
      "Welcome to our floristry studio, where floral passion meets modern technology, creating a unique online experience. As a team of developers, along with our creative colleagues, we've crafted this website utilizing HTML5, Figma, Git, JavaScript, and CSS. With a responsive layout, you can now browse our beautiful floral arrangements on any device. Join us today and let yourself be inspired!",
  },
  {
    href: "https://mikel538.github.io/Filmoteka/index.html",
    imgSrc: "../Filmoteka.png",
    title: "Filmoteka",
    description:
      "Our website is a movie search engine that showcases movie rankings and recently popular films. It allows users to search for specific movies and provides information on their ratings and popularity, along with the option to watch trailers. With skills in responsive layout, HTML5, JavaScript, and CSS, we ensure a smooth and engaging experience across all devices.",
  },
  {
    href: "https://szczepanskimichal.github.io/WebStudio/",
    imgSrc: "../WebStudio.png",
    title: "WebStudio",
    description:
      "Responsive website, created with HTML5, CSS3, and JavaScript. The website is designed for a WebStudio, where you can find information about the services provided, the team, and the latest projects. The website is fully responsive and works on all devices.",
  },
];

const ProjectModal = ({ project, onClose, onThumbnailClick }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center overlay"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-lg max-w-2xl overflow-y-auto relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-5">{project.title}</h2>
        <p className="text-gray-800">{project.description}</p>
        <div className="flex justify-end mt-5">
          <a
            href={project.href}
            target="_blank"
            className="border-2 bg-light border-primary px-3 py-2 rounded-xl text-primary transition duration-300 delay-150 hover:scale-105 whitespace-nowrap font-semibold button-shadow ml-3"
            onClick={() => {
              onClose();
              onThumbnailClick();
            }}
          >
            Go to Project
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="Projects"
      className="sm:min-h-screen flex flex-col items-center justify-center mb-10"
    >
      <h1 className="my-10 text-5xl text-center font-bold pb-5">
        {t("my_projects")}
      </h1>
      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 items-center justify-center px-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            variants={cardVariants(index % 2 === 0 ? "left" : "right")}
            whileHover={{ scale: 1.01 }}
            onClick={() => openModal(project)}
            className={`cursor-pointer rounded-xl p-7 sm:p-5 bg-white flex flex-col sm:flex-row-reverse justify-center items-center gap-5 shadow-md transition-all delay-150 duration-300 max-w-[30rem] sm:h-[13rem] hover:shadow-lg`}
          >
            <a href={project.href} target="_blank" className="">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full rounded-lg transition-opacity delay-150 duration-300 group-hover:opacity-50"
              />
            </a>
            <div className="rounded-2xl flex flex-col items-center gap-2 justify-center">
              <h2 className="text-3xl font-bold text-center">
                <a
                  href={project.href}
                  className="hover:underline transition-all delay-150 duration-300"
                >
                  {project.title}
                </a>
              </h2>
              <p className="text-gray-800 sm:max-h-[100px] text-ellipsis overflow-hidden">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          onThumbnailClick={() => {
            console.log("Navigating to project page...");
          }}
        />
      )}
    </section>
  );
};

export default Projects;
