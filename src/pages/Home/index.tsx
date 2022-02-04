import { QuestionsForm } from 'components/QuestionsForm';
import { useQuestions } from 'hooks/useQuestions';
import React from 'react';

import TriviaLogo from '../../assets/trivia-logo.svg';
import { Container, Logo } from './styles';

export function Home() {
  const { questions } = useQuestions();

  return (
    <Container>
      {questions.length === 0 ? (
        <Logo src={TriviaLogo} alt="Trivia Logo" />
      ) : (
        <QuestionsForm />
      )}
    </Container>
  );
}
