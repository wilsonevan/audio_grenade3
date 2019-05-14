import React from "react";
import styled from 'styled-components';

const Dots = props => {
  
  const renderDots = () => {
    const {numDots} = props
    var dotsComponents = []

    for (var i = 1; i <= numDots; i++ ){
      if (i === props.currentDot)
      dotsComponents.push(
        <Dot background={'#349dc4'} />
      )
      else 
      dotsComponents.push(
        <Dot />
      )
    }
    return dotsComponents

  }

  return (
  <>
    {renderDots()}
  </>
  )
};

const Dot = styled.div`
  height: 30px;
  width: 30px;
  border: 2px solid white;
  border-radius: 15px;
  background: ${props => props.background || 'rgba(0,0,0,0)'};
  margin: 0.5rem;
`

export default Dots;
