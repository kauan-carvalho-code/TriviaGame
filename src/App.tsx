import { QuestionsProvider } from 'hooks/useQuestions';
import { Game } from 'pages/Game';
import { History } from 'pages/History';
import { Home } from 'pages/Home';
import { Result } from 'pages/Result';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import { Theme } from 'styles/theme';

export function App() {
  return (
    <Theme>
      <GlobalStyle />
      <QuestionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:numberOfQuestion" element={<Game />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </QuestionsProvider>
    </Theme>
  );
}
