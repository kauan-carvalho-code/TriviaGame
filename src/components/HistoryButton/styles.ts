import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  cursor: pointer;

  svg {
    margin-right: 0.4rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.purple200};
  }
`;
