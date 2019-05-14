import { createGlobalStyle } from "styled-components";

/*/// STYLES META DATA /////

COLORS______________________
orange: #23a24d
blue: #2979ff
background-color: #f7f7f7

FONTS_______________________
Montserrat: (weights) 300 & 600 

//////////////////////////*/

const GlobalColors = {
  PrimaryWhite: "#F2F2F2",
  PrimaryBlack: "#1C1C1C",
  PrimaryGrey: "#424242",
  PrimaryRed: "#FFC2A7",
  PrimaryOrange: "#FFDBA7",
  PrimaryTeal: "#a3f9d8",
  PrimaryBlue: "#A9D3F8",
};

const GlobalSizes = {
  ScreenWidth: "800px"
};

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
    font-family: Montserrat, san-serif;
    margin: 0;
    padding: 0;
    box-sizing: inherit !important;
}

body {
    box-sizing: border-box !important;
    /* font-family: Montserrat, san-serif; */
    letter-spacing: 1.25px !important;
    font-weight: 300 !important;
    color: #424242 !important;
    background: #F2F2F2 !important;
}

h1 {
    letter-spacing: 2px !important;
    font-weight: 300 !important;
    color: #FF6D00 !important;
    font-size: 3rem !important;
    padding-bottom: 1rem;
    border-bottom: 1px solid #349dc4;
}

h2, h3, h4, h5, h6,
p, div, button, a, 
input, select, textarea {
    /* font-family: Montserrat, san-serif; */
    font-weight: 300 !important;
    letter-spacing: 1.25px !important;
}
`;

export { GlobalStyles, GlobalSizes, GlobalColors };
