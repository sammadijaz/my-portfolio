import React, { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;

    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.85,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(contentRef.current, {
      y: 10,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="overflow-hidden relative project-card h-[420px] bg-black rounded-2xl cursor-pointer group md:h-[480px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div className="overflow-hidden absolute inset-0">
        <img
          ref={imageRef}
          src={project.bgImage}
          alt={`${project.name}-background`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Dark Overlay with Gradient */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-50"
      />

      {/* Project Preview Image */}
      <div className="absolute inset-0 flex items-center justify-center p-6 pt-8 pb-32">
        <img
          src={project.image}
          alt={project.name}
          className="object-contain max-w-[85%] max-h-[55%] rounded-lg shadow-2xl drop-shadow-2xl"
        />
      </div>

      {/* Content Overlay - Always visible with gradient background */}
      <div
        ref={contentRef}
        className="absolute bottom-0 left-0 right-0 p-5 pt-12 text-white bg-gradient-to-t from-black/95 via-black/80 to-transparent md:p-6"
      >
        {/* Project Number */}
        <span className="text-gold text-xs font-light tracking-widest">
          0{index + 1}
        </span>

        {/* Project Title */}
        <div className="flex items-start justify-between gap-3 mt-1">
          <h3 className="text-xl font-light leading-tight uppercase md:text-2xl lg:text-3xl">
            {project.name}
          </h3>
          <Icon
            icon="lucide:arrow-up-right"
            className="flex-shrink-0 text-gold transition-transform duration-300 size-5 group-hover:rotate-45 md:size-6"
          />
        </div>

        {/* Description */}
        <p className="mt-2 text-white/70 text-xs font-light line-clamp-2 md:text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techstack.slice(0, 3).map((tech) => (
            <span
              key={tech.id}
              className="px-2 py-0.5 text-[10px] tracking-wider text-white/90 bg-white/10 rounded-full uppercase md:px-3 py-1 text-xs"
            >
              {tech.name}
            </span>
          ))}
          {project.techstack.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] tracking-wider text-gold bg-gold/10 rounded-full uppercase md:px-3 py-1 text-xs">
              +{project.techstack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 pointer-events-none group-hover:border-gold/60" />
    </div>
  );
};

export default ProjectCard;
