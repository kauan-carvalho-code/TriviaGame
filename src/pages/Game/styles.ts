import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  background: -moz-linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );
  background: -webkit-linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );
  background: linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );

  h1 {
    margin: 0;
  }
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  text-align: center;
  width: 90vw;
  max-width: 30rem;
`;
