'use client'

import { motion } from 'framer-motion'
import { Server, Code2, Shield, ArrowRight } from 'lucide-react'
import tech from '../assets/tech.webp'

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stats = [
    { icon: Server, number: '99.9%', label: 'Uptime Guarantee' },
    { icon: Code2, number: '24/7', label: 'Developer Support' },
    { icon: Shield, number: '100%', label: 'Data Security' }
  ]

  const benefits = [
    'Scalable Infrastructure',
    'Customizable Solutions',
    'Agile Development',
    'Cloud-Native Architecture',
    'Real-time Analytics',
    'AI-Powered Insights',
    'Seamless Integration',
    'Continuous Deployment'
  ]

  const services = [
    {
      title: 'Cloud Computing',
      description: 'Scalable and flexible cloud solutions for your business needs',
      features: ['IaaS', 'PaaS', 'SaaS', 'Hybrid Cloud']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to drive innovation and efficiency',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <motion.section 
        className="py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-orange-500 mb-6"
          {...fadeInUp}
        >
          Cutting-Edge Tech Services
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Empowering your business with innovative technology solutions
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Explore Services
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            Contact Us
          </button>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-8 shadow-lg text-center m-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Service Benefits Section */}
      <motion.section 
        className="py-16 bg-white pl-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8"
            {...fadeInUp}
          >
            Our Service Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6">
                At TechInnovate Solutions, we deliver cutting-edge technology services tailored to your business needs. 
                Our solutions are designed to drive growth, efficiency, and innovation.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why choose our services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ArrowRight className="text-orange-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-xl"
            >
              <img 
                src={tech}
                alt="Advanced technology visualization" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Offered Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-12"
            {...fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map(feature => (
                    <span 
                      key={feature}
                      className="px-3 py-1 rounded-full border border-orange-500 text-orange-500 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services



