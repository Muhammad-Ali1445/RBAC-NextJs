"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  type FormData = {
    name: string;
    email: string;
    role: string;
    password: string;
  };

  const onSubmit = (data: FormData) => {
    console.log("Form is Submitted", data);
    localStorage.setItem("Userdata", JSON.stringify(data));
    toast.success("Form Submitted Successfully");

    if (data?.role == "student") {
      router.push("/student/dashboard");
    } else if (data?.role == "teacher") {
      router.push("/teacher/dashboard");
    } else {
      router.push("/unauthorized");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 bg-gray-300 pb-10 shadow-emerald-600">
      <h1 className="font-bold text-4xl mt-10">
        Log <span className="text-amber-400">In</span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mt-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("name", {
              required: "name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email Address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Role
          </label>
          <select
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("role", {
              required: "Please select a role",
              validate: (value) => value !== "" || "Please select a valid role",
            })}
            defaultValue="" //
          >
            <option value="" disabled>
              Choose a Role
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {errors.role && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.role.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password atleast 8 characters long ",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="group bg-blue-500 text-white px-30 py-2 rounded-2xl mt-3 flex items-center justify-center gap-2 hover:bg-amber-600 transition-all duration-300 ease-in-out"
          >
            <span>Login</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;
