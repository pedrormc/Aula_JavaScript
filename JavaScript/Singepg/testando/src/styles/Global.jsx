import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    
    background-color: #ffffff;
  }
`;

export default GlobalStyle;