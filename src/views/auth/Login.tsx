import CardHeader from "./components/CardHeader";
import Form from "./components/Form";
import CardFooter from "./components/CardFooter";
import Card from "./components/Card";
import InputControl from "./components/InputControl";
import Button from "./components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema from "../../Schema/LoginSchema";
import Input from "./components/Input";

type LoginForm = z.infer<typeof LoginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(LoginSchema) });

  return (
    <div className="w-screen h-screen bg-blue-50">
      <div className="container mx-auto h-full flex justify-center items-center">
        <Card>
          <CardHeader
            title={"Welcome to Note"}
            subtitle={"Login to continue"}
          />
          <Form onSubmitForm={handleSubmit}>
            <InputControl name="Email">
              <Input
                type={"email"}
                {...register("email")}
                placeholder={"email@example.com"}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </InputControl>

            <InputControl name="Email">
              <Input type={"password"} {...register("password")} />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </InputControl>

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
