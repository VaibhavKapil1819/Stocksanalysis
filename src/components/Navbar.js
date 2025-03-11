import React, { useState } from "react";
import styled from "styled-components";
import { FaCommentDots, FaTimes, FaNewspaper, FaChartLine } from "react-icons/fa"; // Import icons
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <Nav>
      <Logo>Stock It</Logo>
      <NavContent>
        <NavLink to="/news">
          <FaNewspaper size={20} style={{ color: "#888" }} /> {/* Grey icon */}
          <span>News</span>
        </NavLink>
        <NavLink to="/compare">
          <FaChartLine size={20} style={{ color: "#888" }} /> {/* Grey icon */}
          <span>Compare</span>
        </NavLink>
        <ChatbotButton onClick={toggleChatbot}>
          {isChatbotOpen ? <FaTimes size={20} /> : <FaCommentDots size={20} />} {/* Chat icon */}
        </ChatbotButton>
        {isChatbotOpen && <Chatbot />}
      </NavContent>
    </Nav>
  );
};

export default Navbar;

// Chatbot Component (same as before)
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const API_KEY = "AIzaSyDEpJgff2QO2XI1pIPwprSs6RG_dElBvPE"; // Your Gemini API key

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Fetch response from Gemini API
    try {
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
                    text: `You are a stock market expert. Provide a concise and accurate response to the following question: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botMessage = {
        text: data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      const botMessage = { text: "An error occurred. Please try again.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }

    // Clear input
    setInput("");
  };

  return (
    <ChatbotContainer>
      <ChatHeader>Stock Chatbot</ChatHeader>
      <ChatMessages>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.text}
          </Message>
        ))}
      </ChatMessages>
      <ChatInput>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a stock-related question..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </ChatInput>
    </ChatbotContainer>
  );
};

// Styled Components (same as before)
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;



const ChatbotButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #00ff88;
  }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 300px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  background: #444;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

const ChatMessages = styled.div`
  height: 300px;
  padding: 1rem;
  overflow-y: auto;
  background: #1a1a1a;
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background: ${(props) => (props.sender === "user" ? "#00ff88" : "#444")};
  color: ${(props) => (props.sender === "user" ? "#1a1a1a" : "white")};
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  max-width: 80%;
`;

const ChatInput = styled.div`
  display: flex;
  padding: 0.5rem;
  background: #444;
  input {
    flex: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background: #333;
    color: white;
    outline: none;
  }
  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background: #00ff88;
    border: none;
    border-radius: 5px;
    color: #1a1a1a;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;