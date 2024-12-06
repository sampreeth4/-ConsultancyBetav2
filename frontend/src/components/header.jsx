import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Define animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-16 flex flex-col items-center justify-center text-center text-white px-4 ">
      <div className="container mx-auto">
        <motion.h1
          className="md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ duration: 0.8 }}
        >
          SmartLine Systems
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto leading-tight"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          People, Cloud-Based Bookkeeping and Business Management Solutions
        </motion.h2>

        <div className="flex justify-center space-x-6">
          <motion.button 
            className="bg-white text-orange-600 hover:bg-orange-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg"
            whileHover="hover"
            variants={buttonVariants}
          >
            Get Started
          </motion.button>
          
          <motion.button 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            whileHover="hover"
            variants={buttonVariants}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;