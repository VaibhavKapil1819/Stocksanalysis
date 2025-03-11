import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const API_KEY = "AIzaSyDEpJgff2QO2XI1pIPwprSs6RG_dElBvPE";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news from Gemini API...");

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
                      text: "Provide a summary of the latest stock market news in JSON format. Include the title, summary, and source URL for each news item. Respond with only valid JSON, without any additional text or markdown formatting.",
                    },
                  ],
                },
              ],
            }),
          }
        );

        console.log("API Response Received:", response);

        const data = await response.json();
        console.log("Raw Gemini API Data:", data);

        const newsText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
        console.log("Raw Gemini Response Text:", newsText);

        // Clean the response (remove markdown code blocks)
        const cleanedResponse = newsText.replace(/```json/g, "").replace(/```/g, "").trim();
        console.log("Cleaned Response:", cleanedResponse);

        // Parse the cleaned response
        const newsData = JSON.parse(cleanedResponse);
        console.log("Parsed News Data:", newsData);

        // Ensure newsData is an array
        if (Array.isArray(newsData)) {
          setNews(newsData);
        } else {
          console.error("Invalid news data format:", newsData);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Log the news state after it's updated
  useEffect(() => {
    console.log("News State:", news);
  }, [news]);

  return (
    <Container>
      <Navbar />
      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <h1>Latest Stock Market News</h1>
        </Header>
        <NewsGrid>
          {news.length > 0 ? (
            news.map((article, index) => (
              <NewsCard key={index} href={article.source_url} target="_blank" rel="noopener noreferrer">
                <NewsContent>
                  <NewsTitle>{article.title}</NewsTitle>
                  <NewsSummary>{article.summary}</NewsSummary>
                  <NewsSource>Source: {article.source_url}</NewsSource>
                </NewsContent>
              </NewsCard>
            ))
          ) : (
            <EmptyMessage>No news available.</EmptyMessage>
          )}
        </NewsGrid>
      </ContentContainer>
    </Container>
  );
};

export default NewsScreen;

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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const NewsCard = styled.a`
  background: #333;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: white;
  &:hover {
    transform: translateY(-5px);
    background: #444;
  }
`;

const NewsContent = styled.div``;

const NewsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const NewsSummary = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1rem;
`;

const NewsSource = styled.p`
  font-size: 0.875rem;
  color: #888;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;