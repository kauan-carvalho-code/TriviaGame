import styled from 'styled-components';

export const Form = styled.div`
  background: ${(props) => props.theme.colors.card};
  width: 90vw;
  max-width: 30rem;
  border-radius: 8px;
  text-align: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button {
    width: 85%;
    margin: 0;
    margin-bottom: 1rem;
    height: 3rem;
  }

  .correct {
    background: ${(props) => props.theme.colors.correct};
  }

  .incorrect {
    background: ${(props) => props.theme.colors.incorrect};
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  padding: 2rem 0;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  width: 85%;
  text-align: center;
  margin-bottom: 1rem;
  height: 3rem;
  background: ${(props) => props.theme.colors.dark800};
  color: ${(props) => props.theme.colors.text};
  font-size: 22px;
  padding: 2px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  -moz-appearance: textfield;
`;
