import React,{useEffect} from 'react';
import ProjectCard from '../../componnets/Project/ProjectCard';

const Project = () => {
  // Sample project data with six examples
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A sleek, responsive portfolio showcasing web development projects with a minimalist design.',
      githubLink: 'https://github.com/username/portfolio',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Portfolio',
    },
    {
      title: 'Task Manager',
      description: 'A full-stack task management app with user authentication and real-time updates.',
      githubLink: 'https://github.com/username/task-manager',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Task+Manager',
    },
    {
      title: 'E-Commerce Store',
      description: 'An online store with cart functionality, payment integration, and product filtering.',
      githubLink: 'https://github.com/username/ecommerce',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=E-Commerce',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat app built with WebSocket for seamless communication.',
      githubLink: 'https://github.com/username/chat-app',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Chat+App',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting dashboard with API integration and dynamic visualizations.',
      githubLink: 'https://github.com/username/weather-dashboard',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Weather',
    },
    {
      title: 'Blog Platform',
      description: 'A customizable blog platform with markdown support and user comments.',
      githubLink: 'https://github.com/username/blog-platform',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Blog',
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">My Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => alert('Load more projects (implement logic here)')}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;