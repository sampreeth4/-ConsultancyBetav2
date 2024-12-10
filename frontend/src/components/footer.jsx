import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white py-16 px-4 md:px-12 relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <motion.div variants={itemVariants} className="space-y-5">
          <h3 className="text-3xl font-bold tracking-tight text-orange-600 border-b-4 border-orange-500 pb-2 inline-block transition-colors duration-300">
            Smartline Systems
          </h3>
          <p className="text-gray-600 font-medium leading-relaxed">
            Transforming businesses through innovative consulting and strategic solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Home", "Services", "About Us", "Contact"].map((link) => (
              <motion.li key={link} variants={itemVariants} className="group">
                <a
                  href="#"
                  className="text-gray-700 font-medium transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-600 hover:after:w-full"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Contact Info
          </h4>
          <div className="space-y-3">
            {[
              { icon: FaMapMarkerAlt, text: "Potheri, SRM AC 1" },
              { icon: FaPhoneAlt, text: "+1 (555) 123-4567" },
              { icon: FaEnvelope, text: "info@smartlinesystems.com" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-gray-600 font-medium flex items-start"
              >
                <contact.icon className="mr-3 mt-1 text-orange-500" size={20} />
                <span>{contact.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Connect With Us
          </h4>
          <div className="flex space-x-5">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                variants={itemVariants}
                className="text-gray-600 transition-all duration-300 hover:text-orange-600 hover:scale-110"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="border-t border-gray-200 mt-12 pt-6 text-center relative z-10"
      >
        <p className="text-gray-600 font-medium">
          © 2024 Smartline Systems. All Rights Reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;