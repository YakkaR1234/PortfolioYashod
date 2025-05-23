import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../componnets/Project/ProjectCard";
import UpButton from "../../componnets/UpButton";

//====================
import patientpulse from "../../assets/web6.webp";
//==================

const Project = () => {
  const navigate = useNavigate();

  // Sample project data with six examples
  const projects = [
    {
      title: "TransFusionWeb",
      description:
        "API Data Format Convertion with Health Monitoring & Availability Prediction Middleaware (Pending)",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      title: "Honey-bee",
      description: "E-commerice website with admin dashboard",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      title: "PatientPulse",
      description: "Patient management System with appointment booking",
      imageUrl: patientpulse,
    },
    {
      title: "NotePad- Note taking application with CRUD operations",
      description:
        "A real-time chat app built with WebSocket for seamless communication.",
      githubLink: "https://github.com/username/chat-app",
      image: "https://via.placeholder.com/400x300/000000/FFFFFF?text=Chat+App",
    },
    {
      title: "Weather cheking application",
      description:
        "A weather forecasting dashboard with API integration and dynamic visualizations.",
      githubLink: "https://github.com/username/weather-dashboard",
      image: "https://via.placeholder.com/400x300/000000/FFFFFF?text=Weather",
    },
    {
      title: "Employee performance management system",
      description:
        "Employee performance management system with analytics and reporting.",
      githubLink: "https://github.com/username/blog-platform",
      image: "https://via.placeholder.com/400x300/000000/FFFFFF?text=Blog",
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              image={project.imageUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col items-center gap-4">
          {/* More button */}
          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => alert("Load more projects (implement logic here)")}
          >
            More
          </button>
        </div>
      </div>
      <UpButton />
    </div>
  );
};

export default Project;
