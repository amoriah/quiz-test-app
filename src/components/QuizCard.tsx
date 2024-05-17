import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Checkbox,
  Typography,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { IAnswer, IQuestion } from '../types';
interface QuestionProps {
  len: number;
  count: number;
  question: IQuestion;
  options: string[];
  onNext: (result: IAnswer) => void;
}

export const QuizCard: React.FC<QuestionProps> = ({
  len,
  count,
  question,
  options,
  onNext,
}) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const answerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    if (question.multiple) {
      if (event.target.checked) {
        setAnswers([...answers, answer]);
      } else {
        setAnswers(answers.filter((a) => a !== answer));
      }
    } else {
      setAnswers([answer]);
    }
  };

  const handleNext = () => {
    if (answers.length) {
      const answerData: IAnswer = {
        questionNumber: count,
        question,
        answer: answers,
        isRight: question.correct_answer === answers[0],
      };
      setAnswers([]);
      onNext(answerData);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="300px"
          marginTop={6}
          gap={2}
          p={4}
        >
          <Grid item display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" gutterBottom>
              Question {count} from {len}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Difficulty: {question.difficulty}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body1" gutterBottom>
              {question.question}
            </Typography>
          </Grid>

          <Grid item>
            <FormControl component="fieldset">
              {question.multiple ? (
                <FormGroup>
                  {options.map((answer) => (
                    <FormControlLabel
                      key={answer}
                      control={
                        <Checkbox
                          checked={answers.includes(answer)}
                          onChange={answerChange}
                          value={answer}
                        />
                      }
                      label={answer}
                    />
                  ))}
                </FormGroup>
              ) : (
                <RadioGroup value={answers[0] || null} onChange={answerChange}>
                  {options.map((answer) => (
                    <FormControlLabel
                      key={answer}
                      value={answer}
                      control={<Radio />}
                      label={answer}
                    />
                  ))}
                </RadioGroup>
              )}
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={!answers.length}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
