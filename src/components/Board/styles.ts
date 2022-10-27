import styled from "styled-components";

export const Container = styled.div`
  
  width: 22rem;
  height: 100%;

  border-radius: 10px;
  margin-left: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--green-container);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .count {
      padding: 0.1rem 0.5rem;
      background: #e8f1f0;
      border-radius: 10px;
      color: #52ab9a;
    }
  }

  .add {
    border: none;
    border-radius: 10px;
    background: #e8f1f0;

    padding: 0.6rem 0;
  }

  .task {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`