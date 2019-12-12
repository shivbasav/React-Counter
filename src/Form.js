import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => console.log("Submitting")}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <>
            <Container>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. abc@example.com"
                  />
                </div>
              </div>
            </Container>
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
