import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"
      ></div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative bg-transparent py-16 px-4 overflow-hidden z-10"
      >
        <div className="max-w-6xl mx-auto relative z-20">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-orange-800 mb-4 relative">
              About Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 group relative z-30"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-orange-700 mb-4"
              >
                Our Vision
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 leading-relaxed"
              >
                Smartline Systems Pvt. Ltd. is an innovative tech startup at the forefront of Cloud Computing and Artificial Intelligence (AI), dedicated to delivering cutting-edge solutions that empower businesses to achieve unparalleled success in today's competitive landscape.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 group relative z-30"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-orange-700 mb-4"
              >
                Our Journey
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 leading-relaxed"
              >
                Founded by a team of passionate tech enthusiasts, the company initially focused on product development and quickly evolved into a dynamic force in the tech industry.
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 group relative z-30"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-orange-700 mb-4 text-center"
            >
              Our Commitment
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-center"
            >
              In addition to its core offerings, Smartline Systems specializes in providing comprehensive training and consulting services, ensuring both employees and clients are equipped with the knowledge and skills to navigate the ever-evolving technological landscape.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;