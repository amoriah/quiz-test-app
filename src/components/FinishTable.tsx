import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks.ts';
import { answersSelector, cleanAnswers } from '../slices/answersSlice.ts';
import { cleanQuestions } from '../slices/questionsSlice.ts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Button,
  Box,
} from '@mui/material';
import { ModeProps } from '../types.ts';

export const FinishTable: React.FC<ModeProps> = ({ setMode }) => {
  const answersData = useAppSelector(answersSelector);
  const dispatch = useAppDispatch();
  const answers = answersData.answers;

  const rowStyle = { fontSize: '1.2em', fontWeight: '500' };

  const restart = () => {
    setMode('start');
    dispatch(cleanAnswers());
    dispatch(cleanQuestions());
  };

  const answersArray = [...answers];
  const sortedArray = answersArray.sort((a, b) => {
    const difficultyOrder = ['hard', 'medium', 'easy'];
    return (
      difficultyOrder.indexOf(a.question.difficulty) -
      difficultyOrder.indexOf(b.question.difficulty)
    );
  });

  const correctAnswers = answers.filter((result) => result.isRight).length;
  return (
    <Container maxWidth="md">
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={rowStyle}>№</TableCell>
              <TableCell style={rowStyle}>question</TableCell>
              <TableCell style={rowStyle}>difficulty</TableCell>
              <TableCell style={rowStyle}>result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedArray.map((result, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: result.isRight ? '#ccff90' : '#ffccbc',
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{result.question.question}</TableCell>
                <TableCell>{result.question.difficulty}</TableCell>
                <TableCell>{result.isRight ? 'Right' : 'Wrong'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h6" align="center" gutterBottom>
          {correctAnswers}/{answers.length} is correct
        </Typography>
      </Paper>
      <Box display="flex" justifyContent="center" m={2}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={restart}
        >
          restart
        </Button>
      </Box>
    </Container>
  );
};
