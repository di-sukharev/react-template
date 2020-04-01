import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "formik";
import { Button, TextField } from "react95/dist/prod";
import img from "../../../../img/something.jpg";
import { REQUEST_STATUS } from "../../../api/constants";
import { AuthForm } from "../../../components/AuthForm";
import margins from "../../../components/common/margins.module.css";
import { loginThunk, loginStatusSelector } from "../slice";

export function Login() {
  const dispatch = useDispatch();

  const status = useSelector(loginStatusSelector);
  const onSubmit = values => dispatch(loginThunk(values));

  return (
    <AuthForm label="LOG IN" img={img} initialValues={{ login: "", pass: "" }} onSubmit={onSubmit}>
      Some beautiful heading
      <Field className={margins.mt} name="login" type="text" placeholder="Email" as={TextField} />
      <Field
        className={margins.mt}
        name="pass"
        type="password"
        placeholder="Password"
        as={TextField}
      />
      <Button
        disabled={status === REQUEST_STATUS.PROCESS}
        type="submit"
        className={margins.mt}
        uppercase
        size="lg"
      >
        Log in
      </Button>
    </AuthForm>
  );
}
