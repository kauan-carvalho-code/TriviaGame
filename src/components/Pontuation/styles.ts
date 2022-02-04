import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-size: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 0.8rem;
  }

  .correct {
    color: ${(props) => props.theme.colors.correct};
  }

  .incorrect {
    color: ${(props) => props.theme.colors.incorrect};
  }
`;
