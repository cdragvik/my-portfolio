import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  max-width: 800px;
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

const ButtonContainer = styled.div`
  display: flex;  
`;

export const Button = styled.button`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 0;
  margin-right: 10px;
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
        <h1>Hello, I'm Christiane!</h1>
        <p>Frontend Development student at Noroff.</p>
        <p>Welcome to my portfolio.</p>
        <ButtonContainer>
          <Link to="/projects"><Button>My projects</Button></Link>
          <Link to="/contact"><Button>Get in touch</Button></Link>
        </ButtonContainer>
      </Content>
      <Image src='/workspace.jpg' alt="workspace" className="homeimg" />
    </Section>
  );
}

export default Home;
