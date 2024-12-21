"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Code2, Trophy, ArrowRight } from 'lucide-react'
import workenv from '../assets/workenv.jpg'

// Custom Button component
const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyle = "px-4 py-2 rounded-full font-medium transition-colors duration-300"
  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
  }
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Card component
const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

// Custom Badge component
const Badge = ({ children, className, variant = "default", ...props }) => {
  const baseStyle = "px-2 py-1 rounded-full text-sm font-medium"
  const variants = {
    default: "bg-orange-100 text-orange-800",
    secondary: "bg-orange-50 text-orange-700",
    outline: "border border-orange-300 text-orange-600"
  }
  
  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (inView) {
      const finalValue = parseInt(value)
      const stepTime = Math.abs(Math.floor(duration * 1000 / finalValue))
      
      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += 1
        setCount(currentCount)
        
        if (currentCount >= finalValue) {
          clearInterval(timer)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}+
    </span>
  )
}

// Main component
export default function CareersPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stats = [
    { icon: Users, label: "Team Members", value: "100" },
    { icon: Code2, label: "Projects Delivered", value: "500" },
    { icon: Trophy, label: "Awards Won", value: "25" }
  ]

  const employeeBenefits = [
    ["Stress Free Environment", "Free Interval Break", "Agile Methodology", "MVC Pattern Following team"],
    ["Responsive Collaboration", "Creative Ideas values here", "Snacks when we get bored", "Games when we get bored"]
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]" ref={containerRef}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6">
              Join Our Team
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 mb-8">
              Be part of a team that's shaping the future of technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="text-lg px-8 py-4">
                View Positions
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

    {/* Stats Section */}
    <motion.div 
    className="py-20 bg-orange-50"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
    <div className="w-screen">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
            <motion.div
                key={index}
                variants={fadeUpVariants}
            >
                <Card className="p-8 text-center">
                <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
                </Card>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
    </motion.div>

      {/* Working Environment */}
      <motion.div 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Working Environment</h2>
              <p className="text-gray-600">
                We value passion and innovation mind here at Smartline Systems. We hope we have an perfect environment
                infrastructure to work our projects. Work out your passion with us.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What our employees say?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {employeeBenefits.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-4">
                      {column.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#positions" 
                className="inline-block text-orange-500 hover:text-orange-600 font-medium"
              >
                Interested in our job positions?
              </a>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={workenv}
                alt="Working Environment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Open Positions */}
      <motion.div 
        className="py-20 bg-orange-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeUpVariants}
            className="text-4xl font-bold text-center mb-12"
          >
            Open Positions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Full Stack Developer",
                type: "Full-time",
                experience: "3-5 years",
                skills: ["React", "Node.js", "MongoDB", "AWS"],
              },
              {
                title: "Backend Developer",
                type: "Full-time",
                experience: "2-4 years",
                skills: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <Button>Apply Now</Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}