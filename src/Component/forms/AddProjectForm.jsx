import { useForm } from "react-hook-form";
import { useAddProjectMutation } from "../../../store/api";
import TextareaInput from "../reusableInputTags/TextareaInput";
import TextInput from "../reusableInputTags/TextInput";
import SelectInput from "../reusableInputTags/SelectInput";

const categoryOptions = [
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

const AddProjectForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const [addProject, { isLoading }] = useAddProjectMutation();

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
      };
      await addProject(formattedData).unwrap();
      reset();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">Add New Project</h2>

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
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Adding..." : "Add Project"}
      </button>
    </form>
  );
};

export default AddProjectForm;
