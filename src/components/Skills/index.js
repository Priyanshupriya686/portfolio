<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
=======
import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2
  }
`;

export const Desc = styled.div`
<<<<<<< HEAD
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
=======
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
<<<<<<< HEAD
`;
=======


`
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
<<<<<<< HEAD
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
=======
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
<<<<<<< HEAD
`;

// Services Section Wrapper to control spacing
const ServicesSection = styled.div`
  margin-top: 60px;  /* Space before Services */
`;

const ServicesDesc = styled(Desc)`
  margin-bottom: 40px; /* Reduce space after description */
`;

const ServicesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const ServiceCard = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border: 1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 20px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ViewMore = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    text-decoration: underline;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
`;

const services = [
  {
    icon: <FaCode />,
    title: 'Clean Code',
    description: 'Well-Structured, Understandable & Efficient',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Modern Design',
    description: 'Functional, Minimal & Innovative',
  },
];

const Skills = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Freeze page scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

=======
`


const Skills = () => {
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
<<<<<<< HEAD
        <Desc>Here are some of my skills.</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} />
=======
        <Desc>Here are some of my skills.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
<<<<<<< HEAD
        </SkillsContainer>

        {/* Services Section */}
        <ServicesSection>
          <Title>Services</Title>
          <ServicesDesc>What I Offer</ServicesDesc>
          <ServicesContainer>
            {services.map((service, index) => (
              <ServiceCard key={index} onClick={() => setSelectedService(service)}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ViewMore>View More →</ViewMore>
              </ServiceCard>
            ))}
          </ServicesContainer>
        </ServicesSection>

        {/* Modal */}
        {selectedService && (
          <ModalOverlay onClick={() => setSelectedService(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedService(null)}>×</CloseButton>
              <ServiceIcon>{selectedService.icon}</ServiceIcon>
              <ServiceTitle>{selectedService.title}</ServiceTitle>
              <Desc>{selectedService.description}</Desc>
            </ModalContent>
          </ModalOverlay>
        )}
      </Wrapper>
    </Container>
  );
};

export default Skills;
=======

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
>>>>>>> 6cc6c52828f0e58a948f4b9146ceb5930ef81bb2
