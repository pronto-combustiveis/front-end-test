import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  margin-top: 1rem;
  border-radius: 10px;
  color: var(--greey);
`

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  font-size: 1.525rem;

  button { 
    font-size: 1.525rem;
    border: none;
    background: none;
    color: var(--red);
    margin: 0 10px;
  }

  span {
    color: var(--green)
  }
`