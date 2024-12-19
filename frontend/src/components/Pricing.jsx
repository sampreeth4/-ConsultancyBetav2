import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const pricingOptions = [
    {
      title: "Designs",
      price: 5999,
      features: [
        "Professional Logo Design",
        "Complete Brand Identity",
        "3 Marketing Collaterals",
        "UI/UX Concept Mockups",
        "Social Media Graphics Pack",
      ],
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      accentColor: "bg-orange-100 hover:bg-orange-200",
      icon: "🎨",
    },
    {
      title: "Web Development",
      price: 29999,
      features: [
        "Fully Responsive Website",
        "Custom Frontend Development",
        "Backend System Integration",
        "Performance Optimization",
        "Advanced SEO Configuration",
      ],
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      accentColor: "bg-blue-100 hover:bg-blue-200",
      icon: "💻",
    },
    {
      title: "E-commerce Solution",
      price: 49999,
      features: [
        "Complete Online Store Setup",
        "Multiple Payment Gateways",
        "Inventory Management System",
        "Product Catalog Management",
        "Mobile-Responsive Design",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      accentColor: "bg-green-100 hover:bg-green-200",
      icon: "🛒",
    },
    {
      title: "Custom Enterprise",
      price: 99999,
      features: [
        "Comprehensive Consultation",
        "Fully Tailored Solution",
        "Unlimited Revisions",
        "24/7 Technical Support",
        "Scalable Enterprise Architecture",
      ],
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      accentColor: "bg-purple-100 hover:bg-purple-200",
      icon: "🚀",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-400 overflow-hidden relative py-16 px-4"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-[-15deg] origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-black/5 transform skew-x-[15deg] origin-bottom-left"></div>
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-16 
        bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Service Packages
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className={`${option.bgColor} ${option.textColor}
              rounded-3xl p-6 transform transition-all 
              duration-300 shadow-xl border border-gray-100 
              overflow-hidden relative flex flex-col
              hover:scale-105 hover:shadow-2xl`}
            >
              <div className="text-6xl mb-4 opacity-70 text-center">
                {option.icon}
              </div>

              <h3
                className={`text-2xl font-bold mb-4 text-center 
              tracking-wider uppercase ${option.textColor}`}
              >
                {option.title}
              </h3>

              <div className="text-center mb-6">
                <span className="text-4xl font-extrabold">
                  ₹{option.price.toLocaleString()}
                </span>
                <p className="text-sm opacity-70">One-time Project Cost</p>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center space-x-3 
                    text-sm opacity-90"
                  >
                    <svg
                      className="w-5 h-5 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 ${option.accentColor}
                rounded-full transition-all duration-300 
                font-bold uppercase tracking-wider mt-auto`}
              >
                Choose Package
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
