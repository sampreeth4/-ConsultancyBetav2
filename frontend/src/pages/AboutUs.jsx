"use client"

import React from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Intersngrid from '../components/cards'

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const CoreValue = ({ icon: Icon, title, description }) => {
  return (
    <FadeInWhenVisible>
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
        >
          <Icon className="w-12 h-12 text-orange-500 mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[500px] bg-orange-300 text-white overflow-hidden w-screen"
        style={{ opacity, scale }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Smartline Systems</h1>
            <p className="text-xl md:text-2xl">
              Innovating the future of technology solutions for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-20 w-screen bg-orange-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Who We Are
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Smartline Systems Pvt. Ltd. is an innovative tech startup at the forefront of Cloud Computing and Artificial Intelligence (AI), dedicated to delivering cutting-edge solutions that empower businesses to achieve unparalleled success in today's competitive landscape. With a deep commitment to excellence, Smartline Systems stands as a beacon of professionalism and expertise across all functions. <br /> <br />

Founded by a team of passionate tech enthusiasts, the company initially focused on product development and quickly evolved into a dynamic force in the tech industry. Smartline Systems offers a unique platform for career growth, fostering a customer-centric and employee-focused environment that equips its team with the latest technological tools and resources. This nurturing atmosphere promotes a culture of passion, creativity, and dedication.
<br /> <br />
In addition to its core offerings, Smartline Systems specializes in providing comprehensive training and consulting services, ensuring both employees and clients are equipped with the knowledge and skills to navigate the ever-evolving technological landscape. Our unwavering commitment to excellence drives us to continually push boundaries and deliver innovative solutions that meet the evolving needs of our customers.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 w-screen bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CoreValue 
              icon={Lightbulb}
              title="Innovation"
              description="We constantly push boundaries to create groundbreaking solutions."
            />
            <CoreValue 
              icon={Users}
              title="Collaboration"
              description="We believe in the power of teamwork and diverse perspectives."
            />
            <CoreValue 
              icon={Target}
              title="Excellence"
              description="We strive for the highest quality in everything we do."
            />
            <CoreValue 
              icon={Zap}
              title="Agility"
              description="We adapt quickly to change and embrace new challenges."
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 w-screen bg-orange-200">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Approach
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Discover",
              description: "We start by understanding your unique challenges and goals through in-depth analysis and consultation.",
            }, {
              title: "Design",
              description: "Our team crafts tailored solutions that align with your business objectives and industry best practices.",
            }, {
              title: "Deliver",
              description: "We implement solutions efficiently and effectively, ensuring seamless integration and adoption.",
            }].map((step, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
          <FadeInWhenVisible>
            <div className="mt-12 text-center">
              <motion.a 
                href="#contact" 
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn more about our process
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
      <Intersngrid />
    </div>
  );
}
