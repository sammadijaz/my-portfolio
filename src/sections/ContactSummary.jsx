import React, { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const ctaRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];

  const items2 = [
    "contact me",
    "contact me",
    "contact me",
    "contact me",
    "contact me",

  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });

    gsap.from(ctaRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
      }
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between gap-12 mt-16 min-h-screen"
    >
      <Marquee items={items} />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let's build a<br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span>"
        </p>
      </div>

      {/* CTA Button */}
      <div ref={ctaRef}>
        <Link 
          to="/contact" 
          className="flex items-center gap-4 px-10 py-5 text-white tracking-widest font-light text-lg bg-black transition-all duration-300 group uppercase hover:bg-gold hover:text-black"
        >
          Start a Conversation
          <Icon
            icon="lucide:message-circle"
            className="transition-transform duration-300 size-5 group-hover:scale-110"
          />
        </Link>
      </div>

      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
