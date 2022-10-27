import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 1.2rem;

  .type {
    margin-bottom: 1rem;

    span {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .header span::before {
    content: "•";
    color: green;
    padding-right: 0.5rem;
    
  }

  .description {
    font-size: 14px;
    color: var(--grey-text);
  }
`;
