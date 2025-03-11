  import { Field, ErrorMessage } from "formik";

  const FormStepThree = () => {
    return (
      <div>
        <h2>Investment Preferences</h2>

        {/* Investment Type Dropdown */}
        <label>Investment Type</label>
        <Field as="select" name="investmentType">
          <option value="">Select Investment Type</option>
          <option value="stocks">Stocks</option>
          <option value="bonds">Bonds</option>
          <option value="realEstate">Real Estate</option>
          <option value="crypto">Cryptocurrency</option>
          <option value="mutualFunds">Mutual Funds</option>
          <option value="gold">Gold</option>
          <option value="etfs">ETFs</option>
        </Field>
        <ErrorMessage name="investmentType" component="div" className="error" />

        {/* Time Horizon Dropdown */}
        <label>Time Horizon</label>
        <Field as="select" name="timeHorizon">
          <option value="">Select Time Horizon</option>
          <option value="shortTerm">Short-Term (0-2 Years)</option>
          <option value="mediumTerm">Medium-Term (3-5 Years)</option>
          <option value="longTerm">Long-Term (5+ Years)</option>
        </Field>
        <ErrorMessage name="timeHorizon" component="div" className="error" />

        {/* Risk Appetite Dropdown */}
        <label>Risk Appetite</label>
        <Field as="select" name="riskAppetite">
          <option value="">Select Risk Level</option>
          <option value="veryLow">Very Low</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="veryHigh">Very High</option>
        </Field>
        <ErrorMessage name="riskAppetite" component="div" className="error" />

        {/* Preferred Sector Dropdown */}
        <label>Preferred Investment Sector</label>
        <Field as="select" name="preferredSector">
          <option value="">Select Preferred Sector</option>
          <option value="tech">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="energy">Energy</option>
          <option value="finance">Finance</option>
          <option value="consumerGoods">Consumer Goods</option>
          <option value="realEstate">Real Estate</option>
        </Field>
        <ErrorMessage name="preferredSector" component="div" className="error" />

        {/* Expected Return Dropdown */}
        <label>Expected Annual Return (%)</label>
        <Field as="select" name="expectedReturn">
          <option value="">Select Expected Return</option>
          <option value="5-10">5-10%</option>
          <option value="10-15">10-15%</option>
          <option value="15-20">15-20%</option>
          <option value="20+">20%+</option>
        </Field>
        <ErrorMessage name="expectedReturn" component="div" className="error" />
      </div>
    );
  };

  export default FormStepThree;
