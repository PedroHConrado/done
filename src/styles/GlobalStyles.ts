import { createGlobalStyle } from "styled-components";

export const GLobalStyles = createGlobalStyle`

    :root {
        --grey: #EBEBEB;
        --green: #2C9985;
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