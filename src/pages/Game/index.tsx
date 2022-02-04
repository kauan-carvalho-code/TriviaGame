import { GameAlternatives } from 'components/GameAlternatives';
import { GameSummary } from 'components/GameSummary';
import { Layout } from 'components/Layout';
import { IQuestion, useQuestions } from 'hooks/useQuestions';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';

export function Game() {
  const [question, setQuestion] = useState<IQuestion>();
  const { questions } = useQuestions();
  const { numberOfQuestion } = useParams();

  console.log(question);

  useEffect(() => {
    if (questions && numberOfQuestion) {
      const CurrentQuestion = questions[+numberOfQuestion - 1];
      setQuestion(CurrentQuestion);
    }
  }, [numberOfQuestion]);

  return (
    <Layout>
      <Container>
        <Content>
          {question && numberOfQuestion && (
            <>
              <GameSummary
                category={question.category}
                question={question.question}
                type={question.type}
              />
              <GameAlternatives
                nextQuestion={+numberOfQuestion + 1}
                correctAnswer={question.correct_answer}
                questionsAnswers={[
                  ...question.incorrect_answers,
                  question.correct_answer,
                ]}
                question={question.question}
              />
            </>
          )}
        </Content>
      </Container>
    </Layout>
  );
}
