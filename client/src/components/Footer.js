import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalSizes } from "../styles/GlobalStyles";

const Footer = () => (
  <FooterContainer>
    <FooterColumn>
      <NavLink to="/">
        <ListHeader>Home</ListHeader>
      </NavLink>
      <SupportLink
        href="https://audio-grenade.freshdesk.com/support/home"
        target="_blank"
      >
        <ListItem>Support</ListItem>
      </SupportLink>
      <NavLink to="/how-it-works">
        <ListItem>About</ListItem>
      </NavLink>
      <NavLink to="/contact">
        <ListItem>Contact Us</ListItem>
      </NavLink>
      <NavLink to="/gifts">
        <ListItem>Gifts</ListItem>
      </NavLink>
    </FooterColumn>
    <FooterColumn>
      <ListHeader>Services</ListHeader>
      <SupportLink
        href="https://audio-grenade.mybigcommerce.com/"
        target="_blank"
      >
        <ListItem>Store</ListItem>
      </SupportLink>
      <SupportLink
        href="https://audio-grenade.mybigcommerce.com/account.php?action=order_status"
        target="_blank"
      >
        <ListItem>Orders</ListItem>
      </SupportLink>
      <SupportLink
        href="https://audio-grenade.mybigcommerce.com/shipping-returns/"
        target="_blank"
      >
        <ListItem>Shipping & Returns</ListItem>
      </SupportLink>
      
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
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
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
  color: #349dc4 !important;
  margin: 0;
`;

const CreatorContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
  }
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

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

export default Footer;
