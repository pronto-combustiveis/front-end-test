import styled from 'styled-components'

export const Container = styled.header`
  background: var(--red);
`;

export const Content = styled.div`
  margin: 0 auto;

  padding: 2rem 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--shape);

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
