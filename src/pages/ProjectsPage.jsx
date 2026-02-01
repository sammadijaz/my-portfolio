import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const backLinkRef = useRef(null);
  const gridRef = useRef(null);
  const projectRefs = useRef([]);
  const statsRef = useRef(null);

  const marqueeItems = [
    "View My Work",
    "View My Work",
    "View My Work",
    "View My Work",
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate header
    tl.from(headerRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    // Animate subheader
    tl.from(
      subHeaderRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      },
      "<+0.3"
    );

    // Animate back link
    tl.from(
      backLinkRef.current,
      {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "<"
    );

    // Animate stats
    if (statsRef.current?.children) {
      tl.from(
        statsRef.current.children,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "<+0.2"
      );
    }

    // Animate project cards with scroll trigger
    projectRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section className="min-h-screen bg-primary">
      {/* Back Navigation */}
      <div ref={backLinkRef} className="z-40 fixed top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-black/60 transition-colors duration-300 hover:text-black group"
        >
          <Icon
            icon="lucide:arrow-left"
            className="transition-transform duration-300 size-6 group-hover:-translate-x-1"
          />
          <span className="text-sm tracking-widest font-light uppercase">
            Back Home
          </span>
        </Link>
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="pt-24 pb-8">
        <div className="px-10">
          <p className="mb-8 text-sm font-light tracking-[0.5rem] text-black/60 uppercase">
            Featured Work
          </p>
          <h1 className="text-black text-[45px] leading-none uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            All Projects
          </h1>
        </div>

        {/* Divider with text */}
        <div className="relative px-10 mt-8">
          <div className="absolute inset-x-0 border-t-2 border-black/20" />
          <div ref={subHeaderRef} className="py-12">
            <p className="font-light text-xl text-black/80 text-end uppercase md:text-2xl lg:text-3xl">
              A collection of projects that showcase my skills in
              <br />
              full-stack development, design, and problem-solving.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="flex flex-wrap justify-center gap-8 px-10 py-8 border-y border-black/10 md:gap-16"
      >
        <div className="text-center">
          <p className="text-4xl font-light text-black md:text-5xl">
            {projects.length}+
          </p>
          <p className="mt-2 text-sm tracking-widest text-black/50 uppercase">
            Projects
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-light text-black md:text-5xl">15+</p>
          <p className="mt-2 text-sm tracking-widest text-black/50 uppercase">
            Technologies
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-light text-black md:text-5xl">100%</p>
          <p className="mt-2 text-sm tracking-widest text-black/50 uppercase">
            Satisfaction
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-10 py-20 text-white bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-light uppercase md:text-5xl lg:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mb-12 text-lg text-white/60 font-light md:text-xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 text-black tracking-widest font-light text-lg bg-white transition-colors duration-300 uppercase hover:bg-gold group"
          >
            Get In Touch
            <Icon
              icon="lucide:arrow-right"
              className="transition-transform duration-300 size-5 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <Marquee
        items={marqueeItems}
        className="text-black bg-primary border-t border-black/20"
        iconClassName="text-gold"
      />
    </section>
  );
};

export default ProjectsPage;
