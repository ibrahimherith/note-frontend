const Form = ({ onSubmitForm, children }) => {
  return (
    <form onSubmit={onSubmitForm} className="w-full space-y-4">
      {children}
    </form>
  );
};

export default Form;
