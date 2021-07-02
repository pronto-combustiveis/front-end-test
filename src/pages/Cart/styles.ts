import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;

  h1 {
    color: var(--greey);
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  input {
    border-radius: 0.25rem;
    height: 2.5rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    padding: 0 1.0rem;
    font-size: 1rem;

    font-weight: 400;
  }
`
export const ButtonCoupon = styled.button`
    border-radius: 10px;

    border: none;
    background: none;
    color: var(--red);
    padding: 1rem;
    margin-left: 0.5rem;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: rgba(236, 29, 36, 0.2);
      border-radius: 10px;
      transition: 0.3s;
    }
`

export const ButtonBuy = styled.button`
  border: none;
  border-radius: 5px;
  background: var(--red);
  color: var(--shape);

  margin-top: 0.5rem;
  padding: 1rem 2rem;
`