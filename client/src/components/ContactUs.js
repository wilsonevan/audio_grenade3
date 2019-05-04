import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <PageContainer>
      <PageIntroContainer>
        <IntroHeader>About Us</IntroHeader>
        <IntroText>Born and raised in the mountains...</IntroText>
      </PageIntroContainer>
      <SalesContainer>
        <TextContainer>
          <SalesHeader>For sales, please contact:</SalesHeader>
          <SalesText>Chris Wilson, CTS</SalesText>
          <SalesTextContainer>
            <SalesLabel>Phone: </SalesLabel>
            <SalesBigText>801-783-6269</SalesBigText>
          </SalesTextContainer>
          <SalesTextContainer>
            <SalesLabel>Email: </SalesLabel>
            <SalesBigText>chris@audio-grenade.com</SalesBigText>
          </SalesTextContainer>
        </TextContainer>
        <ImageContainer>
          <img src="pic_trulli.jpg" alt="" />
        </ImageContainer>
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
  justify-content: flex-start;
  align-items: flex-end;
`;

const SalesTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ImageContainer = styled.div``;

const IntroHeader = styled.h1`
  color: #F2F2F2 !important;
`;

const IntroText = styled.h2`
`;

const SalesHeader = styled.h1`
color: #349dc4 !important;
margin: 0;
border: none;
font-size: 2.5rem !important;
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
