import { FunctionComponent } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, LoginSchemaInputs } from "Validations";

type LoginParams = {};
type LoginProps = RouteComponentProps<LoginParams>;

const Login: FunctionComponent<LoginProps> = () => {
  const { handleSubmit, register, errors } = useForm<LoginSchemaInputs>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginSchemaInputs) => console.log(data);

  return (
    <div id="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input id="name" type="text" name="name" ref={register} />
        {errors.username && <div>{errors.username.message}</div>}

        <input id="pass" type="password" name="pass" ref={register} />
        {errors.password && <h3>{errors.password.message}</h3>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
