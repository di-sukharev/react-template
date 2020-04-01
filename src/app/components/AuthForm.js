import React from "react";
import { Formik, Form } from "formik";
import { Fieldset } from "react95/dist/prod";

export function AuthForm(props) {
  return (
    <Fieldset label={props.label}>
      <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
        <Form>{props.children}</Form>
      </Formik>
    </Fieldset>
  );
}
