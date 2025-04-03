import React from "react";

type InputProps = {
  name: string;
  setName: (value: string) => void;
};

const Input = ({ name, setName }: InputProps) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1"
      />
    </>
  );
};

export default Input;
