import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useState } from "react";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(null)
  const text =
    "Featured projects that have been meticulously crafted with passion to drive results and impact.";
  
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
  };  
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
  };  
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTriger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="projects"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* TITLE */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md-group-hover:px12 md:group-hover:text-white">
              <h2 className="lg:text-[37px] text-[30px] leading-none">
                {project.name}
              </h2>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-5 md:size-6 "
              />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* techstack */}
            <div
              className="flex px-18 text-lg leading-loose uppercase tracking-all duration-500 md:text-xl gap-x-5 md:group-hover:px-12"
            >
              {project.techstack.map((stack) => (
                <p 
                  key={stack.id}
                  className="text-black tracking-colors duration-500 md:group-hover:text-white"
                  >{stack.name}
                </p>
              ))}
            </div>

            {/* mobile preview images */}
            <div
              className="relative flex items-center justify-center px-10 md:hidden h-[400px]"
            >
              <img 
                src={ project.bgImage } 
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50" />
                <img 
                  src={project.image}
                  alt={`${project.name}-image`} 
                  className="absolute bg-center px-14 rounded-xl"
                  />
            </div>
          </div>
        ))}

        {/* desktop floating preview image */}
        <div 
          className="fixed top-0 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden"
        >
          {currentIndex !== null && (
          <img 
            src={projects[currentIndex].image} 
            alt="preview" 
            className="object-cover w-full h-full"
            />
          )}

        </div>
      </div>
    </section>
  );
};

export default Works;
