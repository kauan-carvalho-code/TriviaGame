import axios from 'axios';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';

export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IAnswer {
  question: string;
  correctAnswer: string;
  answer: string;
  isCorrect: boolean;
}

interface QuestionsProviderProps {
  children: ReactNode;
}

interface QuestionsContextData {
  questions: IQuestion[];
  filterQuestions: Function;
  fetchQuestions: () => void;
  userAnswers: IAnswer[];
  setUserAnswers: Dispatch<SetStateAction<IAnswer[]>>;
}

const QuestionsContext = createContext<QuestionsContextData>({} as QuestionsContextData);

export function QuestionsProvider({ children }: QuestionsProviderProps) {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<IAnswer[]>([]);

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
    userAnswers,
    setUserAnswers,
  };

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
}

export function useQuestions() {
  const context = useContext(QuestionsContext);

  return context;
}
