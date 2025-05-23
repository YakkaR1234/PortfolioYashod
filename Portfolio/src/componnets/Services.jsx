import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  // Services data with SVG icons
  const services = [
    {
      title: "API Integration & Development",
      description:
        "Creating and connecting robust APIs to enable smooth data exchange between systems and services.",
      icon: (
        <svg
          className="w-14 h-14 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 01-8 0M12 16v4m0-8V4"
          ></path>
        </svg>
      ),
    },
    {
      title: "CI/CD Pipeline Setup & Automation",
      description:
        "Implementing automated build, test, and deployment pipelines using popular tools like GitHub Actions, Jenkins, or GitLab CI to ensure faster and reliable software delivery.",
      icon: (
        <svg
          className="w-14 h-14 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Management & Marketing",
      description:
        "Crafting impactful strategies and engaging content to grow your brand across social platforms.",
      icon: (
        <svg
          className="w-14 h-14 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Progressive Web App (PWA) Development",
      description:
        "Build fast, reliable, and engaging PWAs that work offline and provide app-like experiences.",
      icon: (
        <svg
          className="w-14 h-14 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2v-8a2 2 0 00-2-2h-3l-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.5, 0.95],
      },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Animation variants for icons
  const iconVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.5, 0.95],
      },
    },
    hover: {
      y: [-4, 4],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Background animation for subtle gradient shift
  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative bg-gray-100 py-16 md:py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.1) 2px, transparent 2px), radial-gradient(circle at 90% 80%, rgba(0, 0, 0, 0.1) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
        variants={backgroundVariants}
        animate="animate"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
            My Services
          </h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Explore my professional services designed to transform your ideas
            into reality with cutting-edge technology and exceptional design.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200/50"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Icon with Animated Gradient Background */}
              <motion.div
                className="flex justify-center mb-6"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="p-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full">
                  {service.icon}
                </div>
              </motion.div>

              {/* Service Title */}
              <motion.h3
                className="text-lg sm:text-xl font-semibold text-black text-center mb-3"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                className="text-gray-600 text-sm sm:text-base text-center leading-relaxed"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {service.description}
              </motion.p>

              {/* Decorative Hover/Tap Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                whileTap={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
