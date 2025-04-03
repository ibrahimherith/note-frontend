import React, { useState } from "react";
import CardHeader from "../components/CardHeader";
import Form from "../components/Form";
import CardFooter from "../components/CardFooter";
import Card from "../components/Card";
import InputControl from "../components/InputControl";
import PasswordControl from "../components/PasswordControl";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen bg-blue-50">
      <div className="container mx-auto h-full flex justify-center items-center">
        <Card>
          <CardHeader
            title={"Welcome to Note"}
            subtitle={"Login to continue"}
          />
          <Form onSubmitForm={handleSubmit}>
            <InputControl
              name={"email"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"email@example.com"}
            />
            <PasswordControl
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</Button>
          </Form>
          <CardFooter
            info={"You dont have an account?"}
            link={""}
            linkinfo={"Sign up"}
          />
        </Card>
      </div>
    </div>
  );
};

export default Login;
