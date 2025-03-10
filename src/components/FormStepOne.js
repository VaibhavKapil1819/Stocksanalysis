import { Field, ErrorMessage } from "formik";

const FormStepOne = () => (
  <div>
    <label>First Name:</label>
    <Field name="firstName" type="text" />
    <ErrorMessage name="firstName" />
    
    <label>Last Name:</label>
    <Field name="lastName" type="text" />
    <ErrorMessage name="lastName" />

    <label>Email:</label>
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <label>Phone:</label>
    <Field name="phone" type="text" />
    <ErrorMessage name="phone" />
  </div>
);
export default FormStepOne;
