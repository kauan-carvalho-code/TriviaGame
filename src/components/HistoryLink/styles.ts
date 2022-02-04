import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 8px;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Identifier = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 0.4rem;
    }
  }

  .correct {
    color: ${(props) => props.theme.colors.correct};
  }

  .incorrect {
    color: ${(props) => props.theme.colors.incorrect};
  }
`;
