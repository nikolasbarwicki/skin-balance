import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Montserrat";
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat'
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
