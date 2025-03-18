import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useGetExperienceQuery,
  useUpdateExperienceMutation,
} from "../../../store/api";
import TextInput from "../reusableInputTags/TextInput";
import TextareaInput from "../reusableInputTags/TextareaInput";

const UpdateExperiences = () => {
  const { id } = useParams();
  const { data: experience } = useGetExperienceQuery(id);
  console.log("🚀 ~ UpdateExperiences ~ experience:", experience)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      company: "",
      role: "",
      duration: "",
      shortDuration: "",
      image: "",
      tasks: [""],
    },
  });

  // Update form values when experience data is fetched
  useEffect(() => {
    if (experience) {
      reset({
        company: experience.company || "",
        role: experience.role || "",
        duration: experience.duration || "",
        shortDuration: experience.shortDuration || "",
        image: experience.image || "",
        tasks: experience?.tasks?.join("\n") || [""],
      });
    }
  }, [experience, reset]);

  const [updateExperience, { isLoading }] = useUpdateExperienceMutation();

  const onSubmit = async (data) => {
    try {
      const response = await updateExperience({
        id,
        ...data,
        tasks : data.tasks
        .split("\n")
        .filter((task) => task.trim())
        .join(",")
      }).unwrap();
      console.log("Experience updated:", response);
      reset();
    } catch (error) {
      console.error("Error updating experience:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">Update Experience</h2>

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
        placeholder="Enter role"
      />
      <TextInput
        name="duration"
        control={control}
        label="Duration"
        placeholder="Enter duration"
      />
      <TextInput
        name="shortDuration"
        control={control}
        label="Short Duration"
        placeholder="Enter short duration"
      />
      <TextInput
        name="image"
        control={control}
        label="Company Logo URL"
        placeholder="Enter logo URL"
      />
      <TextareaInput
        name={`tasks`}
        control={control}
        label={`Tasks`}
        placeholder="Enter task description"
      />
      {/* {[0, 1, 2, 3].map((index) => (
        <TextareaInput
          key={index}
          name={`tasks.${index}`}
          control={control}
          label={`Task ${index + 1}`}
          placeholder="Enter task description"
        />
      ))} */}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Updating..." : "Update Experience"}
      </button>
    </form>
  );
};

export default UpdateExperiences;
