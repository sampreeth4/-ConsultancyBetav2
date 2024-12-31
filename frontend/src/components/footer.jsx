import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 md:px-12 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div className="space-y-5">
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold tracking-tight text-orange-600 pb-2">
              Smartline Systems
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-0 left-0 flex justify-end"
            >
              <div className="h-1 bg-red-500 w-full relative">
                <div className="absolute right-[-6px] top-[-2.5px]">
                  <div 
                    className="w-0 h-0 
                    border-l-[6px] border-l-red-500
                    border-y-[3px] border-y-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          <p className="text-gray-600 font-medium leading-relaxed">
            Transforming businesses through innovative consulting and strategic
            solutions.
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Home", "Services", "About Us", "Contact"].map((link) => (
              <li key={link} className="group">
                <a
                  href="#"
                  className="text-gray-700 font-medium transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-600 hover:after:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Contact Info
          </h4>
          <div className="space-y-3">
            {[
              { icon: FaMapMarkerAlt, text: "Reg office:10 A  Tamil nagar ,  2nd Street  M.C Road  Chennai , Tamil Nadu , India 613004" },
              { icon: FaPhoneAlt, text: "+1 (555) 123-4567" },
              { icon: FaEnvelope, text: "info@smartlinesystems.com" },
            ].map((contact, index) => (
              <div
                key={index}
                className="text-gray-600 font-medium flex items-start"
              >
                <contact.icon className="mr-3 mt-1 text-orange-500" size={20} />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="text-xl font-semibold text-orange-600 pb-2 border-b-2 border-orange-200">
            Connect With Us
          </h4>
          <div className="flex space-x-5">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 transition-all duration-300 hover:text-orange-600 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-6 text-center relative z-10">
        <p className="text-gray-600 font-medium">
          © 2024 Smartline Systems. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;