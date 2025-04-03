import { useForm } from "react-hook-form";
import FormCheck from "./FormCheck";
import Error from "./Error";
import FormGroup from "./FormGroup";
import FormRadio from "./FormRadio";

const FormOther = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* radio btn and checkboxes */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Select your gender(Radio input)">
          <FormRadio
            label="male"
            value="male"
            {...register("gender", {
              required: "Please select your gender",
            })}
          />
          <FormRadio label="female" value="female" {...register("gender")} />
          {/* {errors.gender && <Error err={errors.gender} />} */}
        </FormGroup>
        <FormGroup label="Select your skills(Checkbox input)">
          <FormCheck
            label="ReactJS"
            value="reactjs"
            {...register("skills", {
              validate: (value) =>
                value?.length ? true : "Please select at least one skill",
            })}
          />
          <FormCheck label="NextJS" value="nextjs" {...register("skills")} />
          <FormCheck label="Flutter" value="flutter" {...register("skills")} />
          {/* {errors.skills && <Error err={errors.skills} />} */}
        </FormGroup>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormOther;
