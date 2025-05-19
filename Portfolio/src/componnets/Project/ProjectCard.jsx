import React from 'react';

const ProjectCard = ({ title, description, githubLink, image }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
      <img 
        src={image} 
        alt={`${title} project`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;