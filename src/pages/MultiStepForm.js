import { Formik, Form } from "formik";
import { useState } from "react";
import { validationSchema } from "../schemas/validationSchema";
import FormStepOne from "../components/FormStepOne";
import FormStepTwo from "../components/FormStepTwo";
import FormStepThree from "../components/FormStepThree";
import ReviewSubmit from "../components/ReviewSubmit";
import { motion } from "framer-motion";
import'../styles/formStyles.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const isLastStep = step === validationSchema.length;

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        investmentType: "",
        riskLevel: "",
      }}
      validationSchema={validationSchema[step]}
      onSubmit={(values) => {
        if (!isLastStep) {
          nextStep();
        } else {
          console.log("Submitted data:", values);
        }
      }}
    >
      {({ values }) => (
        <Form className="form-container">
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>

          {/* Animated Form Steps */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
          >
            {step === 0 && <FormStepOne />}
            {step === 1 && <FormStepTwo />}
            {step === 2 && <FormStepThree />}
            {step === 3 && <ReviewSubmit values={values} />}
          </motion.div>

          {/* Navigation Buttons */}
          <div>
            {step > 0 && <button type="button" onClick={prevStep}>Back</button>}
            <button type="submit">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
