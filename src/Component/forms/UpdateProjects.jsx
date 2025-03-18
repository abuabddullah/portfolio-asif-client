import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from "../../../store/api";
import SelectInput from "../reusableInputTags/SelectInput";
import TextInput from "../reusableInputTags/TextInput";
import TextareaInput from "../reusableInputTags/TextareaInput";

const UpdateProjects = () => {
  const { id } = useParams();
  const { data: project } = useGetProjectQuery(id);

  const categoryOptions = [
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "backend", label: "Backend" },
  ];

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      technologies: "",
      category: "",
      liveUrl: "",
      image: "",
      githubUrlClient: "",
      githubUrlServer: "",
    },
  });

  // Update form values when project data is fetched
  useEffect(() => {
    if (project) {
      reset({
        title: project.title || "",
        description: project.description || "",
        technologies: project.technologies || "",
        category: project.category || "",
        liveUrl: project.liveUrl || "",
        image: project.image || "",
        githubUrlClient: project.githubUrlClient || "",
        githubUrlServer: project.githubUrlServer || "",
      });
    }
  }, [project, reset]);

  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  const onSubmit = async (data) => {
    data.technologies = data.technologies.join(",");
    try {
      const response = await updateProject({ id, ...data }).unwrap();
      console.log("🚀 ~ onSubmit ~ response:", response);
      reset();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">Update Project</h2>

      <TextInput
        name="title"
        control={control}
        label="Project Title"
        placeholder="Enter project title"
      />
      <TextareaInput
        name="description"
        control={control}
        label="Project Description"
        placeholder="Enter project description"
      />
      <TextInput
        name="technologies"
        control={control}
        label="Technologies"
        placeholder="Comma-separated (React, Node.js)"
      />
      <SelectInput
        name="category"
        control={control}
        label="Project Category"
        options={categoryOptions}
      />
      <TextInput
        name="liveUrl"
        control={control}
        label="Live URL"
        placeholder="https://example.com"
      />
      <TextInput
        name="image"
        control={control}
        label="Thumbnail"
        placeholder="https://example.com"
      />
      <TextInput
        name="githubUrlClient"
        control={control}
        label="GitHub URL (Client)"
        placeholder="https://github.com/user/client"
      />
      <TextInput
        name="githubUrlServer"
        control={control}
        label="GitHub URL (Server)"
        placeholder="https://github.com/user/server"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Updating..." : "Update Project"}
      </button>
    </form>
  );
};

export default UpdateProjects;
