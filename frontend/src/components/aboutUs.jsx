import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-orange-50/30 transform skew-x-[15deg] origin-bottom-left z-0"></div>

      <div ref={ref} className="relative py-24 px-6 overflow-hidden z-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative z-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-orange-800 mb-4 relative">
              About Us
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-300/60 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl 
                            border border-orange-100/50 hover:border-orange-300/50
                            transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full 
                                transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300"
              ></div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6 relative inline-block">
                Our Vision
                <div
                  className="absolute bottom-[-4px] left-0 w-16 h-0.5 bg-orange-300/60 
                                    rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-300"
                ></div>
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Smartline Systems Pvt. Ltd. is an innovative tech startup at the
                forefront of Cloud Computing and Artificial Intelligence (AI),
                dedicated to delivering cutting-edge solutions that empower
                businesses to achieve unparalleled success in today's
                competitive landscape.
              </p>
            </div>

            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl 
                            border border-orange-100/50 hover:border-orange-300/50
                            transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full 
                                transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300"
              ></div>
              <h3 className="text-2xl font-bold text-orange-700 mb-6 relative inline-block">
                Our Journey
                <div
                  className="absolute bottom-[-4px] left-0 w-16 h-0.5 bg-orange-300/60 
                                    rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-300"
                ></div>
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Founded by a team of passionate tech enthusiasts, the company
                initially focused on product development and quickly evolved
                into a dynamic force in the tech industry.
              </p>
            </div>
          </div>

          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl 
                        border border-orange-100/50 hover:border-orange-300/50 max-w-4xl mx-auto
                        transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] group"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full 
                            transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300"
            ></div>
            <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center relative">
              Our Commitment
              <div
                className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-16 h-0.5 
                                bg-orange-300/60 rounded-full scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300"
              ></div>
            </h3>
            <p className="text-gray-700 leading-relaxed font-medium text-center">
              In addition to its core offerings, Smartline Systems specializes
              in providing comprehensive training and consulting services,
              ensuring both employees and clients are equipped with the
              knowledge and skills to navigate the ever-evolving technological
              landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
