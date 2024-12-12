import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaLaptopCode, 
  FaChalkboardTeacher, 
  FaCloudUploadAlt, 
  FaHandshake 
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const services = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
      title: "Training",
      description: "Comprehensive skill development programs.",
      bgColor: "bg-white",
      textColor: "text-orange-500"
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: "Development",
      description: "Custom software solutions and innovations.",
      bgColor: "bg-white",
      textColor: "text-blue-500"
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Consulting",
      description: "Strategic tech guidance for businesses.",
      bgColor: "bg-white",
      textColor: "text-green-500"
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-purple-500" />,
      title: "Outsourcing",
      description: "Efficient outsourcing solutions.",
      bgColor: "bg-white",
      textColor: "text-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="bg-gradient-to-br from-orange-300 to-orange-500 py-12"
    >
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Our Services
          </motion.h2>
          <p className="text-white  max-w-2xl mx-auto">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`${service.bgColor} rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                {React.cloneElement(service.icon, { className: `text-4xl ${service.textColor}` })}
                <h3 className={`text-xl font-bold ${service.textColor} mt-3 mb-2`}>
                  {service.title}
                </h3>
                <p className={`${service.textColor} text-opacity-80 text-sm`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;