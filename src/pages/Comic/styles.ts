import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
	grid-gap: 2rem;

  @media(max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);  
  }

  padding: 0 4rem;

  img {
    border-radius: 10px;
    height: 450px;
  }
`

export const Description = styled.div`
  margin-top: 2rem;

  h3 {
    margin-top: 1rem;
    color: var(--green)
  }

  button {
    border: none;
    border-radius: 10px;

    padding: 1.2rem;
    margin-top: 2rem;
    font-weight: 900;

    background: var(--red);
    color: var(--shape);
  }
`

export const LoadContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`