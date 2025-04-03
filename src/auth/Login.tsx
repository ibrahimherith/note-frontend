import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../Schema/loginSchema";

type UserLoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: UserLoginData) => {
    console.log(data);
    alert("Logged in succesfully");
    navigate("/home");
  };
  return (
    <div className="w-96 p-8 space-y-4 bg-yellow-50">
      <h2>Login Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <label htmlFor="">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-1 border rounded"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </label>
        <label htmlFor="">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-1 border rounded"
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </label>
        <button type="submit" className="block px-4 py-2 bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
