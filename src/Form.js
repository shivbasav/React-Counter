import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { styled } from "styled-system";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
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
          <Flex>
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
          </Flex>
        );
      }}
    </Formik>
  );
};

export default Form;
