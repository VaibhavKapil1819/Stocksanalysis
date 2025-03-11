import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const StockDetails = () => {
  const { ticker } = useParams();
  const location = useLocation();
  const stock = location.state?.stock || {};

  console.log("Received stock from previous screen:", stock); // ✅ Log what was received
  console.log("Ticker:", ticker); // ✅ Log the ticker

  const [stockData, setStockData] = useState({});
  const [chartData, setChartData] = useState([]);
  const [aiInsights, setAiInsights] = useState("");

  const API_KEY = "AIzaSyDEpJgff2QO2XI1pIPwprSs6RG_dElBvPE";

  useEffect(() => {
    if (!ticker) return;

    const requestData = {
      contents: [
        {
          parts: [
            {
              text: `Provide stock details, historical price data, and AI insights for ${ticker}. 
              Format the response as valid JSON with this structure:
              {
                "stockDetails": {
                  "name": "Company Name",
                  "currentPrice": 123.45,
                  "marketCap": "1.2T",
                  "volume": "10M"
                },
                "priceHistory": [
                  {"date": "2024-03-01", "price": 120},
                  {"date": "2024-03-02", "price": 125}
                ],
                "aiInsights": "This stock is expected to rise due to strong earnings."
              }`,
            },
          ],
        },
      ],
    };

    console.log("Sending request to Gemini:", requestData); // ✅ Log what is being sent to Gemini

    const fetchStockInfo = async () => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData),
          }
        );

        const data = await response.json();
        console.log("Gemini Response:", data); // ✅ Log response from Gemini

        let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No data available.";
        console.log("Raw Gemini Response Text:", responseText);
        responseText = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        try {
          const jsonData = JSON.parse(responseText.trim()); // Ensure JSON parsing
          setStockData(jsonData.stockDetails || {});
          setChartData(jsonData.priceHistory || []);
          setAiInsights(jsonData.aiInsights || "No insights available.");
        } catch (parseError) {
          console.error("Error parsing JSON response:", parseError);
          setAiInsights("Error: Unable to parse response.");
        }
      } catch (error) {
        console.error("Error fetching Gemini data:", error);
      }
    };

    fetchStockInfo();
  }, [ticker]);

  return (
    <Container>
      <Navbar />
      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <h1>{stockData.name || ticker} Stock Details</h1>
          <StockInfo>
            <InfoItem>
              <strong>Current Price:</strong> ${stockData.currentPrice?.toFixed(2)}
            </InfoItem>
            <InfoItem>
              <strong>Market Cap:</strong> {stockData.marketCap}
            </InfoItem>
            <InfoItem>
              <strong>Volume:</strong> {stockData.volume}
            </InfoItem>
          </StockInfo>
        </Header>

        {/* Stock Performance Graph */}
        <ChartSection>
          <h2>Stock Performance</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "none", borderRadius: "5px" }} />
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="price" stroke="#00ff88" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartSection>

        {/* AI Insights */}
        <InsightsSection>
          <h2>AI-Powered Insights (Gemini)</h2>
          <InsightsBox>{aiInsights}</InsightsBox>
        </InsightsSection>
      </ContentContainer>
    </Container>
  );
};

export default StockDetails;

// Styled Components
const Container = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const ContentContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const StockInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  background: #333;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.1rem;
  text-align: center;
  flex: 1;
  max-width: 200px;
`;

const ChartSection = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const InsightsSection = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const InsightsBox = styled.div`
  background: #333;
  padding: 1.5rem;
  border-radius: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
`;