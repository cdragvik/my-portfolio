import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`;

const SubTitle = styled.h2`
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ContactButton = styled.button`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  margin: 10px 0;
  display: inline-flex;
  align-items: center;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
`;

function Contact() {
  return (
    <>
      <Section>
        <ImageWrapper>
          <Image src="src/assets/workspace.jpg" alt="Contact" />
        </ImageWrapper>
        <Content>
          <Title>Contact Me</Title>
          <SubTitle>Got a problem to solve?</SubTitle>
          <Paragraph>
            I am always looking for new challenges and opportunities. Whether you have a question or just want to say hello, my inbox is always open.
          </Paragraph>
          <div>
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
          </div>
        </Content>
      </Section>
    </>
  );
}

export default Contact;
