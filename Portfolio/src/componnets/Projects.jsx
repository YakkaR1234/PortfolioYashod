import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS.",
    imageUrl: "https://via.placeholder.com/400x250",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "An admin dashboard with charts, product management, and orders overview.",
    imageUrl: "https://via.placeholder.com/400x250",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform using Node.js and MongoDB.",
    imageUrl: "https://via.placeholder.com/400x250",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Projects = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/project");
  };
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-100">
      {/* Responsive heading size */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 sm:h-48 md:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="flex items-center text-blue-600 font-semibold hover:underline">
                View Project
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered black button with hover effect */}
      <div className="mt-12 text-center">
        <button
          onClick={handlenavigate}
          className="inline-flex items-center bg-white text-black border border-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 mx-auto"
        >
          See All Projects
          <HiOutlineArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
