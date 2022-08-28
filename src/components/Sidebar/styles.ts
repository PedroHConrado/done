import styled from "styled-components";

export const Container = styled.div`
    width: 18vw;
    height: 100%;
    border-right: 1px solid var(--grey);
    padding-left: 3rem;
    position: fixed;

    h3 {
        margin: 2rem 0;
    }

    main {
        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    footer {
        margin-top: 26rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`