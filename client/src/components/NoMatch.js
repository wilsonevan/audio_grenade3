import React from "react";
import styled from "styled-components";
import { ButtonBlue } from "../styles/Components";

const NoMatch = ({ history }) => (
  <CenteredEverything>
    <CenteredDiv>
      <h1>Page not found</h1>
    </CenteredDiv>
    <ButtonContainer>
      <ButtonBlue>
        <h3 onClick={() => history.goBack()}> Go Back </h3>
      </ButtonBlue>
    </ButtonContainer>
  </CenteredEverything>
);

const CenteredDiv = styled.div`
  margin: 12px;
`;

const ButtonContainer = styled.div`
  padding: 2rem;
`;

const CenteredEverything = styled.div`
  height: 100vh;
  background-color: #1c1c1c;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

// const Header = styled.h1`
// `

export default NoMatch;
