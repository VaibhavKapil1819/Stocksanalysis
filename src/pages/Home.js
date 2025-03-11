import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import StockCard from "../components/StockCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const location = useLocation();
  const receivedStocks = location.state?.stocks || [];

  console.log("Received stocks in Home.js:", receivedStocks);

  return (
    <Container>
      <Navbar />
      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <h1>Hello, welcome to your investment dashboard!</h1>
        </Header>

        {/* Investment Recommendations */}
        <Section>
          <h2>Investment Recommendations</h2>
          <StockGrid>
            {receivedStocks.length > 0 ? (
              receivedStocks.map((stock, index) => (
                <StockCard key={index} stock={stock} />
              ))
            ) : (
              <EmptyMessage>No stock recommendations available.</EmptyMessage>
            )}
          </StockGrid>
        </Section>
      </ContentContainer>
    </Container>
  );
};

export default Home;

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

const Section = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const StockGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;