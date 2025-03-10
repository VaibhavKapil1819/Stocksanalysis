const stockData = [
    // Healthcare Sector
    { name: "Pfizer", sector: "Healthcare", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "5-10%" },
    { name: "Moderna", sector: "Healthcare", risk: "High", timeHorizon: "Long-Term", expectedReturn: "10-15%" },
    { name: "Johnson & Johnson", sector: "Healthcare", risk: "Low", timeHorizon: "Mid-Term", expectedReturn: "3-7%" },
    { name: "AstraZeneca", sector: "Healthcare", risk: "Medium", timeHorizon: "Long-Term", expectedReturn: "6-12%" },
    { name: "Merck", sector: "Healthcare", risk: "High", timeHorizon: "Short-Term", expectedReturn: "7-14%" },
  
    // Technology Sector
    { name: "Apple", sector: "Technology", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "6-12%" },
    { name: "Microsoft", sector: "Technology", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "5-8%" },
    { name: "NVIDIA", sector: "Technology", risk: "High", timeHorizon: "Mid-Term", expectedReturn: "12-20%" },
    { name: "Google", sector: "Technology", risk: "High", timeHorizon: "Long-Term", expectedReturn: "15-25%" },
    { name: "Amazon", sector: "Technology", risk: "Medium", timeHorizon: "Mid-Term", expectedReturn: "8-16%" },
  
    // Finance Sector
    { name: "JPMorgan Chase", sector: "Finance", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "4-9%" },
    { name: "Goldman Sachs", sector: "Finance", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "6-11%" },
    { name: "American Express", sector: "Finance", risk: "High", timeHorizon: "Mid-Term", expectedReturn: "8-15%" },
    { name: "Morgan Stanley", sector: "Finance", risk: "Medium", timeHorizon: "Long-Term", expectedReturn: "5-10%" },
    { name: "Wells Fargo", sector: "Finance", risk: "Low", timeHorizon: "Mid-Term", expectedReturn: "3-6%" },
  
    // Energy Sector
    { name: "ExxonMobil", sector: "Energy", risk: "Low", timeHorizon: "Short-Term", expectedReturn: "3-6%" },
    { name: "Chevron", sector: "Energy", risk: "Medium", timeHorizon: "Mid-Term", expectedReturn: "5-10%" },
    { name: "Tesla Energy", sector: "Energy", risk: "High", timeHorizon: "Long-Term", expectedReturn: "15-25%" },
    { name: "BP", sector: "Energy", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "4-8%" },
    { name: "Shell", sector: "Energy", risk: "Low", timeHorizon: "Mid-Term", expectedReturn: "2-6%" },
  
    // Consumer Goods Sector
    { name: "Coca-Cola", sector: "Consumer Goods", risk: "Low", timeHorizon: "Mid-Term", expectedReturn: "2-5%" },
    { name: "Procter & Gamble", sector: "Consumer Goods", risk: "Medium", timeHorizon: "Long-Term", expectedReturn: "4-7%" },
    { name: "Nike", sector: "Consumer Goods", risk: "High", timeHorizon: "Short-Term", expectedReturn: "7-12%" },
    { name: "PepsiCo", sector: "Consumer Goods", risk: "Medium", timeHorizon: "Mid-Term", expectedReturn: "3-7%" },
    { name: "Unilever", sector: "Consumer Goods", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "4-9%" },
  
    // Industrial Sector
    { name: "Boeing", sector: "Industrial", risk: "High", timeHorizon: "Mid-Term", expectedReturn: "10-18%" },
    { name: "General Electric", sector: "Industrial", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "5-9%" },
    { name: "Caterpillar", sector: "Industrial", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "3-8%" },
    { name: "Honeywell", sector: "Industrial", risk: "Medium", timeHorizon: "Mid-Term", expectedReturn: "6-10%" },
    { name: "3M", sector: "Industrial", risk: "Low", timeHorizon: "Short-Term", expectedReturn: "4-7%" },
  
    // Communication Sector
    { name: "AT&T", sector: "Communication", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "3-6%" },
    { name: "Verizon", sector: "Communication", risk: "Medium", timeHorizon: "Short-Term", expectedReturn: "4-8%" },
    { name: "T-Mobile", sector: "Communication", risk: "High", timeHorizon: "Mid-Term", expectedReturn: "8-14%" },
    { name: "Disney", sector: "Communication", risk: "Medium", timeHorizon: "Long-Term", expectedReturn: "5-11%" },
    { name: "Netflix", sector: "Communication", risk: "High", timeHorizon: "Short-Term", expectedReturn: "10-20%" },
  
    // Utilities Sector
    { name: "Duke Energy", sector: "Utilities", risk: "Low", timeHorizon: "Mid-Term", expectedReturn: "2-5%" },
    { name: "Southern Company", sector: "Utilities", risk: "Medium", timeHorizon: "Long-Term", expectedReturn: "4-7%" },
    { name: "NextEra Energy", sector: "Utilities", risk: "High", timeHorizon: "Short-Term", expectedReturn: "6-10%" },
    { name: "Dominion Energy", sector: "Utilities", risk: "Medium", timeHorizon: "Mid-Term", expectedReturn: "3-6%" },
    { name: "Xcel Energy", sector: "Utilities", risk: "Low", timeHorizon: "Long-Term", expectedReturn: "2-5%" },
  ];
  

  
  export default stockData;
  