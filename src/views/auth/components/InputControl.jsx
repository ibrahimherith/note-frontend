import React from "react";

const InputControl = ({ name, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm capitalize font-semibold"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 shadow-sm bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg"
      />
    </div>
  );
};

export default InputControl;
