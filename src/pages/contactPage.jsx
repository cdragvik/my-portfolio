import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  max-height: 400px;
  border-radius: 4px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const ContactButton = styled.button`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 0;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

function Contact() {
  return (
    <Section>
      <ImageWrapper>
        <Image src="/workspace.jpg" alt="Contact" />
      </ImageWrapper>
      <Content>
        <h2>Got a problem to solve?</h2>
        <p>
          I am always looking for new challenges and opportunities. Whether you have a question or just want to say hello, my inbox is always open.
        </p>
        <ButtonColumn>
          <ContactLink href="https://www.linkedin.com/in/christiane-nanette-dragvik/">
            <ContactButton>
              Contact me on LinkedIn
            </ContactButton>
          </ContactLink>
          <ContactLink href="mailto:cndragvik@gmail.com">
            <ContactButton>
              Send me an email
            </ContactButton>
          </ContactLink>
          <ContactLink href="https://github.com/cdragvik">
            <ContactButton>
              View my GitHub
            </ContactButton>
          </ContactLink>
        </ButtonColumn>
      </Content>
    </Section>
  );
}

export default Contact;
