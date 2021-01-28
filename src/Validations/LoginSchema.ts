import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export type LoginSchemaInputs = yup.TypeOf<typeof LoginSchema>;
