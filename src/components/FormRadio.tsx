interface FormRadioProps {
  id?: string;
  name?: string;
  value: string;
  label: string;
}

const FormRadio = ({ id, name, value, label }: FormRadioProps) => {
  return (
    <div className="form-control space-x-2">
      <label htmlFor="">{label}</label>
      <input type="radio" value={value} name={name} id={id} />
    </div>
  );
};

export default FormRadio;
