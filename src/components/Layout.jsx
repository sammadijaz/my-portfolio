import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";
import PageNavbar from "./PageNavbar";

const Layout = ({ children, showLoader = true }) => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(!showLoader);
  const location = useLocation();

  useEffect(() => {
    if (showLoader) {
      if (progress === 100) {
        setIsReady(true);
      }
    }
  }, [progress, showLoader]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root className="overflow-x-auto relative w-screen min-h-screen">
      {showLoader && !isReady && (
        <div className="z-[900] fixed inset-0 flex flex-col items-center justify-center text-white tracking-opacity font-light bg-black duration-700">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="overflow-hidden relative h-1 w-60 bg-white/20 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <PageNavbar />
        {children}
      </div>
    </ReactLenis>
  );
};

export default Layout;
