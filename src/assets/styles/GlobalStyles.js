import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::selection {
    background: #FFE8D1;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }



    body {
        font-size: 1.6rem;
        font-family: "Montserrat";
        font-weight: 400;
        line-height: 1.6;
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat'
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    h2 {
        font-family: "Raleway", sans-serif;
        font-size: 3.2rem;
        font-weight: 600;
        margin: 2.5rem 0;
    }

    h3 {
        font-family: "Raleway", sans-serif;
        font-size: 2.8rem;
        font-weight: 600;
    }

    h4 {
        font-family: "Montserrat", sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        color: #878787;
    }

    p {
        font-size: 1.6rem;
        line-height: 2;
        color: #5B5B5B;
    }

    span {
        color: #5B5B5B;
    }

`;

export default GlobalStyle;
