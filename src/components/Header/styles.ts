import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  width: 82vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  right: 0;

  padding-top: 2rem;

  .search {

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    margin-left: 5rem;

    .icon-search {
        position: absolute;
        left: 15px;
    }

    .input-search {
        padding: 10px 50px;
        border: none;
        outline:none;
        font-size: 1rem;

    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 4rem;

    .support {
      border: none;
      background: transparent;

      margin-right: 1.5rem;

      cursor: pointer;
    }

    .notification {
      border: none;
      background: transparent;

      margin-right: 2rem;

      cursor: pointer;
    }

    .config {
      border: none;
      background: transparent;

      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 1rem;

      cursor: pointer;

      

      .name {
        font-size: 0.9rem;
        margin-right: 5px;
      }
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
