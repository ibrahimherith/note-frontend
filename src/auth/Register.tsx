import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "../Schema/UserSchema";

type UserFormData = z.infer<typeof userSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userSchema) });

  const navigate = useNavigate();

  const onSubmit = (data: UserFormData) => {
    console.log(data);
    alert("User registered succesfully, login to continue");
    navigate("/");
  };
  return (
    <div className="w-96 p-8 space-y-4 bg-yellow-50">
      <h2>Registration Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <label htmlFor="">
          <input
            type="text"
            placeholder="First Name"
            {...register("firstname")}
            className="w-full p-1 border rounded"
          />
          {errors.firstname && (
            <span className="text-xs text-red-500">
              {errors.firstname.message}
            </span>
          )}
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder=" Last Name"
            {...register("lastname")}
            className="w-full p-1 border rounded"
          />
          {errors.lastname && (
            <span className="text-xs text-red-500">
              {errors.lastname.message}
            </span>
          )}
        </label>
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
            type="text"
            placeholder="Occupation"
            {...register("occupation")}
            className="w-full p-1 border rounded"
          />
          {errors.occupation && (
            <span className="text-xs text-red-500">
              {errors.occupation.message}
            </span>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
