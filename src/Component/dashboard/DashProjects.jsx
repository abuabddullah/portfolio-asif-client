import { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "../../../store/api";
import AddProjectForm from "../forms/AddProjectForm";

const DashProjects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();
  const [deleteProject] = useDeleteProjectMutation();
  const [localProjects, setLocalProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      setLocalProjects(projects);
    }
  }, [projects]);

  const handleDelete = async (id) => {
    try {
      // Remove from UI first (Optimistic UI)
      setLocalProjects((prev) => prev.filter((project) => project._id !== id));

      // Send request to backend
      await deleteProject(id).unwrap();
    } catch (error) {
      console.error("Delete failed, restoring UI:", error);
      // Restore UI if the request fails
      setLocalProjects(projects);
    }
  };

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Technologies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {localProjects.map((project) => (
                  <tr key={project._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {project.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.technologies.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FiTrash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Add New Project
            </h2>
            <AddProjectForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProjects;
