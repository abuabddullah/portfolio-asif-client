import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../../store/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project } = useGetProjectQuery(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{project?.title}</h1>

        <div className="mb-8">
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-yellow-700">{project?.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project?.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-yellow-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={project?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Live Demo
          </a>
          <a
            href={project?.githubUrlClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-900"
          >
            Client Code
          </a>
          <a
            href={project?.githubUrlServer}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-900"
          >
            Server Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
