import { createGlobalStyle } from "styled-components";

/*/// STYLES META DATA /////

COLORS______________________
green: #23a24d
blue: #2979ff
background-color: #f7f7f7

FONTS_______________________
Poppins: (weights) 300 & 600 

//////////////////////////*/

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit !important;
}

body {
    box-sizing: border-box !important;
    font-family: "Poppins", sans-serif !important;
    letter-spacing: 1.25px !important;
    font-weight: 300 !important;
    color: #424242 !important;
    background: #F2F2F2 !important;
}

h1 {
    font-family: "Poppins", sans-serif !important;
    letter-spacing: 1.25px !important;
    font-weight: 300 !important;
    color: #FF6D00 !important;
    font-size: 3rem !important;
    padding-bottom: 1rem;
    border-bottom: 1px solid #349dc4;
}

h2, h3, h4, h5, h6,
p, div, button, a, 
input, select, textarea {
    font-family: "Poppins", sans-serif !important;
    font-weight: 300 !important;
    letter-spacing: 1.25px !important;
}
`;

export { GlobalStyles };
