import { useRef } from "react";

function AnimatedTextLines({ text, className }) {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className= {className}>
      {lines.map((line, index) => (
        <span>{line}</span>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
