import { ReactNode } from "react";

type InputControlProps = {
  name?: string;
  children: ReactNode;
};

const InputControl = ({ name, children }: InputControlProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm capitalize font-semibold"
      >
        {name}
      </label>
      {children}
    </div>
  );
};

export default InputControl;
