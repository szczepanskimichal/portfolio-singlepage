import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects"; // Załóżmy, że MyProjects.js znajduje się w folderze components

import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import More from "./sections/More";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Hobbys from "./sections/Hobbys";
import Testimonials from "./sections/Testimonials";
import GetStarted from "./sections/GetStarted";
// import "./i18n";

function App() {
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const sectionsRef = useRef([]);
  const currentSection = useRef(0);

  const scrollToNext = () => {
    if (currentSection.current < sectionsRef.current.length - 1) {
      currentSection.current += 1;
      sectionsRef.current[currentSection.current].scrollIntoView({
        behavior: "smooth",
      });

      if (currentSection.current === 6) {
        setBottom(true);
        setTop(false);
      }
    }
  };

  const scrollToTop = () => {
    sectionsRef.current[0].scrollIntoView({
      behavior: "smooth",
    });
    currentSection.current = 0;
    setBottom(false);
    setTop(true);
  };

  const handleScroll = () => {
    setTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Suspense fallback="loading">
      <>
        <div className="fixed w-full top-0 z-10">
          <Header />
        </div>
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <div
            className="snap-center h-screen"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <Hero />
          </div>
          <div
            className="snap-center h-screen"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <More />
          </div>
          <div
            className="snap-center h-screen"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <Skills />
          </div>
          <div
            className="snap-center sm:h-screen"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <Hobbys />
          </div>
          <div
            className="snap-center sm:h-screen"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <MyProjects />
          </div>
          <div
            className="snap-center sm:h-screen"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <Testimonials />
          </div>
          <div
            className="snap-center h-screen"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <GetStarted />
          </div>

          <div className="snap-center">
            <Footer />
          </div>
        </div>

        <button
          className="transition delay-100 duration-200 fixed bottom-10 right-10 bg-secondary text-white p-3 rounded-full opacity-50 hover:opacity-100 hover:scale-105"
          onClick={bottom ? scrollToTop : scrollToNext}
        >
          {bottom ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </>
    </Suspense>
  );
}

export default App;
