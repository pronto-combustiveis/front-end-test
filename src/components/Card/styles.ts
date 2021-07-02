import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  background: var(--shape);
  border-radius: 10px;
  width: 320px;
  height: auto;

  padding-bottom: 1rem;

  img { 
    width: 100%;
    height: 300px;

    border-radius: 10px 10px 0 0;
  }
`

export const Description = styled.div`
  text-align: center;

  padding: 0 1rem;

  p { 
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--greey);
    margin-bottom: 0.5rem;
  }

  strong {
    color: var(--green);
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  border: none;
  background: none;
  color: var(--greey);
  width: 50%;
  padding: 1rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: rgba(236, 29, 36, 0.2);
    border-radius: 10px;
    transition: 0.3s;
  }
`