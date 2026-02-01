import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap/all";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
const Contact = () => {
  const text = `Got a question or any project idea? I'd love to hear about it and discuss further!`;
  const items = [
    "You Just Imagine, I'll Code",
    "You Just Imagine, I'll Code",
    "You Just Imagine, I'll Code",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    })
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream it, I code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTriger={true}
        />
        <div className="flex px-10 mb-10 font-light text-white text-[26px] leading-none uppercase lg:text-[32px]">
          <div className="flex flex-col gap-10 w-full">
            <div className="social-link">
              <h2>E-Mail</h2>
              <div className="my-2 w-full h-px bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">iamsammadijaz@gmail.com</p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="my-2 w-full h-px bg-white/30" />
              <p className="py-1.5 text-xl lowercase md:text-2xl lg:text-3xl">
                +92-300-2612-932
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="my-2 w-full h-px bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-md leading-loose tracking-widest transition-colors duration-200 uppercase hover:text-white/80 md:text-2xl lg:text-3xl">
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>

            {/* Send a Message CTA */}
            <div className="mt-8 social-link">
              <h2>Send a Message</h2>
              <div className="my-2 w-full h-px bg-white/30" />
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-10 py-5 mt-4 text-black tracking-widest font-light text-lg bg-white transition-all duration-300 group uppercase hover:bg-gold"
              >
                Open Contact Form
                <Icon
                  icon="lucide:mail"
                  className="transition-transform duration-300 size-5 group-hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent"/>
    </section>
  );
};

export default Contact;
