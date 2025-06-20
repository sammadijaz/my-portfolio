import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
    const text = `Ex-CEO software developer with expertise in content writing,front-end, back-end development, 
    project management, video editing, content creation and in making brand identities. 
    Experienced in leading cross-functional teams🍃`

    const imgRef = useRef(null);

    const aboutText = `
    A developer, founder, and builder with experience in startups, web development, and content creation. From product launches to full-stack builds, every project reflects a focus on clarity, function, and creativity. Skilled in JavaScript, Node.js, and GSAP, with a background in managing teams, designing brand identities, and making ideas work.
    When I'm Not Coding:
    🛌 I'm probably sleeping (because let's be honest, that's important)
    📚 I love learning random new things, even if they have nothing to do with tech
    🌍 You might find me exploring new ideas, places, or rabbit holes on the internet
    🎮 Occasionally dropping into Fortnite matches or thinking five moves ahead in chess`

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true, 
            },
            ease: "power1.inOut"
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4-out",
            scrollTrigger: { trigger: imgRef.current },
        })

    })
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
        <div
            className="flex flex-col items-center justify-center gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60"
        >
            <img src="my-portfolio/images/pfp.jpg" alt="pfp" className="w-md rounded-3xl" ref={imgRef} />
            <AnimatedTextLines text={aboutText} className={"w-full"}/>
        </div>
    </section>

)}

export default About;
