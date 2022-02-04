import { HistoryButton } from 'components/HistoryButton';
import { Pontuation } from 'components/Pontuation';
import React from 'react';
import { useLocation } from 'react-router-dom';

import TriviaLogo from '../../assets/trivia-logo.svg';
import { Container, Content, Logo } from './styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <Logo src={TriviaLogo} alt="Logo do trivia" />
        {pathname === '/' ? <HistoryButton /> : <Pontuation />}
      </Content>
    </Container>
  );
}
