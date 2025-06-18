import { useRef } from "react";

function AnimatedTextLines({ text, className }) {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  return (
    <div ref={containerRef} className= {className}>
      {lines.map((line, index) => (
        <span
        key={index} 
        ref={(el) => (linesRef.current[index] = el) }
        className="block leading-relaxed tracking-wide text-pretty">{line}</span>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
