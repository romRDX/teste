import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background:	#FFF;/*#f0f0f5 #3f888f; */
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Roboto Slab", sans-serif;
    font-size: 16px;
  }

  h1, h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Overlay {
    z-index: 2;
  }

  .ReactModal__Content {
    @media only screen and (max-width: 1200px) {
      max-width: 85%;
    }
  }
`;
