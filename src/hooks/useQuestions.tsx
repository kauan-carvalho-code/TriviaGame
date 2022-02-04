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
  filterQuestions: Function;
  fetchQuestions: () => void;
}

const QuestionsContext = createContext<QuestionsContextData>({} as QuestionsContextData);

export function QuestionsProvider({ children }: QuestionsProviderProps) {
  const [questions, setQuestions] = useState<IQuestions[]>([]);

  console.log(questions);

  const fetchQuestions = () => {
    axios.get('https://opentdb.com/api.php?amount=50').then((response) => {
      setQuestions(response.data.results);
    });
  };

  const filterQuestions = (value: number) => {
    const filteredQuestions = questions.filter((_question, index) => index < value);
    setQuestions(filteredQuestions);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuestions();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const value = {
    filterQuestions,
    fetchQuestions,
    questions,
  };

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
}

export function useQuestions() {
  const context = useContext(QuestionsContext);

  return context;
}
