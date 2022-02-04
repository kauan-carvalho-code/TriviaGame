import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Content = styled.div``;
