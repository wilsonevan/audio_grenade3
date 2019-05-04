import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => (
  <FooterContainer>
    <FooterColumn>
      <ListHeader>Resources</ListHeader>
      <ListItem>Support</ListItem>
      <ListItem>Contact Us</ListItem>
      <ListItem>About Us</ListItem>
    </FooterColumn>
    <FooterColumn>
      <ListHeader>Services</ListHeader>
      <ListItem>Orders</ListItem>
      <ListItem />
      <ListItem />
      <ListItem />
    </FooterColumn>
    <FooterColumn>
      <RightsHeader>
        Copyright 2019 Audio Grenade | All Rights Reserved
      </RightsHeader>
      <CreatorContainer>
        <CreatorBody>Created by</CreatorBody>
        <CreatorLink href="https://www.cortonacreative.com" target="_blank">
          Cortona Creative
        </CreatorLink>
      </CreatorContainer>
    </FooterColumn>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: black;
  padding: 5rem;
  display: flex;
  justify-content: space-evenly;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ListHeader = styled.h3`
  color: #349dc4 !important;
  margin: 0;
`;

const ListItem = styled.h4`
  margin: 0;
  padding-top: 0.5rem;
  color: white !important;
`;

const RightsHeader = styled.h3`
  // color: white !important;
  color: #349dc4 !important;
  margin: 0;
`;

const CreatorContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
`;

const CreatorBody = styled.p`
  color: white !important;
`;

const CreatorLink = styled.a`
  color: #349dc4 !important;
  font-size: 1.2rem;
  padding-left: 0.6rem;
  font-weight: 700;
`;

export default Footer;
