import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  max-width: 95%;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 1rem;

  .correct {
    background: ${(props) => props.theme.colors.correct};
  }

  .incorrect {
    background: ${(props) => props.theme.colors.incorrect};
  }

  .correct-answer {
    color: ${(props) => props.theme.colors.correct};
  }

  .incorrect-answer {
    color: ${(props) => props.theme.colors.incorrect};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 12px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-height: 0;
  opacity: 0;

  transition: all 0.1s linear;

  p {
    padding: 1rem 1.4rem;
    border-radius: 8px;
    width: 40%;
    color: ${(props) => props.theme.colors.text};
  }

  @media only screen and (max-width: 768px) {
    p {
      padding: 0.5rem 0.7rem;
      font-size: 12px;
    }
  }

  &.isOpen {
    max-height: 100%;
    opacity: 1;
  }
`;
