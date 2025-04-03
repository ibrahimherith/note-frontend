interface FormCheckProps {
  label: string;
  name?: string;
  id?: string;
  value: string;
}

const FormCheck = ({ label, name, id, value }: FormCheckProps) => {
  return (
    <div className="form-control flex flex-row-reverse items-center justify-end gap-2 bg-amber-100">
      <label htmlFor="">{label}</label>
      <input type="checkbox" name={name} id={id} value={value} />
    </div>
  );
};

export default FormCheck;
