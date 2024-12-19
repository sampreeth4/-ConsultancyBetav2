import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SubServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const additionalServices = [
    {
      title: "Innovative Products",
      description:
        "Developing future tech products that innovates the future with quality and having user-friendly products is our CDN's Mission.",
    },
    {
      title: "Design and Development",
      description:
        "We love designing creative stuffs and we have expertise in developing Light weight Web and Mobile Applications .",
    },
    {
      title: "Mobile App Development",
      description:
        "Get a Mobile App which is the glue for all other digital industries to use when approaching convergence.",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "CyberDude Network's primary goal is to combine the hardware with the software. Cyberdude products is integrated with Internet of Things (IoT).",
    },
    {
      title: "(SAAS) apps with AI",
      description:
        "With SAAS applications, we automate business workflows integrating with Advanced Artificial Intellegence to automate the industries to predict the future endeavors.",
    },
    {
      title: "Our 24x7 Support",
      description:
        "We provide support regarding product, sales, enquiry and premium support towards our products. Find customer centered atmosphere in CyberDude for 24x7.",
    },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-orange-50/30 transform skew-x-[15deg] origin-bottom-left z-0"></div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="relative group">
              <div
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 
                                hover:shadow-2xl hover:translate-y-[-4px] hover:bg-white/90
                                border border-orange-100/30 hover:border-orange-300/50
                                overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300"
                ></div>
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full 
                                    transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300"
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50/30 rounded-full 
                                    transform -translate-x-8 translate-y-8 group-hover:scale-110 transition-transform duration-300"
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-orange-600 mb-4 relative inline-block pb-2">
                    {service.title}
                    <div
                      className="absolute bottom-0 left-0 w-16 h-0.5 bg-orange-300/60 
                                            rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 
                                            transition-transform duration-300"
                    ></div>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  <div
                    className="mt-auto flex items-center text-orange-500 font-semibold 
                                        cursor-pointer group/link hover:text-orange-600"
                  >
                    <span className="transition-colors duration-300">
                      Learn More
                    </span>
                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SubServices;
