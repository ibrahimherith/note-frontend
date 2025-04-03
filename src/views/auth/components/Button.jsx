import React from "react";

const Button = ({ children }) => {
  return (
    <button className="block w-full p-2 bg-blue-600 text-sm text-white font-semibold rounded-lg">
      {children}
    </button>
  );
};

export default Button;
