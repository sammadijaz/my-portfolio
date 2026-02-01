import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";

// Sections for home page
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

// Pages
import ContactFormPage from "./pages/ContactFormPage";
import ProjectsPage from "./pages/ProjectsPage";

// Components
import PageNavbar from "./components/PageNavbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </>
  );
};

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Only show loader on home page (which has 3D content)
    if (!isHomePage) {
      setIsReady(true);
    } else if (progress === 100) {
      setIsReady(true);
    }
  }, [progress, isHomePage]);

  // Reset loader state when navigating to home
  useEffect(() => {
    if (isHomePage && progress < 100) {
      setIsReady(false);
    }
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root className="overflow-x-auto relative w-screen min-h-screen">
      {isHomePage && !isReady && (
        <div className="z-[900] fixed inset-0 flex flex-col items-center justify-center text-white tracking-opacity font-light bg-black duration-700">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="overflow-hidden relative h-1 w-60 bg-white/20 rounded">
            <div className="absolute top-0 left-0 h-full bg-white transition-all duration-300" style={{width: `${progress}%`}}></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Show PageNavbar only on non-home pages */}
        {!isHomePage && <PageNavbar />}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactFormPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
