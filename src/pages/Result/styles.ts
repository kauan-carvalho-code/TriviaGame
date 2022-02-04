import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};

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
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.card};
  width: 50rem;
  border-radius: 8px;
  text-align: center;
  margin: 8rem 0;
  width: 90vw;
  max-width: 760px;

  button {
    width: 40%;
    height: 3rem;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.8rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;
