import * as Yup from "yup";

export const validationSchema = [
  // Step 1: Personal Details
  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  }),
  
  // Step 2: Address
  Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    zip: Yup.string().required("ZIP Code is required"),
  }),

  // Step 3: Investment Preferences
  Yup.object({
    investmentType: Yup.string().required("Select an investment type"),
    timeHorizon: Yup.string().required("Select time horizon"),
    riskAppetite: Yup.string().required("Select risk appetite"),
    preferredSector: Yup.string().required("Select investment sector"),
    expectedReturn: Yup.string().required("Select expected return"),
  }),
];
