import { motion } from "framer-motion";

import { styles } from "../styles";
import GlowingButton from "./GlowingButton";
import cv from "./cv.pdf";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto pt-24 sm:pt-32">
  <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5`}>
  {/* Left Side Line */}
  <div className="flex flex-col justify-center items-center mt-2 sm:mt-5">
    <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915eff]" />
    <div className="w-1 h-40 sm:h-80 violet-gradient" />
  </div>

  {/* Main Text Content */}
  <div className="flex flex-col justify-center">
    <h1 className={`${styles.heroHeadText} text-white text-[24px] sm:text-[40px]`}>
      Hi, I'm <span className="text-[#915eff]">Waleed</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 sm:mt-4 text-white-100 text-[12px] sm:text-[16px] leading-relaxed`}>
      I'm a Software Engineer with 1 year of experience
    </p>
    <div className="mt-3 sm:mt-4">
      <GlowingButton onClick={() => window.open(cv, '_blank')} download>
        Download CV
      </GlowingButton>
    </div>
  </div>
</div>

  {/* Show Canvas only on larger screens */}
  <div className="hidden sm:block absolute top-10 right-0 w-full h-full z-[0]">
    <ComputersCanvas />
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div 
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
</section>
  )
}

export default Hero