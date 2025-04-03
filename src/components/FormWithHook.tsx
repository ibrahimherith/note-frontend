import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormWithHook = () => {
  const [succesMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("User registered succesfully");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {succesMsg && <span className="text-sm text-green-500">{succesMsg}</span>}
      <div className="form-control">
        <label htmlFor="">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="border p-1 ml-2"
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            },
          })}
          className="border p-1 ml-2"
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              checkLength: (value) => value.length >= 6,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                  value
                ),
            },
            // minLength: {
            //   value: 8,
            //   message: " Password should be at least 8 characters",
            // },
          })}
          className="border p-1 ml-2"
        />
        {errors.password?.type === "required" && (
          <span className="text-xs text-red-500">Password is required</span>
        )}
        {errors.password?.type === "checkLength" && (
          <span className="text-xs text-red-500">
            Password should be at-least 6 characters
          </span>
        )}
        {errors.password?.type === "matchPattern" && (
          <span className="text-xs text-red-500">
            Password should contain at least one uppercase letter, lowcase
            letter, digit, and special symbol
          </span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithHook;
