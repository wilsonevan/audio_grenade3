import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "./Dots";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import firstImage from "../../images/_DSC8699_16_9_AR.jpg";
import secondImage from "../../images/_DSC8752_16_9_AR.jpg";
import thirdImage from "../../images/gallery_bx_6th_16_9_AR.jpg";

const Gifts = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [numSlides, setNumSlides] = useState(3); // Must update quantity if adding new slides to this file
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    // Render the slideshow window to have the correct aspect ratio (16:9)
    var windowWidth = window.innerWidth;
    windowWidth = windowWidth - 0.2 * windowWidth;

    setSlideWidth(windowWidth);
  }, []);

  const plusSlide = () => {
    if (currentSlide >= numSlides) setCurrentSlide(1);
    else setCurrentSlide(currentSlide + 1);
  };

  const minusSlide = () => {
    if (currentSlide <= 1) setCurrentSlide(numSlides);
    else setCurrentSlide(currentSlide - 1);
  };

  const goToSlide = n => {
    if (n >= 1 && n <= numSlides) setCurrentSlide(n);
  };

  const getCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return firstImage;
      case 2:
        return secondImage;
      case 3:
        return thirdImage;
      default:
        return;
    }
  };

  return (
    <>
      <RotationContainer>
        <BrandingHeader>Custom Company Branding</BrandingHeader>
        <SlideContainer slideImage={getCurrentSlide()} slideWidth={slideWidth}>
          <EmptyContainer />
          <ArrowContainer>
            <LeftArrow minusSlide={() => minusSlide()} />
            <RightArrow plusSlide={() => plusSlide()} />
          </ArrowContainer>
          <DotsContainer>
            <Dots numDots={numSlides} goToSlide={() => goToSlide()} currentDot={currentSlide}/>
          </DotsContainer>
        </SlideContainer>
      </RotationContainer>
      <DetailsContainer>
        <TextContainer>
          <DetailsHeader>For details, please contact:</DetailsHeader>
          <DetailsText>Chris Wilson, CTS</DetailsText>
          <DetailsTextContainer>
            <DetailsLabel>Phone: </DetailsLabel>
            <DetailsBigText>801-783-6269</DetailsBigText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <DetailsLabel>Email: </DetailsLabel>
            <DetailsBigText>chris@audio-grenade.com</DetailsBigText>
          </DetailsTextContainer>
        </TextContainer>
      </DetailsContainer>
    </>
  );
};

const RotationContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: #424242;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SlideContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: ${props => (props.slideWidth / 16) * 9}px;
  width: ${props => props.slideWidth}px;
  transition: background-image 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.slideImage}) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top: 3px solid #349dc4;
  border-bottom: 3px solid #349dc4;
  border-left: 3px solid #F2F2F2;
  border-right: 3px solid #F2F2F2;
`;

const EmptyContainer = styled.div``

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

const DetailsContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const BrandingHeader = styled.h1`
  margin-bottom: 3rem;
`

const DetailsHeader = styled.h1`
  color: #349dc4 !important;
  margin: 0;
  border: none;
  font-size: 2.5rem !important;
`;

const DetailsText = styled.h1`
  color: #424242 !important;
  border: none;
  font-size: 2.5rem !important;
  margin-top: 1rem;
`;
const DetailsBigText = styled.h1`
  border: none;
  font-size: 2.5rem !important;
  margin: 0;
  color: #424242 !important;
`;

const DetailsLabel = styled.h2`
  color: #349dc4 !important;
  border: none;
  // font-size: 2rem !important;
  margin: 0;
  padding-right: 0.5rem;
  padding: 0.3rem;
`;

export default Gifts;
