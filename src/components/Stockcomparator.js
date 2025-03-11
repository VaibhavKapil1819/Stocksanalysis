import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const StockComparator = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const API_KEY = "AIzaSyDEpJgff2QO2XI1pIPwprSs6RG_dElBvPE"; // Replace with your Gemini API key

  // Predefined list of stock symbols
  const stockList = [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "GOOGL", name: "Alphabet Inc." },
    { symbol: "MSFT", name: "Microsoft Corporation" },
    { symbol: "AMZN", name: "Amazon.com Inc." },
    { symbol: "TSLA", name: "Tesla Inc." },
  ];

  const handleAddStock = async () => {
    if (!selectedStock || stocks.length >= 5) return;

    try {
      // Fetch stock data using Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Provide detailed information about the stock ${selectedStock} in JSON format. Include the following fields: name, symbol, price, marketCap, peRatio, dividendYield, week52High, week52Low, and historicalData (an array of objects with date, price, and symbol fields). Respond with only valid JSON, without any additional text or markdown formatting.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const stockText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

      // Clean the response (remove markdown code blocks)
      const cleanedResponse = stockText.replace(/```json/g, "").replace(/```/g, "").trim();

      // Parse the cleaned response
      const stockData = JSON.parse(cleanedResponse);
      console.log("Fetched Stock Data:", stockData);

      // Add the stock to the list
      setStocks((prev) => [...prev, stockData]);
      setSelectedStock("");
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const handleRemoveStock = (symbol) => {
    setStocks((prev) => prev.filter((stock) => stock.symbol !== symbol));
  };

  return (
    <Container>
      <Header>
        <h1>Stock Comparator</h1>
        <p>Compare up to 5 stocks based on key metrics and performance.</p>
      </Header>

      <SearchBar>
        <select
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.target.value)}
        >
          <option value="">Select a stock</option>
          {stockList.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name} ({stock.symbol})
            </option>
          ))}
        </select>
        <button onClick={handleAddStock}>Add Stock</button>
      </SearchBar>

      <StockGrid>
        {stocks.map((stock) => (
          <StockCard key={stock.symbol}>
            <StockHeader>
              <h3>{stock.name} ({stock.symbol})</h3>
              <RemoveButton onClick={() => handleRemoveStock(stock.symbol)}>×</RemoveButton>
            </StockHeader>
            <StockDetails>
              <DetailItem>
                <strong>Price:</strong> ${stock.price}
              </DetailItem>
              <DetailItem>
                <strong>Market Cap:</strong> {stock.marketCap}
              </DetailItem>
              <DetailItem>
                <strong>P/E Ratio:</strong> {stock.peRatio}
              </DetailItem>
              <DetailItem>
                <strong>Dividend Yield:</strong> {stock.dividendYield}
              </DetailItem>
              <DetailItem>
                <strong>52-Week Range:</strong> ${stock.week52Low} - ${stock.week52High}
              </DetailItem>
            </StockDetails>
          </StockCard>
        ))}
      </StockGrid>

      {stocks.length > 0 && (
        <ChartSection>
          <h2>Performance Comparison</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart>
              <CartesianGrid stroke="#444" strokeDasharray="5 5" />
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "none", borderRadius: "5px" }} />
              <Legend />
              {stocks.map((stock) => (
                <Line
                  key={stock.symbol}
                  type="monotone"
                  dataKey="price"
                  name={stock.symbol}
                  data={stock.historicalData} // Use individual stock's historical data
                  stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartSection>
      )}
    </Container>
  );
};

export default StockComparator;

// Styled Components (same as before)
// Styled Components
const Container = styled.div`
  padding: 2rem;
  background: #1a1a1a;
  color: white;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    color: #888;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  select {
    padding: 0.75rem;
    border: 1px solid #444;
    border-radius: 5px;
    background: #333;
    color: white;
    font-size: 1rem;
    width: 300px;
    &:focus {
      outline: none;
      border-color: #00ff88;
    }
  }
  button {
    padding: 0.75rem 1.5rem;
    background: #00ff88;
    border: none;
    border-radius: 5px;
    color: #1a1a1a;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const StockGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StockCard = styled(motion.div)`
  background: #333;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const StockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-size: 1.25rem;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const StockDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const ChartSection = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const InsightsButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: #00ff88;
  border: none;
  border-radius: 5px;
  color: #1a1a1a;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;