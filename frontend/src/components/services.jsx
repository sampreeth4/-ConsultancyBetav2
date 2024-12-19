import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCloudUploadAlt,
  FaHandshake,
} from "react-icons/fa";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const services = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
      title: "Training",
      description: "Comprehensive skill development programs.",
      bgColor: "bg-white",
      textColor: "text-orange-500",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: "Development",
      description: "Custom software solutions and innovations.",
      bgColor: "bg-white",
      textColor: "text-blue-500",
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Consulting",
      description: "Strategic tech guidance for businesses.",
      bgColor: "bg-white",
      textColor: "text-green-500",
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-purple-500" />,
      title: "Outsourcing",
      description: "Efficient outsourcing solutions.",
      bgColor: "bg-white",
      textColor: "text-purple-500",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-400 py-12 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-[-15deg] origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-black/5 transform skew-x-[15deg] origin-bottom-left"></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl p-4 shadow-lg hover:shadow-xl `}
            >
              <div className="flex flex-col items-center text-center">
                {React.cloneElement(service.icon, {
                  className: `text-4xl ${service.textColor}`,
                })}
                <h3
                  className={`text-xl font-bold ${service.textColor} mt-3 mb-2`}
                >
                  {service.title}
                </h3>
                <p className={`${service.textColor} text-opacity-80 text-sm`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
