import { Button } from 'components/Button';
import { useQuestions } from 'hooks/useQuestions';
import parse from 'html-react-parser';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface GameAlternativesProps {
  questionsAnswers: string[];
  correctAnswer: string;
  nextQuestion: number;
  question: string;
}

export function GameAlternatives({
  nextQuestion,
  correctAnswer,
  questionsAnswers,
  question,
}: GameAlternativesProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const { userAnswers, setUserAnswers, questions } = useQuestions();
  const navigate = useNavigate();

  const HandleClick = (isCorrect: string, answer: string) => {
    setShowAnswers(true);

    const answers = [...userAnswers];

    const newAnswer = {
      question,
      correctAnswer,
      answer,
      isCorrect: isCorrect === 'correct' ? true : false,
    };

    answers.push(newAnswer);

    setUserAnswers(answers);

    const timer = setTimeout(() => {
      setShowAnswers(false);

      if (nextQuestion > questions.length) return navigate('/result');

      navigate(`/game/${nextQuestion}`);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <Container showAnswers={showAnswers}>
      {questionsAnswers.sort().map((alternative) => (
        <Button
          className={alternative === correctAnswer ? 'correct' : 'incorrect'}
          value={alternative === correctAnswer ? 'correct' : 'incorrect'}
          background="#B48EAD"
          color="#ECEFF4"
          hover
          key={alternative}
          disabled={showAnswers}
          onClick={(e: FormEvent<HTMLButtonElement>) =>
            HandleClick(e.currentTarget.value, alternative)
          }>
          {parse(alternative)}
        </Button>
      ))}
    </Container>
  );
}
