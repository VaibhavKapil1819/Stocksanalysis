import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StockCard from "../components/StockCard";
import stockData from "../data/stockData"; // Ensure correct path
import Navbar from "../components/Navbar";
import "./Home.css"; // Ensure this file exists for styling

const Home = () => {
  const [filteredStocks, setFilteredStocks] = useState(stockData);
  const [filters, setFilters] = useState({
    sector: "",
    risk: "",
    timeHorizon: "",
    expectedReturn: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    filterStocks();
  }, [filters]);

  const filterStocks = () => {
    const filtered = stockData.filter((stock) => {
      return (
        (!filters.sector || stock.sector === filters.sector) &&
        (!filters.risk || stock.risk === filters.risk) &&
        (!filters.timeHorizon || stock.timeHorizon === filters.timeHorizon) &&
        (!filters.expectedReturn || stock.expectedReturn === filters.expectedReturn)
      );
    });
    setFilteredStocks(filtered);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <h1>Hello, welcome to your investment dashboard!</h1>

      {/* Filters */}
      <div className="filter-container">
        <select name="sector" value={filters.sector} onChange={handleFilterChange}>
          <option value="">Select Sector</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
        </select>

        <select name="risk" value={filters.risk} onChange={handleFilterChange}>
          <option value="">Select Risk Level</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select name="timeHorizon" value={filters.timeHorizon} onChange={handleFilterChange}>
          <option value="">Select Time Horizon</option>
          <option value="Short-Term">Short-Term</option>
          <option value="Medium-Term">Medium-Term</option>
          <option value="Long-Term">Long-Term</option>
        </select>

        <select name="expectedReturn" value={filters.expectedReturn} onChange={handleFilterChange}>
          <option value="">Select Expected Return</option>
          <option value="5%">5%</option>
          <option value="10%">10%</option>
          <option value="15%">15%</option>
        </select>
      </div>

      {/* Investment Recommendations */}
      <h2>Investment Recommendations</h2>
      <div className="stock-grid">
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock, index) => <StockCard key={index} stock={stock} />)
        ) : (
          <p>No stocks match your preferences. Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
