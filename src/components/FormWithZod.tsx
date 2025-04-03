import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod schema
const userSchema = z.object({
  name: z.string().min(3, "Name must be at least three characters"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "You must be at least 18 years old"),
  password: z.string().min(8, "password must be at least 8 characters"),
});

type UserFormData = z.infer<typeof userSchema>;

const FormWithZod: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userSchema) });

  const onSubmit = (data: UserFormData) => {
    console.log(data);
    alert("User registered succesfully");
  };

  return (
    <div>
      <h2>USER REGISTRATION</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          {...register("name")}
          placeholder="Your name..."
          className="border rounded p-1"
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}

        <input
          type="email"
          {...register("email")}
          placeholder="Your email..."
          className="border rounded p-1"
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}

        <input
          type="number"
          {...register("age", { valueAsNumber: true })}
          placeholder="Your age..."
          className="border rounded p-1"
        />
        {errors.age && (
          <span className="text-xs text-red-500">{errors.age.message}</span>
        )}

        <input
          type="password"
          {...register("password")}
          placeholder="Your password..."
          className="border rounded p-1"
        />
        {errors.password && (
          <span className="text-xs text-red-500">
            {errors.password.message}
          </span>
        )}

        <button type="submit" className="block px-4 py-2 bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithZod;
