import React from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { questionsSelector } from '../slices/questionsSlice.ts';
import { getQuestions } from '../slices/questionsSlice.ts';
import { useAppSelector, useAppDispatch } from '../hooks.ts';
import { ModeProps } from '../types.ts';

export const Start: React.FC<ModeProps> = ({ setMode }) => {
  const dispatch = useAppDispatch();
  const quizData = useAppSelector(questionsSelector);

  const submit = async () => {
    dispatch(getQuestions()).then(() => {
      if (quizData.hasErrors || !quizData.questions) {
        alert('ошибка пробовать снова');
      } else {
        setMode('process');
      }
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="300px"
          marginTop={4}
          gap={4}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to Quiz!
          </Typography>

          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={submit}
          >
            Start
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
