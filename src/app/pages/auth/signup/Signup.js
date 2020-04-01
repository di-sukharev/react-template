import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "formik";
import { TextField, Button } from "react95/dist/prod";
import img from "../../../../img/tunnel.jpg";
import { signupThunk, signupStatusSelector } from "../slice";
import { REQUEST_STATUS } from "../../../api/constants";
import { AuthForm } from "../../../components/AuthForm";
import margins from "../../../components/common/margins.module.css";

export function Signup() {
  const dispatch = useDispatch();

  const status = useSelector(signupStatusSelector);
  const onSubmit = values => dispatch(signupThunk(values));

  return (
    <AuthForm
      label="SIGN UP"
      img={img}
      initialValues={{ name: "", email: "", phone: "", pass: "" }}
      onSubmit={onSubmit}
    >
      It won't take more then a minute, come on!
      <Field
        className={margins.mt}
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        as={TextField}
      />
      <Field className={margins.mt} name="email" type="text" placeholder="Email" as={TextField} />
      <Field className={margins.mt} name="phone" type="phone" placeholder="Phone" as={TextField} />
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
        Submit
      </Button>
    </AuthForm>
  );
}
