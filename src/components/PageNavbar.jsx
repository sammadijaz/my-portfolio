import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function PageNavbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Navigation items with routing logic
  const navItems = [
    { name: "home", path: "/", isScroll: true, scrollTo: "home" },
    { name: "services", path: "/", isScroll: true, scrollTo: "services" },
    { name: "about", path: "/", isScroll: true, scrollTo: "about" },
    { name: "work", path: "/projects", isScroll: false },
    { name: "contact", path: "/contact", isScroll: false },
  ];

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.5,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen && tl.current && iconTl.current) {
      tl.current.reverse();
      iconTl.current.reverse();
      setIsOpen(false);
    }
  };

  const handleNavClick = (item) => {
    // Close menu first
    if (tl.current && iconTl.current) {
      tl.current.reverse();
      iconTl.current.reverse();
      setIsOpen(false);
    }

    if (item.isScroll && isHomePage) {
      // Smooth scroll on home page
      setTimeout(() => {
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else if (item.isScroll && !isHomePage) {
      // Navigate to home and then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
    // For non-scroll items, the Link component handles navigation
  };

  const handleLinkClick = () => {
    // Close menu when clicking route links
    if (tl.current && iconTl.current) {
      tl.current.reverse();
      iconTl.current.reverse();
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="z-50 fixed flex flex-col justify-between gap-y-10 px-10 py-28 w-full h-full text-white/80 bg-black uppercase md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl">
          {navItems.map((item, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              {item.isScroll ? (
                <button
                  className="text-left transition-all duration-300 cursor-pointer hover:text-white"
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="block transition-all duration-300 cursor-pointer hover:text-white"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">Email</p>
            <p className="text-xl tracking-widest text-pretty lowercase">
              IamSammadIjaz@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap gap-x-2 md:flex-row">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-loose tracking-widest tracking-colors duration-300 uppercase hover:text-white"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Burger Menu Button */}
      <div
        className="z-50 fixed top-4 right-10 flex flex-col items-center justify-center gap-1 w-14 h-14 bg-black rounded-full transition-all duration-300 cursor-pointer md:w-20 md:h-20"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50.0% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
}

export default PageNavbar;
