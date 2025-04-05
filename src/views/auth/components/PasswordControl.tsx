import React from "react";
import { Eye } from "lucide-react";

type PasswordControlProps = {
  name: string;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordControl = ({ name, value, onChange }: PasswordControlProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm capitalize font-semibold"
      >
        {name}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer">
          <Eye />
        </div>
        <input
          type="password"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 shadow-sm bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg"
        />
      </div>
    </div>
  );
};

export default PasswordControl;
