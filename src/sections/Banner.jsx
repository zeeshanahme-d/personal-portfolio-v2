// src/sections/Banner.jsx
import { smoothScroll } from "../lib/ScrollToElement";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"; // Import variants

const Banner = () => {
  return (
    <section
      id="home"
      className="h-screen min-h-200 max-h-480 flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container relative z-10"
      >
        <div className="flex flex-col justify-center items-center w-full text-center">
          {/* Main Heading */}
          <motion.h1
            variants={textVariant(0.3)}
            className="mb-6 text-[10vw] xsm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
          >
            Transforming Ideas Into{" "}
            <span className="text-primary">Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="max-w-full md:max-w-3xl font-light leading-relaxed text-light-gray text-center text-base md:text-lg xl:text-xl"
          >
            Hi, I'm <span className="text-primary font-medium">Zeeshan Ahmed</span>, a Front-End Web Developer focused on creating responsive, high performance web applications that seamlessly integrate with backend technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeIn("up", "spring", 0.8, 1)}
            className="flex justify-center mt-12 md:mt-10 md:justify-start"
          >
            <div className="buttonContainer">
              <button
                onClick={() => smoothScroll("projects")}
                className="link cursor-pointer relative group"
              >
                <img
                  src={"/images/rounded-text.png"}
                  width={140}
                  height={140}
                  alt=""
                  className="image"
                />
                <HiArrowRight className="arrow-icon" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute left-1/2 bottom-0 -translate-x-1/2"
      >
        <img
          src="/images/scroll-down.gif"
          className="w-16 h-16 object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Banner;