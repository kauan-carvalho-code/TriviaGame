import { Button } from 'components/Button';
import React, { FormEvent, useState } from 'react';

import { Form, Input, Title } from './styles';

export function QuestionsForm() {
  const [value, setValue] = useState<number>();
  const [verification, setVerification] = useState(false);

  function handleChange(inputValue: number) {
    if (inputValue <= 50 && inputValue >= 0) setValue(inputValue);
  }

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
          <Button background="#B48EAD" hover onClick={() => setVerification(true)}>
            Play
          </Button>
        </>
      ) : (
        <>
          <Title>Are you sure?</Title>
          <Button background="#A3BE8C" hover>
            Start
          </Button>
          <Button background="#BF616A" hover onClick={() => setVerification(false)}>
            Cancel
          </Button>
        </>
      )}
    </Form>
  );
}
