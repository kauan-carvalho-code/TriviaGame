import { AnswerCollapse } from 'components/AnswerCollapse';
import { Button } from 'components/Button';
import { useQuestions } from 'hooks/useQuestions';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content } from './styles';

export function Result() {
  const { userAnswers, fetchQuestions, setUserAnswers } = useQuestions();
  const navigate = useNavigate();
  console.log(userAnswers);

  useEffect(() => {
    const reports = JSON.parse(String(localStorage.getItem('reports')));
    const date = new Date();
    const formattedDate = `0${date.getDay()}/0${date.getMonth()}/${date.getFullYear()}`;

    const newReport = {
      userAnswers,
      formattedDate,
    };

    if (!reports) {
      localStorage.setItem('reports', JSON.stringify([newReport]));
      return;
    }

    localStorage.setItem('reports', JSON.stringify([...reports, newReport]));
  }, []);

  const handleClick = () => {
    fetchQuestions();
    setUserAnswers([]);
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <h1>Your answers</h1>
        {userAnswers.map((curr, index) => (
          <AnswerCollapse
            key={curr.question}
            question={curr.question}
            answer={curr.answer}
            correctAnswer={curr.correctAnswer}
            isCorrect={curr.isCorrect}
            questionNumber={index + 1}
          />
        ))}
        <Button hover onClick={handleClick}>
          Play again
        </Button>
      </Content>
    </Container>
  );
}
