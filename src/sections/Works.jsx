import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Works = () => {
  const overlayRefs = useRef([]);

  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null)
  const text = "Featured projects that have been meticulously crafted with passion to drive results and impact.";

  const mouse = useRef({x: 0, y: 0});
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });

    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#projects", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#projects",
      },
    });
    
  }, []);
  
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
    },
    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.15,
      ease: "power2.out",
     }
  );

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

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el)
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in"
    })

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
    <section id="work" className="overflow-auto flex flex-col min-h-screen">
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
            className="flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >

            {/* OVERLAY */}
            <div 
            ref={(el) => {
              overlayRefs.current[index] = el;
            }}
            className="absolute inset-0 hidden bg-black duration-200 -z-10 clip-path md:block" 
            />

            {/* TITLE */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 group-hover:text-white md:group-hover:px12">
              <h2 className="text-[26px] leading-none lg:text-[32px]">
                {project.name}
              </h2>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-5 md:size-6"
              />
            </div>
            {/* DIVIDER */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* TECHSTACK*/}
            <div
              className="overflow-x-hidden flex flex-wrap gap-x-5 px-10 w-full max-w-full text-xs leading-loose tracking-all duration-500 uppercase group-hover:px-12 md:text-sm"
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
              className="relative flex items-center justify-center px-10 h-[400px] md:hidden"
            >
              <img 
                src={ project.bgImage } 
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50" />
                <img 
                  src={project.image}
                  alt={`${project.name}-image`} 
                  className="absolute px-14 bg-center rounded-xl"
                  />
            </div>
          </div>
        ))}

        {/* DESKTOP FLOATING PREVIEW IMAGES */}
        <div 
          ref={previewRef}
          className="z-50 overflow-hidden fixed left-0 hidden w-[960px] border-8 border-black opacity-0 pointer-events-none -top-2/6 md:block"
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

      {/* View All Projects CTA */}
      <div className="flex justify-center py-16">
        <Link 
          to="/projects" 
          className="flex items-center gap-4 px-10 py-5 text-white tracking-widest font-light text-lg bg-black transition-all duration-300 group uppercase hover:bg-gold hover:text-black"
        >
          View All Projects
          <Icon
            icon="lucide:arrow-right"
            className="transition-transform duration-300 size-5 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </section>
  );
};

export default Works;
