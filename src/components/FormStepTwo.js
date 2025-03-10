import { Field, ErrorMessage } from "formik";

const FormStepTwo = () => (
  <div>
    <label>Address:</label>
    <Field name="address" type="text" />
    <ErrorMessage name="address" />

    <label>City:</label>
    <Field name="city" type="text" />
    <ErrorMessage name="city" />

    <label>ZIP Code:</label>
    <Field name="zip" type="text" />
    <ErrorMessage name="zip" />
  </div>
);
export default FormStepTwo;
