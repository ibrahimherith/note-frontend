import React, { useState } from "react";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import Form from "../components/Form";
import InputControl from "../components/InputControl";
import PasswordControl from "../components/PasswordControl";
import Button from "../components/Button";
import CardFooter from "../components/CardFooter";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("USER REGISTERED");
  };

  return (
    <section className="w-screen h-screen bg-blue-50">
      <div className="container mx-auto h-full flex justify-center items-center">
        <Card>
          <CardHeader
            title={"Create Account"}
            subtitle={
              "Jisajili ili uanze kupanga madokezo yako na kuboresha kazi zako."
            }
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
            <Button>Register</Button>
          </Form>
          <CardFooter
            info={"Already have an account?"}
            link={""}
            linkinfo={"Login"}
          />
        </Card>
      </div>
    </section>
  );
};

export default Signup;
