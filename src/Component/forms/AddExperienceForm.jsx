import { useForm } from "react-hook-form";
import { useAddExperienceMutation } from "../../../store/api"; // Update this import
import TextInput from "../reusableInputTags/TextInput";
import TextareaInput from "../reusableInputTags/TextareaInput";

const AddExperienceForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const [addExperience, { isLoading }] = useAddExperienceMutation();

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    let tasks = data.tasks
      .split("\n")
      .filter((task) => task.trim())
      .join(",");
    try {
      const formattedData = {
        ...data,
        tasks,
      };
      const res = await addExperience(formattedData).unwrap();
      console.log("🚀 ~ onSubmit ~ res:", res)
      if (res.success == true) {
        reset();
      }
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Add New Experience
      </h2>

      <TextInput
        name="company"
        control={control}
        label="Company Name"
        placeholder="Enter company name"
      />
      <TextInput
        name="role"
        control={control}
        label="Role"
        placeholder="Enter your role"
      />
      <TextInput
        name="duration"
        control={control}
        label="Duration"
        placeholder="e.g., 2 years"
      />
      <TextInput
        name="shortDuration"
        control={control}
        label="Short Duration"
        placeholder="e.g., Jan 24 - Jan 25"
      />
      <TextInput
        name="image"
        control={control}
        label="Company Logo"
        placeholder="https://example.com/image.jpg"
      />
      <TextareaInput
        name="tasks"
        control={control}
        label="Tasks (One per line)"
        placeholder="Enter tasks (one per line)"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Adding..." : "Add Experience"}
      </button>
    </form>
  );
};

export default AddExperienceForm;
