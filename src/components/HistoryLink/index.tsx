import { IAnswer, useQuestions } from 'hooks/useQuestions';
import React, { useEffect, useState } from 'react';
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { Container, Content, ContentContainer, Identifier } from './styles';

interface HistoryLinkProps {
  date: string;
  answers: IAnswer[];
  id: number;
  identifier: number;
}

export function HistoryLink({ date, answers, id, identifier }: HistoryLinkProps) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const navigate = useNavigate();
  const { setUserAnswers } = useQuestions();

  useEffect(() => {
    let corrects = 0;
    let incorrects = 0;

    answers.forEach((curr) => {
      if (curr.isCorrect) {
        corrects += 1;
        return;
      }
      incorrects += 1;
    });

    setCorrectAnswers(corrects);
    setIncorrectAnswers(incorrects);
  }, []);

  const handleClick = () => {
    setUserAnswers(answers);
    navigate(`/result/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Content>
        <Identifier>{identifier}</Identifier>
        <ContentContainer>
          <div className="correct">
            <BsFillCheckCircleFill />
            <span>{correctAnswers}</span>
          </div>
          <div className="incorrect">
            <BsFillXCircleFill />
            <span>{incorrectAnswers}</span>
          </div>
        </ContentContainer>
      </Content>
      <p>{date}</p>
    </Container>
  );
}
