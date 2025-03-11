import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChartLine, FaUser, FaCog, FaStar, FaCheck } from 'react-icons/fa';
import styled,{createGlobalStyle} from 'styled-components';
import { useNavigate } from 'react-router-dom';
// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
  }
`;

// Navbar Component
const Navbar = () => {
  return (
    <Nav>
      <Logo>Stock It</Logo>
      <Menu>
        <MenuItem>
          <Link to="hero" smooth={true} duration={500}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="features" smooth={true} duration={500}>Features</Link>
        </MenuItem>
        <MenuItem>
          <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
        </MenuItem>
        <MenuItem>
          <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
        </MenuItem>
      </Menu>
      <AuthButtons>
        <Button>Login</Button>
        <Button primary>Sign Up</Button>
      </AuthButtons>
    </Nav>
  );
};

// Hero Component
const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroSection id="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Welcome to Stock It</Title>
        <Subtitle>Your Gateway to Smart Investing</Subtitle>
        <CTAButton onClick={() => navigate('/Complete your interests')}>
          Get Started
        </CTAButton>
      </motion.div>
    </HeroSection>
  );
};

// Features Component
const Features = () => {
  const features = [
    { icon: <FaChartLine />, title: 'Real-Time Data', description: 'Get live stock updates.' },
    { icon: <FaUser />, title: 'User-Friendly', description: 'Easy to use for beginners.' },
    { icon: <FaCog />, title: 'Customizable', description: 'Tailor your dashboard.' },
  ];

  return (
    <FeaturesSection id="features">
      <SectionTitle>Features</SectionTitle>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon>{feature.icon}</Icon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeatureList>
    </FeaturesSection>
  );
};

// Pricing Component
const Pricing = () => {
  const plans = [
    { name: 'Basic', price: '$10/month', features: ['Real-Time Data', 'Basic Support'] },
    { name: 'Pro', price: '$30/month', features: ['Advanced Analytics', 'Priority Support'] },
    { name: 'Premium', price: '$50/month', features: ['All Features', '24/7 Support'] },
  ];

  return (
    <PricingSection id="pricing">
      <SectionTitle>Pricing</SectionTitle>
      <PricingList>
        {plans.map((plan, index) => (
          <PricingItem key={index}>
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <PlanFeatures>
              {plan.features.map((feature, i) => (
                <Feature key={i}><FaCheck /> {feature}</Feature>
              ))}
            </PlanFeatures>
            <PlanButton>Choose Plan</PlanButton>
          </PricingItem>
        ))}
      </PricingList>
    </PricingSection>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    { name: 'Trisha ', review: 'Stock It changed the way I invest!' },
    { name: 'Bhuvaneshwar Kumar', review: 'The best platform for beginners.' },
    { name: 'Emma Watson', review: 'Highly customizable and user-friendly.' },
  ];

  return (
    <TestimonialsSection id="testimonials">
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialList>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <FaStar color="#FFD700" />
            <Review>{testimonial.review}</Review>
            <Reviewer>{testimonial.name}</Reviewer>
          </TestimonialItem>
        ))}
      </TestimonialList>
    </TestimonialsSection>
  );
};

// Footer Component
const Footer = () => {
  return (
    <FooterSection>
      <FooterText>© 2023 Stock It. All rights reserved.</FooterText>
    </FooterSection>
  );
};

// App Component
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

// Styled Components
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

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #00ff88;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.primary ? '#00ff88' : '#333')};
  color: ${(props) => (props.primary ? '#1a1a1a' : 'white')};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a, #000);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background: #00ff88;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FeatureItem = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00ff88;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PricingSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  text-align: center;
`;

const PricingList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PricingItem = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 10px;
  width: 250px;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PlanButton = styled.button`
  padding: 0.5rem 1rem;
  background: #00ff88;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const TestimonialList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TestimonialItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 250px;
`;

const Review = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Reviewer = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FooterSection = styled.footer`
  padding: 2rem;
  background: #1a1a1a;
  color: white;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default App;