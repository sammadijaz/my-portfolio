import AnimatedHeaderSection from "../components/AnimatedHeaderSection"

const Works = () => {
  
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
            subTitle={"Coding with purpose, Built to scale"}    
            title={"About"}
            text={text}
            textColor={"text-white"}
            withScrollTriger = {true}
        />
    </section>
  )
}

export default Works