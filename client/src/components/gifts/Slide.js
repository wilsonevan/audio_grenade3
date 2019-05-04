import React from 'react'
import styled from 'styled-components'

const Slide = () => {
  return <MySlide></MySlide>
}

const MySlide = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 10rem;
  height: 60vh;
  width: 80vw;
  background-color: white !important;
`

export default Slide;