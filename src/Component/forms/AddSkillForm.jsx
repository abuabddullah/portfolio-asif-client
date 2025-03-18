import { useForm } from "react-hook-form";
import { useAddSkillMutation } from "../../../store/api";
import NumberInput from "../reusableInputTags/NumberInput";
import SelectInput from "../reusableInputTags/SelectInput";
import TextareaInput from "../reusableInputTags/TextareaInput";
import TextInput from "../reusableInputTags/TextInput";

const categoryOptions = [
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

const AddSkillForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const [addSkill, { isLoading }] = useAddSkillMutation();

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        proficiency: Number(data.proficiency),
      };
      await addSkill(formattedData).unwrap();
      reset();
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold text-gray-900">Add New Skill</h2>

      <TextInput
        name="name"
        control={control}
        label="Skill Title"
        placeholder="Enter Skill title"
      />
      <NumberInput
        name="proficiency"
        control={control}
        label="Proficiency"
        placeholder="max 5"
      />
      <TextareaInput
        name="description"
        control={control}
        label="Skill Description"
        placeholder="Enter Skill description"
      />
      <SelectInput
        name="category"
        control={control}
        label="Skill Category"
        options={categoryOptions}
      />
      <TextInput
        name="logo"
        control={control}
        label="Thumbnail"
        placeholder="https://example.com"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        {isLoading ? "Adding..." : "Add Skill"}
      </button>
    </form>
  );
};

export default AddSkillForm;
