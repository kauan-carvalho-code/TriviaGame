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
  
`;