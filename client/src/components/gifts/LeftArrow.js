import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const LeftArrow = props => {
  return (
    <Arrow onClick={() => props.minusSlide()}>
      <Icon name="chevron left" color="white" size="huge" />
    </Arrow>
  );
};

const Arrow = styled.i`
  color: white;
  transition: all .2s ease-in-out; 

  :hover {
    cursor: pointer;
    transform: scale(2);
  }
`;

export default LeftArrow;
