import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import EF_watermelonSalad from "./fonts/EF_watermelonSalad.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "EF_watermelonSalad";
    src: local("EF_watermelonSalad");
    font-style: normal;
    src: url(${EF_watermelonSalad}) format("truetype");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  body {
    display: flex;
    flex-direction: column;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    margin: 100px 0;
    font-family: EF_watermelonSalad, sans-serif, Arial;
    background-color: #ebedee;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  button {
    border: 0;
    backgorund: transparent;
    cursor: pointer;
  }  
`;

export default GlobalStyle;
