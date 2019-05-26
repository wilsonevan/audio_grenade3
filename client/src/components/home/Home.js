import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firstImage from "../../images/_DSC3678_cropped.jpg";
import productImage1 from "../../images/_DSC6583.jpg";
import thirdImage from "../../images/_DSC6399.jpg";
import { ButtonOrange, ButtonBlue } from "../../styles/Components";
import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../../styles/GlobalStyles";
import { Loader } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <PageContainer>
        <TopContainer>
          <LeftTextContainer>
            <InnerTextContainer>
              <PrimaryText>Audio Grenade</PrimaryText>
              <SecondaryText>
                A unique, useful gift for your best clients and employees
              </SecondaryText>
              <SupportLink
                href="https://audio-grenade.mybigcommerce.com/"
                // target="_blank"
              >
                <ButtonOrange
                  style={{
                    fontSize: "1.5rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem"
                  }}
                >
                  Shop Now
                </ButtonOrange>
              </SupportLink>
            </InnerTextContainer>
          </LeftTextContainer>
        </TopContainer>
        <SecondContainer>
          <InnerContainer>
            <SecondImage src={productImage1} alt="code-screenshot" />
            <RightTextContainer>
              <PrimaryOrangeText>Sound Gifts</PrimaryOrangeText>
              <SecondaryGreyText>Customized for your Corporate Branding</SecondaryGreyText>
            </RightTextContainer>
          </InnerContainer>
        </SecondContainer>
        <ThirdContainer>
          {/* <FullSoundTextContainer>
          <FullSoundText>
            Experience unique, full bass, 360 degree sound</FullSoundText>
            <FullSoundText>
            
          </FullSoundText>
        </FullSoundTextContainer> */}
          <FullSoundTextContainer>
            <PrimaryText>A Unique Sound</PrimaryText>
            <SecondaryText>On many surfaces,</SecondaryText>
            <SecondaryText>at the office, gym, or home</SecondaryText>
          </FullSoundTextContainer>
        </ThirdContainer>
        <FourthContainer>
          <QuoteHeader>Happy Customers</QuoteHeader>
          <QuoteContainer>
            <Quote>
              <QuoteAuthor>
                <AuthorName>Brent Skousen</AuthorName>
                <AuthorLocation>Mountain America Credit Union</AuthorLocation>
              </QuoteAuthor>
              <QuoteText>
                "The Audio Grenade caught my attention due to it’s small size
                and huge sound and the ability to add our logo. It is a unique
                gift that will be used by our customers for years."
              </QuoteText>
            </Quote>
            <Quote>
              <QuoteAuthor>
                <AuthorName>Jared McRae</AuthorName>
                <AuthorLocation>Liberty Industrial Group</AuthorLocation>
              </QuoteAuthor>
              <QuoteText>
                "I have found the Audio Grenade speakers to be a unique and
                lasting gift due to their sound properties that turn everything
                into a speaker. Many of our best clients are streaming music
                from their phones these days and the name Liberty Industrial
                Group is in front of them every day."
              </QuoteText>
            </Quote>
          </QuoteContainer>
        </FourthContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div``;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${firstImage}) !important;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
    align-items: center;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

const ThirdContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  width: 100%;
  background-image: url(${thirdImage}) !important;
  background-position: center;
  background-size: cover;
  // background-attachment: fixed;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  width: 100%;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  padding-bottom: 3rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  align-items: center;

  /* height: 100vh; */
  width: 100%;
`;

const SecondImage = styled.img`
  width: 70vh;
  height: auto;

  @media (max-width: 600px) {
    width: 50vh;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18vw;
  margin-top: 45vh;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin: 0;
    width: 80vw;
  }
`;

const InnerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  width: auto;
  background-color: rgba(18, 153, 255, 0.4);
  padding: 3rem;
  border-radius: 10px;
  border: 1px solid white;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5%;
  padding: 20px;

  @media (max-width: 925px) {
    text-align: center;
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 80vw;
  }
`;

const FullSoundTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
  /* height: auto; */
  margin-right: 10vw;
  margin-top: 42vh;
  margin-bottom: 2rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    margin: 0;
    margin-top: 5rem;
    align-items: center;
  }
`;

const PrimaryText = styled.h1`
  color: white !important;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #349dc4;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const PrimaryOrangeText = styled.h1`
  color: #ff6d00 !important;
  text-align: right;
  padding-bottom: 1rem;
  border-bottom: 1px solid #349dc4;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const SecondaryText = styled.h2`
  color: white !important;
  margin: 0;
  margin-bottom: 0.25rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const SecondaryGreyText = styled.h2`
  text-align: right;
  color: #455a64 !important;
  margin-top: 0.5rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const QuoteHeader = styled.h1`
  padding-top: 7vh !important;
  font-size: 3rem;
  color: #ff6d00 !important;
  padding-bottom: 2rem;
  border-bottom: 1px solid #349dc4;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  /* padding: 0.5rem; */
`;

const Quote = styled.div`
  height: 30rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid #d7d5d5;
  border-radius: 0.5rem;
  border-bottom: 3px;
  border-bottom-color: #d7d5d5;
  border-bottom-style: solid;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1rem;
    margin: 1rem;
    height: 20rem;
    width: 30rem;
  }
`;

const QuoteText = styled.h2`
  font-style: italic;
  text-align: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

const QuoteAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AuthorName = styled.h3`
  text-align: center;
  margin: 0;
  color: #349dc4;
`;

const AuthorLocation = styled.h3`
  text-align: center;
  margin: 0;
`;

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

export default Home;
