import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => {
  const text =
    "Featured projects that have been meticulously crafted with passion to drive results and impact.";
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTriger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="projects"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
          >
            {/* TITLE */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md-group-hover:px12 md:group-hover:text-white">
              <h2 className="lg:text-[37px] text-[30px] leading-none">
                {project.name}
              </h2>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-5 md:size-6 "
              />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* techstack */}
            <div
              className="flex px-18 text-md leading-loose uppercase tracking-all duration-500 md:text-lg gap-x-5 md:group-hover:px-12"
            >
              {project.techstack.map((stack) => (
                <p 
                  key={stack.id}
                  className="text-black tracking-colors duration-500 md:group-hover:text-white"
                  >{stack.name}
                </p>
              ))}
            </div>
            
            {/* mobile preview images */}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
