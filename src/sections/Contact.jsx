import AnimatedHeaderSection from "../components/AnimatedHeaderSection"

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTriger={true}
      />
      </div>
    </section>
  )
}

export default Contact