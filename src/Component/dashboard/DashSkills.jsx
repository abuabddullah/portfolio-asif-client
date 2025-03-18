import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  useDeleteSkillMutation,
  useGetAllSkillsQuery
} from "../../../store/api";
import AddSkillForm from "../forms/AddSkillForm";

const DashSkills = () => {
  const navigate = useNavigate()
  const { data: skills, isLoading } = useGetAllSkillsQuery();
  const [deleteSkill] = useDeleteSkillMutation();
  const [localSkills, setLocalSkills] = useState([]);

  useEffect(() => {
    if (skills) {
      setLocalSkills(skills);
    }
  }, [skills]);

  const handleDelete = async (id) => {
    try {
      // Remove from UI first (Optimistic UI)
      setLocalSkills((prev) => prev.filter((skill) => skill._id !== id));

      // Send request to backend
      await deleteSkill(id).unwrap();
    } catch (error) {
      console.error("Delete failed, restoring UI:", error);
      // Restore UI if the request fails
      setLocalSkills(skills);
    }
  };

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Skills</h1>

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
                {localSkills.map((skill) => (
                  <tr key={skill._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {skill.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => navigate(`/dashboard/skills-update/${skill?._id}`)}
                        className="text-green-600 hover:text-green-900  mx-2"
                      >
                        <FaPencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(skill._id)}
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
            <AddSkillForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSkills;
