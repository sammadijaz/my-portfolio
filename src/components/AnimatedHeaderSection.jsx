import React from 'react';
import { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AnimatedHeaderSection() {
  const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I help growing brands and startups gain 
    an unfair advantage through premium 
    results drives webs/apps`
  
    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(contextRef.current, {
        y: "50vh",
        duration: 1,
        ease: "circ.out",
      });
      tl.from(headerRef.current, {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    )
    }, [])
  return (
          <div ref={contextRef} >
            <div 
            style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <div 
              ref={headerRef} 
              className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
              >
                <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
                  404 No Bugs Found
                </p>
                <div className="px-7">
                  <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase text-[45px] banner-text-responsive sm:text-7xl md:text-8xl lg:text-9xl sm:gap-16 md:block">
                    Sammad Ijaz
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative px-10 text-black">
              <div className="absolute inset-x-0 border-t-2" />
              <div className="py-12 sm:py-16 text-end">
                <AnimatedTextLines text={aboutText} className="font-light uppercase value-text-responsive" />
      
              </div>
    
            </div>
            
          </div>
  );
}

export default AnimatedHeaderSection;
