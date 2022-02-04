import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
`;

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Logo = styled.img`
  width: 160px;

  @media only screen and (max-width: 768px) {
    width: 120px;
  }
`;
