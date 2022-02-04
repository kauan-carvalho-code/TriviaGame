// @ts-ignore
import parse from 'html-react-parser';
import React, { useState } from 'react';
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import { Container, Content, Header } from './styles';

interface AnswerCollapseProps {
  answer: string;
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
  questionNumber: number;
}

export function AnswerCollapse({
  answer,
  correctAnswer,
  isCorrect,
  question,
  questionNumber,
}: AnswerCollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Header>
        <span>{questionNumber}</span>
        <p>{parse(question)}</p>
        {isCorrect ? (
          <BsFillCheckCircleFill className="correct-answer" />
        ) : (
          <BsFillXCircleFill className="incorrect-answer" />
        )}
      </Header>
      <Content className={isOpen ? 'isOpen' : ''}>
        <p className={isCorrect ? 'correct' : 'incorrect'}>{`Your answer: ${parse(
          answer,
        )}`}</p>
        <p className="correct">{`Correct answer: ${parse(correctAnswer)}`}</p>
      </Content>
    </Container>
  );
}
