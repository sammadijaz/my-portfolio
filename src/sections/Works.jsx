import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null)
  const text = "Featured projects that have been meticulously crafted with passion to drive results and impact.";

  const mouse = useRef({x: 0, y: 0});
  const moveX = useRef(null)
  const moveY = useRef(null)
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });
    
  })  
  
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };  
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);

  }
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTriger={true}
      />
      <div 
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
        >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="projects"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >

            {/* OVERLAY */}
            <div className="" />

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
            {/* DIVIDED */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* TECHSTACK*/}
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

            {/* MOBILE PREVIEW IMAGES */}
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

        {/* DESKTOP FLOATING PREVIEW IMAGES */}
        <div 
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
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
