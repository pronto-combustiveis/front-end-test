import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  padding: 2rem 3rem;
`

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;

	@media(max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);  
  }

	@media(max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);  
  }
`

export const LoadContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`