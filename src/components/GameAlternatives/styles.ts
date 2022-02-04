import styled, { css } from 'styled-components';

interface ContainerProps {
  showAnswers: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;

  button {
    margin: 0;
    border-radius: 8px;
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 100%;

    ${({ showAnswers }) =>
      showAnswers &&
      css`
        &.correct {
          background: ${(props) => props.theme.colors.correct};
        }

        &.incorrect {
          background: ${(props) => props.theme.colors.incorrect};
        }
      `}
  }
`;
