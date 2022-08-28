import styled from "styled-components";

export const Container = styled.div`
    // Button styles
    
    button {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;

        border: none;

        color: #999999;
        background: transparent;
        font-size: 1.2em;

        cursor: pointer;
        
    }

    button:focus {
        border-right: 3px solid var(--green);
        color: black;
        font-weight: 500;
    }

    // Text styles
    

`