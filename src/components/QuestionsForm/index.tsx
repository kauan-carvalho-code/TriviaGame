import { Button } from 'components/Button';
import { useQuestions } from 'hooks/useQuestions';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Title } from './styles';

export function QuestionsForm() {
  const [value, setValue] = useState(0);
  const [verification, setVerification] = useState(false);
  const { filterQuestions } = useQuestions();
  const navigate = useNavigate();

  const handleChange = (inputValue: number) => {
    if (inputValue <= 50 && inputValue >= 0) setValue(inputValue);
  };

  const handleClick = () => {
    filterQuestions(value);
    navigate('/game/1');
  };

  return (
    <Form>
      {!verification ? (
        <>
          <Title>How many questions do you want?</Title>
          <Input
            type="number"
            placeholder="Maximum of 50 questions"
            min={1}
            max={99}
            value={value}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              handleChange(+e.currentTarget.value)
            }
          />
          <Button disabled={value < 1} hover onClick={() => setVerification(true)}>
            Play
          </Button>
        </>
      ) : (
        <>
          <Title>Are you sure?</Title>
          <Button className="correct" hover onClick={handleClick}>
            Start
          </Button>
          <Button className="incorrect" hover onClick={() => setVerification(false)}>
            Cancel
          </Button>
        </>
      )}
    </Form>
  );
}
