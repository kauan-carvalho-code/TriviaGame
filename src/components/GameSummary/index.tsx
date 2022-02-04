// @ts-ignore
import parse from 'html-react-parser';
import React from 'react';

import { Container, Content, Header } from './styles';

interface GameSummaryProps {
  category: string;
  type: string;
  question: string;
}

export function GameSummary({ category, type, question }: GameSummaryProps) {
  return (
    <Container>
      <Header>
        <p>{parse(category)}</p>
        <p>{parse(type)}</p>
      </Header>
      <Content>
        <h3>{parse(question)}</h3>
      </Content>
    </Container>
  );
}
