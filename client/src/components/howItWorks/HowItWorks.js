import React from "react";
import styled from "styled-components";
import { Embed } from "semantic-ui-react";
import firstImage from "./../../images/_DSC6379_16_9_AR.jpg";
import secondImage from "./../../images/_DSC6555_16_9_AR.jpg";

const HowItWorks = () => {
  return (
    <>
      <TopContainer>
        <TextContainer>
          <h1>Overview</h1>
          <SecondaryText>
            Everything it touches explodes into sound!
          </SecondaryText>
          <TertiaryText>
            Connects quickly and easily via Bluetooth to your favorite personal
            electronic device.
          </TertiaryText>
        </TextContainer>
        <EmbedContainer>
          <Embed
            aspectRatio="16:9"
            id="FlnUC3jBOrE"
            placeholder={firstImage}
            source="youtube"
          />
        </EmbedContainer>
      </TopContainer>
      <SecondContainer>
        <SecondTextContainer>
          <PrimaryBlueText>Simple to Use</PrimaryBlueText>
          <SecondaryGreyText>Perfect for meetings on the go</SecondaryGreyText>
          <TertiaryGreyText>
            Featuring a rechargeable, long-lasting lithium battery and a built
            in microphone which allow for 360° mobile conferencing.
          </TertiaryGreyText>
        </SecondTextContainer>
        <EmbedContainer>
          <Embed id="qIhKNxJzvhs" placeholder={secondImage} source="youtube" />
        </EmbedContainer>
      </SecondContainer>
    </>
  );
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 2rem;
  padding-top: 10rem;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  background-color: #424242;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  background-color: #f2f2f2;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

const ThirdContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60vh;
  width: 100%;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 100%;
  border-bottom: #349dc4;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

const TextContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
`;

const SecondTextContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
`;

const SecondaryText = styled.h2`
  margin-top: 0.5rem;
  text-align: right;
  width: 80%;
  color: #f2f2f2;
`;

const TertiaryText = styled.h4`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: right;
  color: #f2f2f2;
`;

const PrimaryBlueText = styled.h1`
  color: #349dc4 !important;
  // border-bottom: 1px solid #FF6D00;
`;

const SecondaryGreyText = styled.h2`
  margin-top: 0.5rem;
  text-align: left;
  color: #424242;
`;

const TertiaryGreyText = styled.h4`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #424242;
`;

const EmbedContainer = styled.div`
  width: 50%;
`;

export default HowItWorks;
