import React from "react";
import styled from "styled-components";
import { GlobalSizes, GlobalColors } from "../styles/GlobalStyles";

const ContactUs = () => {
  return (
    <PageContainer>
      <PageIntroContainer>
        <IntroHeader>About Us</IntroHeader>
        <IntroText>Born and raised in the mountains...</IntroText>
      </PageIntroContainer>
      <SalesContainer>
        <TextContainer>
          <SalesHeader>Learn More:</SalesHeader>
          <SalesText>Chris Wilson</SalesText>
          <SalesTextContainer>
            <SalesBigText>801-783-6269</SalesBigText>
          </SalesTextContainer>
          <SalesTextContainer>
            <SalesBigText>chris@audio-grenade.com</SalesBigText>
          </SalesTextContainer>
        </TextContainer>
      </SalesContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const PageIntroContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: #424242;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SalesContainer = styled.div`
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
  justify-content: center;
  align-items: center;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
    align-items: center;
  }
`;

const SalesTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ImageContainer = styled.div``;

const IntroHeader = styled.h1`
  color: #f2f2f2 !important;
`;

const IntroText = styled.h2``;

const SalesHeader = styled.h1`
  color: #349dc4 !important;
  margin: 0;
  border: none;
  font-size: 2.5rem !important;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${GlobalColors.SecondaryGrey};
`;

const SalesText = styled.h1`
  color: #424242 !important;
  border: none;
  font-size: 2.5rem !important;
  margin-top: 1rem;
`;
const SalesBigText = styled.h1`
  border: none;
  font-size: 2.5rem !important;
  margin: 0;
  color: #424242 !important;
`;

const SalesLabel = styled.h2`
  color: #349dc4 !important;
  border: none;
  // font-size: 2rem !important;
  margin: 0;
  padding-right: 0.5rem;
  padding: 0.3rem;
`;

export default ContactUs;
