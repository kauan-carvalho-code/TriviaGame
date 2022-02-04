import { QuestionsProvider } from 'hooks/useQuestions';
import { Game } from 'pages/Game';
import { Home } from 'pages/Home';
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
          <Route path="/game" element={<Game />} />
        </Routes>
      </QuestionsProvider>
    </Theme>
  );
}
