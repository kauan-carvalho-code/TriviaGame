import axios from 'axios';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface IQuestions {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionsProviderProps {
  children: ReactNode;
}

interface QuestionsContextData {
  questions: IQuestions[];
}

const QuestionsContext = createContext<QuestionsContextData>({} as QuestionsContextData);

export function QuestionsProvider({ children }: QuestionsProviderProps) {
  const [questions, setQuestions] = useState<IQuestions[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get('https://opentdb.com/api.php?amount=100').then((response) => {
        setQuestions(response.data.results);
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);

  return context;
}
