import { FaqItem } from '../components/faq-items';
import { BookA, Monitor, BarChartIcon as ChartNoAxesCombined, ChevronDown } from 'lucide-react';
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

// Reusable Component for Fade-In Animation
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

// Feature Card with Animation
const FeatureCard = ({ icon, title, description }) => (
  <FadeInWhenVisible>
    <motion.div
      className="flex flex-col items-center text-center px-6 py-8 bg-white rounded-lg shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-20 h-20 flex items-center justify-center mb-6 text-orange-500 text-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  </FadeInWhenVisible>
);

const stats = [
  { value: "9", label: "Courses" },
  { value: "3156", label: "Students" },
  { value: "25", label: "E-Book" },
  { value: "6", label: "Instructors" },
];

const tracks = [
  {
    duration: "18 hours",
    title: "Full Stack Web Developer",
    description:
      "Learn to create almost everything in technology and become an Fullstacker.",
  },
  {
    duration: "24 hours",
    title: "AWS Services",
    description:
      "Master AWS Services to build, scale, and secure cloud solutions like a pro!",
  },
  {
    duration: "24 hours",
    title: "ISTQB Fundamentals",
    description:
      "Master ISTQB Fundamentals and kickstart your journey to software testing excellence!",
  },
  {
    duration: "26 hours",
    title: "Android Development",
    description:
      "Learn to create next generation android apps using this mobile applications course.",
  },
  {
    duration: "24 hours",
    title: "Microsoft Azure Fundamentals",
    description:
      "Master Microsoft Azure and build scalable, secure cloud solutions effortlessly!",
  },
  {
    duration: "50 hours",
    title: "Data Science with Python",
    description:
      "Master Data Science with Python and transform data into actionable insights!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const buttonHover = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

function Training() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <div className="w-screen overflow-x-hidden">
      <motion.section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('/path-to-your-image.jpg')`,
          opacity: opacity,
          scale: scale,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#f97316", opacity: 0.9 }}
        ></div>
        <div className="relative z-10 flex flex-col h-screen">
          <div className="flex-1 flex flex-col justify-center items-center px-4 pt-16 pb-4">
            <motion.h1
              className="text-white text-4xl sm:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Learn Technology From Anywhere
            </motion.h1>
            <motion.p
              className="text-white text-lg max-w-2xl text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Now, experience & learn the beauty of future technology in your own
              native languages
            </motion.p>
            <motion.div
              className="mt-8 cursor-pointer"
              onClick={() => {
                const statsSection = document.querySelector('#stats-section');
                statsSection.scrollIntoView({ behavior: 'smooth' });
              }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ChevronDown className="text-white w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          This Is What We Offer You
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Now, just learn the technology in Tamil, Telugu, Malayalam, Hindi &
          English languages to help you understand the technology even better.
        </p>
        {/* Underline */}
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-12"></div>
        {/* Feature Cards */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FeatureCard
              icon={<BookA className="w-20 h-20" />}
              title="Learn Native"
              description="We think education should be provided in their native languages like Tamil, Telugu, Malayalam, and Hindi."
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FeatureCard
              icon={<Monitor className="w-20 h-20" />}
              title="Learn Anywhere"
              description="Learn from our web platform and mobile apps to stay focused on learning anytime, anywhere."
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FeatureCard
              icon={<ChartNoAxesCombined className="w-20 h-20" />}
              title="Unlimited Access"
              description="Don't limit your curiosity. Get unlimited access to all our learning materials around the clock."
            />
          </motion.div>
        </motion.div>
      </section>

      <section id="stats-section" className="bg-orange-500 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
          {stats.map((stat, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-white text-5xl font-bold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                  }}
                >
                  {stat.value}
                </motion.span>
                <motion.div
                  className="w-8 h-1 bg-white mb-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                ></motion.div>
                <span className="text-white text-lg">{stat.label}</span>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* LEARNING TRACKS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Learning Tracks</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <span className="text-orange-500 font-bold text-lg mb-2">
                  {track.duration}
                </span>
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-4">{track.description}</p>
                <motion.button
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
                  whileHover={buttonHover}
                >
                  EXPLORE
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
              whileHover={buttonHover}
            >
              START YOUR FREE TRIAL
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-white text-orange-500 font-semibold border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
              whileHover={buttonHover}
            >
              EXPLORE MORE COURSES
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <FaqItem
              letter="A"
              question="Is the course absolutely Free?"
              answer="We think, quality education should be provided free. We upload quality materials for students who are passionate to learn new things. However, we have special meetup workshops going on, which will driven us in providing great content."
            />
            <FaqItem
              letter="B"
              question="Can i download the Video Materials?"
              answer="Yes, ofcourse! We love sharing. Our material is brought to you free and anyone can learn/distribute the materials. We glad to receive reviews of our courses."
            />
            <FaqItem
              letter="C"
              question="What Languages in these courses?"
              answer="We currently, decided to teach technology in Tamil, Telugu first. However, we can expect courses in Malayalam, Kannada & Hindi Languages as well."
            />
            <FaqItem
              letter="D"
              question="Available for Meetup Workshop?"
              answer="Yes, We love to teach students and help them innovating their ideas and guiding them reach high goals. We love to do that, "
              contactLink="contact us anytime"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Training;
