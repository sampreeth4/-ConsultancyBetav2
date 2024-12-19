import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteCarousel = ({ 
  quotes = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      role: "Apple Co-Founder"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      role: "British Prime Minister"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      role: "First Lady of the United States"
    }
  ],
  autoplayInterval = 5000,
  pauseOnHover = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);


  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % quotes.length
        );
      }, autoplayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isHovered, quotes, autoplayInterval]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true);
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false);
    }
  };


  const nextQuote = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % quotes.length
    );
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className={`
        relative w-full h-[500px] flex items-center justify-center 
        bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-400 
        overflow-hidden select-none
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-[-15deg] origin-top-right"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-black/5 transform skew-x-[15deg] origin-bottom-left"></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="
            max-w-3xl mx-auto text-center px-8 
            text-white relative z-10
          "
        >
          <blockquote className="text-2xl md:text-4xl font-bold italic mb-6">
            "{quotes[currentIndex].text}"
          </blockquote>
          
          <div className="mt-4">
            <p className="text-xl font-semibold">
              {quotes[currentIndex].author}
            </p>
            <p className="text-sm opacity-80">
              {quotes[currentIndex].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>


      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button 
          onClick={prevQuote}
          className="
            text-white bg-black/30 rounded-full p-2 
            hover:bg-black/50 transition-all
          "
        >
          ←
        </button>
        <button 
          onClick={nextQuote}
          className="
            text-white bg-black/30 rounded-full p-2 
            hover:bg-black/50 transition-all
          "
        >
          →
        </button>
      </div>

 
      <div className="absolute bottom-8 flex space-x-2">
        {quotes.map((_, index) => (
          <div 
            key={index} 
            className={`
              w-3 h-3 rounded-full 
              ${index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;