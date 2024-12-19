import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const skills = [
    { label: "Cloud Computing", percentage: 90 },
    { label: "Artificial Intelligence", percentage: 85 },
    { label: "Web Development", percentage: 95 },
    { label: "Mobile App Development", percentage: 88 },
    { label: "Data Analytics", percentage: 82 },
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-400 py-24 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-[-15deg] origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-black/5 transform skew-x-[15deg] origin-bottom-left"></div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Technologies
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-orange-200 transition-all duration-300 hover:bg-white/15 hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Innovative Technology
                </h3>
                <p className="text-white/90 leading-relaxed">
                  SmartLines Systems combines tech expertise and business
                  intelligence to catalyze change and deliver results.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-orange-200 transition-all duration-300 hover:bg-white/15 hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Digital Transformation
                </h3>
                <p className="text-white/90 leading-relaxed">
                  As a Tech-Startup Enterprise, we concentrate on Web
                  Application Development, Mobile Application Development,
                  Design Services, Search Engine Optimization and Enterprise
                  Resource Planning Softwares.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Technical Expertise
            </h3>

            {skills.map((skill, index) => (
              <div key={index} className="mb-8 group">
                <div className="flex justify-between text-white mb-3">
                  <span className="font-semibold text-white/90 group-hover:text-white transition-all duration-300">
                    {skill.label}
                  </span>
                  <span className="font-bold group-hover:text-orange-200 transition-all duration-300">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                  <div
                    className="bg-gradient-to-r from-white to-orange-200 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isInView ? `${skill.percentage}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Tech;
