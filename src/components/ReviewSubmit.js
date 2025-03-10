import React,{useState} from "react";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

const Review = ({ prevStep }) => {
  const { values } = useFormikContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    investmentType: "",
    riskAppetite: "",
    timeHorizon: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dummy user input from form
    const userData = {
      name: formData.name,
      email: formData.email,
      age: formData.age,
      investmentType: formData.investmentType,
      riskAppetite: formData.riskAppetite,
      timeHorizon: formData.timeHorizon,
    };
  
    // Save data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(userData));
    navigate("/home");
  };
  
  return (
    <div>
      <h2>Review & Submit</h2>
      <p>Please review your details before submitting.</p>

      <h3>Personal Details</h3>
      <p><strong>First Name:</strong> {values.firstName}</p>
      <p><strong>Last Name:</strong> {values.lastName}</p>

      <h3>Investment Preferences</h3>
      <p><strong>Investment Type:</strong> {values.investmentType}</p>
      <p><strong>Time Horizon:</strong> {values.timeHorizon}</p>
      <p><strong>Risk Appetite:</strong> {values.riskAppetite}</p>
      <p><strong>Preferred Sector:</strong> {values.preferredSector}</p>
      <p><strong>Expected Return:</strong> {values.expectedReturn}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;
