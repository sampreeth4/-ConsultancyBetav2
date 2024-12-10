import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import rightImage from "../assets/ani1.jpeg"; 

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, 
    amount: 0.1, 
  });

  return (
    <div className="relative h-screen" ref={ref}>
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly h-full bg-white z-10 sm:px-28">
        <motion.div
          className="text-left z-20 space-y-10 w-full md:w-1/2"
          initial={{ x: -150, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500">
              Smartline Systems
            </h1>
            <h2 className="text-2xl md:text-3xl italic">
              Innovate Possibilities
            </h2>
          </div>
          <p className="text-xl md:text-2xl">
            People, Cloud-Based Bookkeeping and Business Management Solutions
          </p>
          <div className="flex justify-start space-x-4">
            <button className="bg-orange-500 text-white rounded-full px-8 py-3 hover:bg-orange-600 transition duration-300">Get Started</button>
            <button className="bg-transparent border-2 border-black text-black rounded-full px-8 py-3 hover:bg-orange-600 hover:text-white hover:border-none transition duration-300">Learn More</button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 z-40"
          initial={{ x: 150, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={rightImage} alt="Right Side Image" className="max-w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;