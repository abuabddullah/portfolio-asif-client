import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/slices/authSlice.js";
import EmailInput from "../reusableInputTags/EmailInput.jsx";
import PasswordInput from "../reusableInputTags/PasswordInput.jsx";
import TextInput from "../reusableInputTags/TextInput";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://asif-portfolio-server.vercel.app/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      console.log("🚀 ~ onSubmit ~ result:", result);

      dispatch(login(result));
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name Input */}
      <TextInput
        name="name"
        control={control}
        label="Full Name"
        placeholder="Enter your full name"
        error={errors.name?.message}
      />

      {/* Email Input */}
      <EmailInput
        name="email"
        control={control}
        label="Email address"
        placeholder="Enter your email"
        error={errors.email?.message}
      />

      {/* Password Input */}
      <PasswordInput
        name="password"
        control={control}
        label="Password"
        error={errors.password?.message}
      />

      {/* Confirm Password Input */}
      <PasswordInput
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        error={errors.confirmPassword?.message}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
