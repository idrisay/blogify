import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

let validateSchema = yup.object().shape({
  email: yup.string().required("No email provided.").email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password should contain letters, numbers and speacial characters."),
});

const Login = () => {
  // const handleValidate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if (values.password.length < 8) {
  //     errors.password = "Password should be minimum 8 chars!";
  //   }
  //   return errors;
  // };
  const handleSubmit = (values, actions) => {
    console.log("🚀 ~ file: Login.jsx:15 ~ handleSubmit ~ actions", actions);
    console.log("🚀 ~ file: Login.jsx:15 ~ handleSubmit ~ values", values);
  };
  return (
    <div>
      <h1>Login</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        // validate={handleValidate}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center w-full">
            <Field
              className="m-2 border-2 border-grey-200 p-2 w-60"
              placeholder="email"
              type="email"
              name="email"
            />
            <ErrorMessage
              className="text-red-500"
              name="email"
              component="div"
            />
            <Field
              className="m-2 border-2 border-grey-200 p-2 w-60"
              placeholder="***"
              type="password"
              name="password"
            />
            <ErrorMessage
              className="text-red-500"
              name="password"
              component="div"
            />
            <button
              className="border-green-400 border-2 m-2 p-2 w-60"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
