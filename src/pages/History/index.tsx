import { HistoryLink } from 'components/HistoryLink';
import { IAnswer } from 'hooks/useQuestions';
import React from 'react';
import { ImExit } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Exit, HistoricList } from './styles';

interface IReport {
  formattedDate: string;
  userAnswers: IAnswer[];
  id: number;
}

export function History() {
  const reports = JSON.parse(String(localStorage.getItem('reports')));
  const navigate = useNavigate();

  return (
    <Container>
      <Exit onClick={() => navigate('/')}>
        <ImExit />
      </Exit>
      <Content>
        <h1>History</h1>
        <HistoricList>
          {reports.map((report: IReport, index: number) => (
            <HistoryLink
              key={report.id}
              date={report.formattedDate}
              answers={report.userAnswers}
              id={report.id}
              identifier={index + 1}
            />
          ))}
        </HistoricList>
      </Content>
    </Container>
  );
}
