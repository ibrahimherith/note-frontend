import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(`Your name is: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-blue-50">
      <div className="space-x-2">
        <label htmlFor="">Name</label>
        <Input name={name} setName={setName} />
      </div>

      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: 8,
        }}
      >
        Click Me!
      </Button>
    </form>
  );
};

export default Form;
