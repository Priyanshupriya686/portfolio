import React from 'react'
import Slider from 'react-slick'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CarouselSection,
  TestimonialCard,
  UserImage,
  Quote,
  UserName,
  UserRole,
  UserInfo,
  UserText
} from './TestimonialsStyle'
import { testimonials } from '../../data/constants'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true
  };

  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>Testimonials</Title>
        <Desc>What People Say</Desc>
        <CarouselSection>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <TestimonialCard key={index}>
                <UserInfo>
                  <UserImage src={item.image} alt={item.name} />
                  <UserText>
                    <UserName>{item.name}</UserName>
                    <UserRole>{item.role}</UserRole>
                  </UserText>
                </UserInfo>
                <Quote>"{item.feedback}"</Quote>
              </TestimonialCard>
            ))}
          </Slider>
        </CarouselSection>
      </Wrapper>
    </Container>
  )
}

export default Testimonials
