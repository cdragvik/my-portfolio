import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Section = styled.section`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const HelloText = styled.p`
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  margin: 10px 0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
`;

const Home = () => {
  return (
      <Section>
        <Content>
          <Title>Hello, I'm Christiane!</Title>
          <HelloText>Frontend Development student at Noroff.</HelloText>
          <HelloText>Welcome to my portfolio.</HelloText>
          <Link to="/projects"><Button>My projects</Button></Link>
          <a href="contact.html"><Button>Get in touch</Button></a>
        </Content>
        <Image src="src/assets/workspace.jpg" alt="workspace" className="homeimg" />
      </Section>
    
  );
}

export default Home;
