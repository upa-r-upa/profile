import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
        font-size: 16px;
        font-family: 'SDGothic', sans-serif;
        line-height: 1.5;
        font-weight: normal;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.color.background}
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
`;
