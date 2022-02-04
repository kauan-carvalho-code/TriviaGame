import { useQuestions } from 'hooks/useQuestions';
import React, { useEffect, useState } from 'react';
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import { Container } from './styles';

export function Pontuation() {
  const { userAnswers } = useQuestions();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    let corrects = 0;
    let incorrects = 0;

    userAnswers.forEach((curr) => {
      if (curr.isCorrect) {
        corrects += 1;
        return;
      }
      incorrects += 1;
    });

    setCorrectAnswers(corrects);
    setIncorrectAnswers(incorrects);
  }, [userAnswers]);

  return (
    <Container>
      <div className="correct">
        <BsFillCheckCircleFill />
        <span>{correctAnswers}</span>
      </div>
      <div className="incorrect">
        <BsFillXCircleFill />
        <span>{incorrectAnswers}</span>
      </div>
    </Container>
  );
}
