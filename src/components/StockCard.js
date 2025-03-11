import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StockCard = ({ stock }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to Stock Details with:", stock);
    navigate(`/stock/${stock.ticker}`, { state: { stock } });
  };

  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
    >
      <h2>{stock.name} ({stock.ticker})</h2>
      <Detail><strong>Current Price:</strong> {stock.currentPrice !== undefined ? `$${stock.currentPrice.toFixed(2)}` : "Not Available"}</Detail>
      <Detail><strong>Market Cap:</strong> {stock.marketCap || "Not Available"}</Detail>
      <Detail><strong>Price Change:</strong> {stock.priceChange || "Not Available"}</Detail>
    </CardContainer>
  );
};

export default StockCard;

// Styled Components
const CardContainer = styled(motion.div)`
  background: #333;
  padding: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Detail = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ddd;
`;