import { Icon } from "@iconify/react/dist/iconify.js"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { projects } from "../constants"

const Works = () => {
  const text = "Featured projects that have been meticulously crafted with passion to drive results and impact."
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
            subTitle={"Logic meets Aesthetics, Seamlessly"}    
            title={"Works"}
            text={text}
            textColor={"text-black"}
            withScrollTriger = {true}
        />
        <div className="relative flex flex-col font-light">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              id="projects" 
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
              >
                {/* TITLE */}
                <div className="lg:text-[32px] text-[26px] leading-none">
                  <h2>{project.name}</h2>
                  <Icon icon="lucide:arrow-up-right" className="size-5 md:size-6 " />
                </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Works