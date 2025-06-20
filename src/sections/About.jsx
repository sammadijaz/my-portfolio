import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

function About() {
    const text = `Ex-CEO software developer with expertise in content writing,front-end, back-end development, 
    project management, video editing, content creation and in making brand identities. 
    Experienced in leading cross-functional teams🍃`

  return (
  <section 
    id="about" 
    className="min-h-screen bg-black rounded-b-4xl"
    >
        <AnimatedHeaderSection
            subTitle={"Coding with purpose, Built to scale"}    
            title={"About"}
            text={text}
            textColor={"text-white"}
            withScrollTriger = {true}
        />
       
    </section>

)}

export default About;
