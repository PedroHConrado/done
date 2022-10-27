import { createGlobalStyle } from "styled-components";

export const GLobalStyles = createGlobalStyle`

    :root {
        --grey: #EBEBEB;
        --grey-text: #9a9a9a;
        --green-container: #f5f9f9;
        --green-button: #e8f1f0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, textarea, button {
        font-family: Helvetica, sans-serif;
    }
`