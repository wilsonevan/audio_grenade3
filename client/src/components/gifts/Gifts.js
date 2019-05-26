import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "./Dots";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import firstImage from "../../images/_DSC8699_16_9_AR.jpg";
import secondImage from "../../images/_DSC8752_16_9_AR.jpg";
import thirdImage from "../../images/gallery_bx_6th_16_9_AR.jpg";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Loader } from "semantic-ui-react";

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
      <PageContainer>
        <RotationContainer>
          <BrandingHeader>Custom Company Branding</BrandingHeader>
          <SlideContainer>
            {/* <EmptyContainer /> */}
            <SlideImage src={firstImage} current={currentSlide} slideNum={1} />
            <SlideImage src={secondImage} current={currentSlide} slideNum={2} />
            <SlideImage src={thirdImage} current={currentSlide} slideNum={3} />
            <ArrowContainer>
              <LeftArrow minusSlide={() => minusSlide()} />
              <RightArrow plusSlide={() => plusSlide()} />
            </ArrowContainer>
            <DotsContainer>
              <Dots
                numDots={numSlides}
                goToSlide={() => goToSlide()}
                currentDot={currentSlide}
              />
            </DotsContainer>
          </SlideContainer>
        </RotationContainer>
        <DetailsContainer>
          <TextContainer>
            <DetailsHeader>
              For details on corporate branding, please contact:
            </DetailsHeader>
            <DetailsText>Chris Wilson</DetailsText>
            <DetailsTextContainer>
              <DetailsBigText>801-783-6269</DetailsBigText>
            </DetailsTextContainer>
            <DetailsTextContainer>
              <DetailsBigText>chris@audio-grenade.com</DetailsBigText>
            </DetailsTextContainer>
          </TextContainer>
        </DetailsContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div``;

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
  /* height: ${props => (props.slideWidth / 16) * 9}px;
  width: ${props => props.slideWidth}px; */
  /* transition: background-image 0.5s ease-in-out; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-image: url(${props => props.slideImage}) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  border-top: 3px solid #349dc4;
  border-bottom: 3px solid #349dc4;
  border-left: 3px solid #F2F2F2;
  border-right: 3px solid #F2F2F2;
`;

const SlideImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 66vw;
  height: auto;
  opacity: 1;
  visibility: ${props =>
    props.current === props.slideNum ? "visible" : "hidden"};
  display: ${props => (props.current === props.slideNum ? "inline" : "none")};
  /* opacity: ${props => (props.current === props.slideNum ? 1 : 0)}; */
  transition: visibility 1s, opacity 1.5s linear;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 90vw;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 100%;
  left: 0;
  width: 100%;
`;

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
`;

const DetailsContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80vw;
    height: auto;
    text-align: center;
    align-items: center;
    margin: 0;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    width: 80vw;
    height: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const BrandingHeader = styled.h1`
  margin-bottom: 3rem;
  color: ${GlobalColors.PrimaryWhite} !important;
  text-align: center;
`;

const DetailsHeader = styled.h1`
  color: #349dc4 !important;
  margin: 0;
  border: none;
  font-size: 2.5rem !important;
  width: 80%;
  text-align: center;
  padding: 0.25rem;

`;

const DetailsText = styled.h1`
  color: #424242 !important;
  border: none;
  font-size: 2.5rem !important;
  padding: 0.25rem;
  margin: 0;
  /* margin-top: 1rem; */
`;
const DetailsBigText = styled.h1`
  border: none;
  font-size: 2.5rem !important;
  margin: 0;
  color: #424242 !important;
  padding: 0.25rem;

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
