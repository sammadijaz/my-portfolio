import { useRef } from "react"

const Marquee = ({ items, className = "text-white bg-black" }) => {
    const containerRef = useRef(null);
  return (
    <div
     ref={containerRef}   
     className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >Marquee</div>
  )
}

export default Marquee
