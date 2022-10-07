import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    header, 
    section, 
    article, 
    aside, 
    footer, 
    main, 
    a, 
    button, 
    input, 
    textarea, 
    img, 
    nav, 
    ul, 
    ol, 
    li, 
    p, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    div, 
    button,
    span{
        margin: 0;
        padding: 0;
        font-weight: inherit;
        font-size: inherit;
        font-family: inherit ;
    }

    ol,
    ul,
    li {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    div, tbody {
        overflow-anchor: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: inherit;
        text-decoration: inherit;

        &:hover {
            color: inherit;
        }
    }

    *:focus {
        outline: 0;
    }

    input[type="password"] {
        font-family: "sans-serif";
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { 
        margin: 0;

        appearance: none;
    }

    /* Firefox */
    input[type=number] {
        appearance: textfield;
    }

    input:focus {
        outline: none;
    }

    button {
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
    }
  
  html { 
        font-size : 62.5%;
        font-weight: normal;
        line-height: 1.5;
    }

  body {
        font-size: 14px;
        font-size: ${(props) => props.theme.fontSize.content};
        font-family: ${(props) => props.theme.fontFamily.normal}, sans-serif;
        line-height: 1.5;
        font-weight: 300;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.color.background};
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
`;
