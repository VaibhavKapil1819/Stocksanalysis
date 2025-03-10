// import React from "react";

// const StockCard = ({ stock }) => {
//   return (
//     <div style={styles.card}>
//       <h3>{stock.name}</h3>
//       <p><strong>Sector:</strong> {stock.sector}</p>
//       <p><strong>Risk Level:</strong> {stock.risk}</p>
//       <p><strong>Time Horizon:</strong> {stock.timeHorizon}</p>
//       <p><strong>Expected Return:</strong> {stock.expectedReturn}</p>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     border: "1px solid #ddd",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//     background: "#f9f9f9",
//     textAlign: "center",
//   },
// };

// export default StockCard;
import React from "react";
import "../styles/StockCard.css";
const StockCard = ({ stock }) => {
  return (
    <div className="stock-card">
      <h2>{stock.name}</h2>
      <p><strong>Sector:</strong> {stock.sector || "Not Available"}</p>
      <p><strong>Risk Level:</strong> {stock.risk || "Not Available"}</p>
      <p><strong>Time Horizon:</strong> {stock.timeHorizon || "Not Available"}</p>
      <p><strong>Expected Return:</strong> {stock.expectedReturn || "Not Available"}</p>
    </div>
  );
};

export default StockCard;
