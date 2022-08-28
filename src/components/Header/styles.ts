import styled from "styled-components";

export const Container = styled.div`
    
    height: 10%;
    width: 82vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    right: 0;

    .buttons {
        display: flex;
    }

    .support {
        border: none;
        background: green;

        cursor: pointer;
    }
    
    .notification {
        border: none;
        background: yellow;

        cursor: pointer;

    }

    .config {
        border: none;
        background: red;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
  
`