import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import hero from "../assets/Hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center md:justify-between">
      {/* Left side with text */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fabc37]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#fabc37]"> Vijayyy</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 capitalize `}>
            I build amazing web applications using{" "}
            <br className="sm:block hidden" /> React & Next.js! 🚀⚡{" "}
          </p>
        </div>
      </div>

      {/* Right side with hero image */}
      <div className="absolute lg:mt-[120px] inset-y-0 right-2 top-[300px] md:top-0 mt-5 md:mt-[0] md:mr-20 flex justify-center md:block">
        <div className="w-[420px] h-[300px] md:w-[600px] md:h-[500px] transform md:scale-x-[-1]">
          <img src={hero} alt="Hero" className="object-contain" />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
