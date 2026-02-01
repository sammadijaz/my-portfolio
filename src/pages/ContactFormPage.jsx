import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";

const ContactFormPage = () => {
  const formRef = useRef(null);
  const headerRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const backLinkRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const marqueeItems = [
    "Let's Connect",
    "Let's Connect",
    "Let's Connect",
    "Let's Connect",
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate header
    tl.from(headerRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    // Animate back link
    tl.from(
      backLinkRef.current,
      {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "<+0.2"
    );

    // Animate form inputs staggered
    tl.from(
      inputRefs.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "<+0.3"
    );

    // Animate submit button
    tl.from(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "<+0.2"
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID (e.g., "xyzabcde")
      // Get your ID from https://formspree.io - create a form and copy the ID
      const FORMSPREE_ID = "mjgoblyk"; // ← REPLACE THIS WITH YOUR ACTUAL FORMSPREE ID
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Success animation
        gsap.to(formRef.current, {
          scale: 0.98,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors.map(err => err.message).join(", "));
        }
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || "Failed to send message. Please try again.",
      });
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b-2 border-white/30 py-4 px-2 text-white text-xl md:text-2xl font-light tracking-wide placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <section className="min-h-screen bg-black">
      {/* Back Navigation */}
      <div
        ref={backLinkRef}
        className="z-40 fixed top-6 left-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-white/60 transition-colors duration-300 hover:text-white group"
        >
          <Icon
            icon="lucide:arrow-left"
            className="transition-transform duration-300 size-6 group-hover:-translate-x-1"
          />
          <span className="text-sm tracking-widest font-light uppercase">
            Back Home
          </span>
        </Link>
      </div>

      {/* Header */}
      <div ref={headerRef} className="pt-24 pb-12">
        <div className="px-10">
          <p className="mb-8 text-sm font-light tracking-[0.5rem] text-white/60 uppercase">
            Get In Touch
          </p>
          <h1 className="text-white text-[45px] leading-none uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            Contact Me
          </h1>
        </div>
        <div className="relative px-10 mt-8">
          <div className="absolute inset-x-0 border-t-2 border-white/30" />
          <div className="py-12 text-end">
            <p className="font-light text-xl text-white/80 uppercase md:text-2xl lg:text-3xl">
              Have a project in mind? Let's make it happen.
              <br />
              Fill out the form below and I'll get back to you soon.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-10 pb-20">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-8"
        >
          {/* Name Input */}
          <div ref={(el) => (inputRefs.current[0] = el)}>
            <label className="block mb-2 text-white/50 text-sm tracking-widest font-light uppercase">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className={inputClasses}
            />
          </div>

          {/* Email Input */}
          <div ref={(el) => (inputRefs.current[1] = el)}>
            <label className="block mb-2 text-white/50 text-sm tracking-widest font-light uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className={inputClasses}
            />
          </div>

          {/* Subject Input */}
          <div ref={(el) => (inputRefs.current[2] = el)}>
            <label className="block mb-2 text-white/50 text-sm tracking-widest font-light uppercase">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className={inputClasses}
            />
          </div>

          {/* Message Input */}
          <div ref={(el) => (inputRefs.current[3] = el)}>
            <label className="block mb-2 text-white/50 text-sm tracking-widest font-light uppercase">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit Button */}
          <div ref={buttonRef} className="pt-8">
            <button
              type="submit"
              disabled={status.submitting}
              className="overflow-hidden relative px-16 py-6 w-full text-black tracking-widest text-lg font-light bg-white transition-all duration-500 group uppercase hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed md:w-auto"
            >
              <span className="z-10 relative flex items-center justify-center gap-4">
                {status.submitting ? (
                  <>
                    <Icon icon="eos-icons:loading" className="size-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Icon
                      icon="lucide:send"
                      className="transition-transform duration-300 size-5 group-hover:translate-x-2 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Status Messages */}
          {status.submitted && (
            <div className="flex items-center gap-3 text-green-400 text-lg font-light animate-pulse">
              <Icon icon="lucide:check-circle" className="size-6" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status.error && (
            <div className="flex items-center gap-3 text-red-400 text-lg font-light">
              <Icon icon="lucide:alert-circle" className="size-6" />
              {status.error}
            </div>
          )}
        </form>
      </div>

      {/* Marquee at bottom */}
      <Marquee items={marqueeItems} className="text-white bg-transparent border-t border-white/20" />
    </section>
  );
};

export default ContactFormPage;
