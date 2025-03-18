import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
    useGetSkillQuery,
    useUpdateSkillMutation, // Changed to skill mutation
} from "../../../store/api";
import NumberInput from "../reusableInputTags/NumberInput";
import SelectInput from "../reusableInputTags/SelectInput";
import TextInput from "../reusableInputTags/TextInput";
import TextareaInput from "../reusableInputTags/TextareaInput";

const UpdateSkills = () => {
  const { id } = useParams();
  const { data: skill } = useGetSkillQuery(id);

  const categoryOptions = [
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "backend", label: "Backend" },
  ];

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      proficiency: 1,
      order: 0,
      logo: "",
    },
  });

  // Update form values when skill data is fetched
  useEffect(() => {
    if (skill) {
      reset({
        name: skill.name || "",
        description: skill.description || "",
        category: skill.category || "",
        proficiency: skill.proficiency || 1,
        order: skill.order || 0,
        logo: skill.logo || "",
      });
    }
  }, [skill, reset]);

  const [updateSkill, { isLoading }] = useUpdateSkillMutation();

  const onSubmit = async (data) => {
    try {
      const response = await updateSkill({
        id,
        ...data,
        proficiency: Number(data.proficiency),
      }).unwrap();
      console.log("Skill updated:", response);
      reset();
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">Update Skill</h2>

      <TextInput
        name="name"
        control={control}
        label="Skill Name"
        placeholder="Enter skill name"
      />
      <TextareaInput
        name="description"
        control={control}
        label="Skill Description"
        placeholder="Enter skill description"
      />
      <SelectInput
        name="category"
        control={control}
        label="Skill Category"
        options={categoryOptions}
      />
      <NumberInput
        name="proficiency"
        control={control}
        label="Proficiency"
        placeholder="max 5"
      />
      <TextInput
        name="logo"
        control={control}
        label="Logo URL"
        placeholder="Enter logo URL"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Updating..." : "Update Skill"}
      </button>
    </form>
  );
};

export default UpdateSkills;
