import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const RightArrow = props => {
  return (
    <Arrow onClick={() => props.plusSlide()}>
      <Icon name="chevron right" size="huge" />
    </Arrow>
  );
};

const Arrow = styled.i`
  color: white;
  transition: all 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(2);
  }
`;

export default RightArrow;
