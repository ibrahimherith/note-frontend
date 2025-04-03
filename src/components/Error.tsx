import { FieldError } from "react-hook-form";

const Error = ({ err }: { err?: FieldError | undefined }) => {
  if (!err) return null;
  return <span className="text-xs text-red-500">{err.message}</span>;
};

export default Error;
