type InputProps = {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
};

const Input = ({ type, name, id, placeholder }: InputProps) => {
  return <input type={type} name={name} id={id} placeholder={placeholder} />;
};

export default Input;
