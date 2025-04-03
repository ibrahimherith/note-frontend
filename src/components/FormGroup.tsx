import React from "react";

type FormGroupProps = {
  label: string;
  children: React.ReactNode;
};

const FormGroup = ({ label, children }: FormGroupProps) => {
  return (
    <div>
      <p>{label}</p>
      {children}
    </div>
  );
};

export default FormGroup;
