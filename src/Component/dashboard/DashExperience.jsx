import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  useDeleteExperienceMutation,
  useGetAllExperiencesQuery
} from "../../../store/api";
import AddExperienceForm from "../forms/AddExperienceForm";

const DashExperience = () => {
  const navigate = useNavigate()
  const { data: experiences, isLoading } = useGetAllExperiencesQuery();
  const [deleteExperience] = useDeleteExperienceMutation();
  const [localExperience, setLocalExperience] = useState([]);

  useEffect(() => {
    if (experiences) {
      setLocalExperience(experiences);
    }
  }, [experiences]);

  const handleDelete = async (id) => {
    try {
      // Remove from UI first (Optimistic UI)
      setLocalExperience((prev) => prev.filter((experience) => experience._id !== id));

      // Send request to backend
      await deleteExperience(id).unwrap();
    } catch (error) {
      console.error("Delete failed, restoring UI:", error);
      // Restore UI if the request fails
      setLocalExperience(experiences);
    }
  };

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Experiences</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {localExperience.map((experience) => (
                  <tr key={experience._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {experience.company}
                      </div>
                      <div className="text-sm text-gray-500">
                        {experience.tasks[1]}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => navigate(`/dashboard/experiences-update/${experience?._id}`)}
                        className="text-green-600 hover:text-green-900  mx-2"
                      >
                        <FaPencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(experience._id)}
                        className="text-red-600 hover:text-red-900 mx-2"
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
            <AddExperienceForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashExperience;
