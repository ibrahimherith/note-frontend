import { ReactNode } from "react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

type FormProps<T extends FieldValues = FieldValues> = {
  onSubmitForm: ReturnType<UseFormHandleSubmit<T>>;
  children: ReactNode;
};

const Form = <T extends FieldValues = FieldValues>({
  onSubmitForm,
  children,
}: FormProps<T>) => {
  return (
    <form onSubmit={onSubmitForm} className="w-full space-y-4">
      {children}
    </form>
  );
};

export default Form;
