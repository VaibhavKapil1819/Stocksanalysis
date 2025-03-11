import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

const Review = ({ prevStep }) => {
  const { values } = useFormikContext();
  const navigate = useNavigate();
  const API_KEY = "AIzaSyDEpJgff2QO2XI1pIPwprSs6RG_dElBvPE";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPreferences = {
      firstName: values.firstName,
      lastName: values.lastName,
      investmentType: values.investmentType,
      riskAppetite: values.riskAppetite,
      timeHorizon: values.timeHorizon,
      preferredSector: values.preferredSector,
      expectedReturn: values.expectedReturn,
    };

    console.log("Sending preferences to Gemini:", userPreferences);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an API that strictly returns JSON. Do not add any extra text.
          
                    Based on these investment preferences give me 10 stock recommendations:
                    - Investment Type: ${values.investmentType}
                    - Risk Appetite: ${values.riskAppetite}
                    - Time Horizon: ${values.timeHorizon}
                    - Preferred Sector: ${values.preferredSector}
                    - Expected Return: ${values.expectedReturn}
                    
                    Respond in **pure JSON format only**:
                    {
                      "stocks": [
                        {
                          "name": "Tesla Inc.",
                          "ticker": "TSLA",
                          "currentPrice": 780.25,
                          "marketCap": "800B",
                          "priceChange": "+15.20"
                        }
                      ]
                    }`,
                  },
                ],
              },
            ],
          })
          
        }
      );

      const data = await response.json();
      const stockRecommendationsText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
        const jsonMatch = stockRecommendationsText.match(/\{[\s\S]*\}/);
        const cleanJson = jsonMatch ? jsonMatch[0] : "{}";
  
      let stockRecommendations;
      try {
        stockRecommendations = JSON.parse(cleanJson);
      } catch (error) {
        console.error("Error parsing stock recommendations:", error);
        stockRecommendations = { stocks: [] }; // Fallback to an empty array
      }

      console.log("Parsed Gemini Stock Recommendations:", stockRecommendations);

      navigate("/home", { state: { stocks: stockRecommendations.stocks } });

    } catch (error) {
      console.error("Error fetching stock recommendations:", error);
    }
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
