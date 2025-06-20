import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

function Services() {
  const text = `I build secure, high-performance full-stack apps with smooth UX to drive growth not headaches.`;
  return (
    <section 
    id="services"
    className="min-h-screen bg-black rounded-t-4xl"
    >
      <AnimatedHeaderSection 
        subTitle = { "Behind the scene, Beyond the scene" }
        title = { "Service" }
        text = { text }
        textColor = { "text-white" }
        withScrollTriger = { true }
      />
    </section>
  );
}

export default Services;
