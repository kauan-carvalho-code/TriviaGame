import React from 'react';
import { RiHistoryLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function HistoryButton() {
  const reports = JSON.parse(String(localStorage.getItem('reports')));
  const navigate = useNavigate();

  return reports ? (
    <Container onClick={() => navigate('/history')}>
      <RiHistoryLine />
      <span>HISTORY</span>
    </Container>
  ) : (
    <div></div>
  );
}
