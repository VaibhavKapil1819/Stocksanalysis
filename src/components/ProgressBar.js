import React from "react";

const ProgressBar = ({ step }) => {
  const steps = ["Personal Info", "Contact Details", "Review & Submit"];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 20 }}>
      {steps.map((label, index) => (
        <div key={index} style={{ fontWeight: step === index ? "bold" : "normal" }}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
