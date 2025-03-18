import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/slices/authSlice";
import EmailInput from "../reusableInputTags/EmailInput";
import PasswordInput from "../reusableInputTags/PasswordInput";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://asif-portfolio-server.vercel.app/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      console.log(result);
      dispatch(login(result));

      navigate("/dashboard"); // Redirect to the dashboard or desired route
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
