import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0 0px 0; 
  @media (max-width: 960px) {
    padding: 10px 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0; 
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;  
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: -40px; 
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CarouselSection = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: 5px;

  .slick-dots {
    bottom: -30px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0px; /* Space below each card */
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-align: left;
`;

export const UserText = styled.div`
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: -70px;
  object-fit: cover;
  margin-top: -10px;
`;

export const Quote = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  margin-top: -30px; /* Reduced from 8px */
`;

export const UserName = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  margin-left: -50px;
  margin-top: -20px;
  margin-bottom: -25px; /* Added small bottom margin to separate from role */
`;

export const UserRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  margin-left: -50px;
`;
