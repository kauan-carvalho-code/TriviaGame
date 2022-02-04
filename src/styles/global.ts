import { createGlobalStyle } from 'styled-components';

const Roboto =
  "'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,900&display=swap'";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans' ;
    src: url(${Roboto}) format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Roboto', sans-serif;
    --screen-x: 1460px;
    --screen-y: 1198px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
`;

export default GlobalStyle;
