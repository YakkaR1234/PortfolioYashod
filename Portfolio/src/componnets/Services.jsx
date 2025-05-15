import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Placeholder services data with SVG icons
  const services = [
    {
      title: 'Web Development',
      description: 'Crafting responsive, high-performance websites with modern frameworks and clean code.',
      icon: (
        <svg className="w-12 h-12 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile apps with seamless UX and robust functionality.',
      icon: (
        <svg className="w-12 h-12 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive, visually stunning interfaces that prioritize user experience.',
      icon: (
        <svg className="w-12 h-12 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
      ),
    },
    {
      title: 'Backend Development',
      description: 'Developing secure, scalable server-side solutions with APIs and databases.',
      icon: (
        <svg className="w-12 h-12 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      ),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(26, 60, 52, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      y: -5,
      rotate: 5,
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#1a3c34 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="w-full px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-sans font-bold text-black text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md border border-green-950/20 rounded-xl p-6 text-center shadow-lg hover:border-green-950/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-sans font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;